import { motion } from "framer-motion";
import { Dumbbell, Activity, BarChart3, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Hero Section */}
      
      
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Gradient blobs */}
        <div className="">
            <img className="h-50" src="/front.jpg" alt="img" />
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 bg-brand-500/20 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/2 w-[30rem] h-[30rem] translate-x-1/2 bg-brand-700/20 blur-[140px] rounded-full"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-400 to-brand-200 text-transparent bg-clip-text"
        >
          Transform Your Fitness Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          Discover exercises, track your progress, and build custom workouts with our sleek and modern app — powered by real data and visuals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-8 flex gap-4"
        >
          <Link to="/exercises" className="btn-primary text-lg px-6 py-3 hover:bg-blue-900">
            🔍 Browse Exercises
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl border border-white/20 text-slate-200 hover:border-brand-400/60 hover:text-brand-300 transition hover:bg-blue-900"
          >
            ✉️ Contact Us
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-slate-900/50 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Our App?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-6 flex flex-col items-center text-center">
              <Dumbbell className="w-10 h-10 text-brand-400 mb-4" />
              <h3 className="font-semibold">Extensive Library</h3>
              <p className="text-slate-400 mt-2 text-sm">
                Hundreds of exercises across all muscle groups, powered by API data.
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <Activity className="w-10 h-10 text-brand-400 mb-4" />
              <h3 className="font-semibold">Smart Tracking</h3>
              <p className="text-slate-400 mt-2 text-sm">
                Save workouts to track your personal fitness journey.
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <BarChart3 className="w-10 h-10 text-brand-400 mb-4" />
              <h3 className="font-semibold">Progress Insights</h3>
              <p className="text-slate-400 mt-2 text-sm">
                Visualize your growth with clean, modern analytics (coming soon).
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center">
              <Mail className="w-10 h-10 text-brand-400 mb-4" />
              <h3 className="font-semibold">Get in Touch</h3>
              <p className="text-slate-400 mt-2 text-sm">
                Our team is here to support you. Reach out any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()}.Swastik Roy 
      </footer>
    </div>
  );
}

export default Landing;
