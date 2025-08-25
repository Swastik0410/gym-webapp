import ExerciseCard from "./ExerciseCard";

export default function ExerciseList({ exercises }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {exercises.map((ex, i) => (
        <ExerciseCard key={i} exercise={ex} />
      ))}
    </div>
  );
}
