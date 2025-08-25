import { useState, useEffect } from "react";
import ExerciseList from "../components/ExerciseList";

function MyWorkouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myWorkouts")) || [];
    setWorkouts(saved);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">🔥 My Workouts</h1>
      {workouts.length > 0 ? (
        <ExerciseList exercises={workouts} />
      ) : (
        <p>No saved workouts yet.</p>
      )}
    </div>
  );
}

export default MyWorkouts;
