import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import MyWorkouts from "./pages/MyWorkouts";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <nav className="bg-slate-900/60 border-b border-white/10 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-brand-400">🏋️ ExerciseApp</h1>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-brand-400">Home</Link>
            <Link to="/exercises" className="hover:text-brand-400">Exercises</Link>
            <Link to="/my-workouts" className="hover:text-brand-400">My Workouts</Link>
            <Link to="/contact" className="hover:text-brand-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/exercises" element={<Home />} />
          <Route path="/my-workouts" element={<MyWorkouts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
