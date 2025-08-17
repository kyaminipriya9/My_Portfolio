import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero (keeps your original colors/feel) */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Hi, I&apos;m <span className="text-purple-300">Yamini</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Third-year <span className="text-purple-300">Mathematics &amp; Computing</span> undergraduate at
          <span className="text-purple-300"> IIT Goa</span>.  
          I explore data analysis and machine learning, turning mathematical ideas into useful insights and visualizations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm"
        >
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            CGPA: 7.75/10
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Mathematics &amp; Computing
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            IIT Goa
          </span>
        </motion.div>
      </section>

      {/* Brief About */}
      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            I enjoy exploring datasets, building ML models, and presenting results through clear visuals.  
            My coursework and projects span EDA, classification, and dimensionality reduction.  
            I also practice coding and problem-solving in data structures and algorithms.  
            When I’m not coding, you’ll often find me running, playing badminton, or painting.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold">Quick Info</h3>
          <ul className="mt-3 text-gray-300 text-sm space-y-2">
            <li>Location: Chittoor, Andhra Pradesh</li>
            <li>Email: k.priya.22033@iitgoa.ac.in</li>
            <li>Phone: +91 7893016228</li>
          </ul>
        </div>
      </section>
    </>
  );
}
