// src/components/ExerciseCard.jsx
import { useEffect, useState } from "react";
import { fetchExerciseImage } from "../services/imageApi";

export default function ExerciseCard({ exercise }) {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveWorkout = () => {
    const saved = JSON.parse(localStorage.getItem("myWorkouts")) || [];
    if (!saved.find((ex) => ex.name === exercise.name)) {
      saved.push(exercise);
      localStorage.setItem("myWorkouts", JSON.stringify(saved));
      alert("✅ Added to My Workouts!");
    }
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      const data = await fetchExerciseImage(exercise.name);
      if (mounted) {
        setImg(data);
        setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [exercise.name]);

  return (
    <div className="card overflow-hidden group">
      {/* Image header */}
      <div className="relative h-48 w-full bg-slate-900">
        {loading ? (
          <div className="h-full w-full animate-pulse bg-gradient-to-br from-slate-800 to-slate-900" />
        ) : img ? (
          <>
            <img
              src={img.url}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            {/* photo credit */}
            <div className="absolute bottom-2 right-2 text-xs text-white/70">
              <a
                href={img.photographerUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Photo: {img.photographer}
              </a>
              <span className="mx-1">·</span>
              <a
                href="https://www.pexels.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Pexels
              </a>
            </div>
          </>
        ) : (
          // fallback if no image found
          <div className="h-full w-full grid place-items-center bg-slate-900">
            <div className="text-slate-400 text-sm">No image available</div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <h2 className="text-lg font-semibold tracking-tight">{exercise.name}</h2>
        <p className="mt-2 text-sm text-slate-300 line-clamp-4">
          {exercise.instructions}
        </p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {exercise.type && <span className="tag">Type: {exercise.type}</span>}
          {exercise.muscle && <span className="tag">Muscle: {exercise.muscle}</span>}
          {exercise.equipment && (
            <span className="tag">Equipment: {exercise.equipment}</span>
          )}
          {exercise.difficulty && (
            <span className="tag">Difficulty: {exercise.difficulty}</span>
          )}
        </div>

        <button onClick={saveWorkout} className="btn-primary mt-4 w-full">
          ➕ Save to My Workouts
        </button>
      </div>
    </div>
  );
}
