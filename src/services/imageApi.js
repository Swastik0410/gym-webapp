// src/services/imageApi.js
import axios from "axios";

const PEXELS_API_URL = "https://api.pexels.com/v1/search";
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

// simple in-memory cache for the session
const imageCache = new Map();

/**
 * Fetch an image for an exercise by name.
 * Returns: { url, alt, photographer, photographerUrl } or null
 */
export async function fetchExerciseImage(name) {
  const key = (name || "").trim().toLowerCase();
  if (!key) return null;

  if (imageCache.has(key)) {
    return imageCache.get(key);
  }

  if (!PEXELS_KEY) {
    console.warn("Missing VITE_PEXELS_KEY in .env — skipping image fetch.");
    return null;
  }

  try {
    // query with helpful keywords to improve relevance
    const query = `${name} fitness exercise gym workout`;
    const res = await axios.get(PEXELS_API_URL, {
      headers: { Authorization: PEXELS_KEY },
      params: {
        query,
        per_page: 1,
        orientation: "landscape",
        size: "large"
      }
    });

    const photo = res?.data?.photos?.[0];
    if (!photo) {
      imageCache.set(key, null);
      return null;
    }

    const payload = {
      url: photo.src?.large || photo.src?.medium || photo.src?.original,
      alt: photo.alt || name,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url
    };

    imageCache.set(key, payload);
    return payload;
  } catch (err) {
    console.error("Pexels fetch error:", err);
    imageCache.set(key, null);
    return null;
  }
}
