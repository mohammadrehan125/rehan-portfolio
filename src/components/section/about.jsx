"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Text Content */}
          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Who I Am</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              I'm a passionate Software Engineer with 3+ years of experience crafting robust and efficient Java-based
              solutions. My expertise lies in designing scalable microservices architectures and optimizing system
              performance.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              At Samin Tekmindz, I've built comprehensive systems for membership management and EV charging
              infrastructure. I specialize in reducing API response times (achieved 30% improvement), implementing
              event-driven architectures with Kafka, and ensuring high test coverage for production reliability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-3xl font-bold text-cyan-400">3+</p>
                <p className="text-slate-400 text-sm">Years Experience</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-3xl font-bold text-cyan-400">98%+</p>
                <p className="text-slate-400 text-sm">Test Coverage</p>
              </div>
            </div>
          </div>

          {/* Right: Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-lg p-6 font-mono text-sm overflow-hidden border border-slate-700"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <pre className="text-slate-300 whitespace-pre-wrap break-words">
              {`const engineer = {
  name: "Mohammad Rehan",
  role: "Software Engineer",
  experience: "3+ years",
  specialization: "Backend/Java",
  skills: [
    "Java", "Spring Boot",
    "Microservices", "REST APIs",
    "Kafka", "PostgreSQL",
    "AWS", "Docker"
  ],
  expertise: "Performance & Scalability",
  achievement: "30% API response improvement"
}`}
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
