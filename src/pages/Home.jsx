import { useState, useEffect } from "react";
import { fetchExercises } from "../services/exerciseApi";
import SearchBar from "../components/SearchBar";
import ExerciseList from "../components/ExerciseList";

function Home() {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function loadExercises() {
      const data = await fetchExercises(search);
      setExercises(data);
    }
    loadExercises();
  }, [search]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search your Exercises</h1>
      <SearchBar setSearch={setSearch} />
      <ExerciseList exercises={exercises} />
    </div>
  );
}

export default Home;
