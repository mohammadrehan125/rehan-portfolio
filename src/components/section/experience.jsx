"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      year: "July 2022 – Present",
      role: "Software Engineer",
      company: "Samin Tekmindz India Pvt Ltd",
      description:
        "Developing scalable Java-based solutions including ITS Golden Card Management System and EV Charging Platforms. Implemented Kafka for asynchronous event handling, reduced API response times by 30%, and achieved 98%+ test coverage.",
    },
    {
      year: "Feb 2022 – July 2022",
      role: "Software Engineer Trainee",
      company: "Samin Tekmindz India Pvt Ltd",
      description:
        "Developed critical software modules reducing system downtime by 40%. Received CEO Spot Recognition Award for outstanding performance and exceptional coding skills during trainee tenure.",
    },
    {
      year: "2018 – 2022",
      role: "B.Tech - Computer Science",
      company: "Dr. A.P.J. Abdul Kalam Technical University",
      description:
        "Graduated with CGPA 7.64. Built strong foundation in data structures, algorithms, and software development principles.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Professional Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950"></div>

              {/* Timeline line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-1.5 top-6 bottom-0 w-0.5 bg-slate-700"></div>
              )}

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <p className="text-cyan-400 text-sm font-semibold">{exp.year}</p>
                <h3 className="text-xl font-bold text-white mt-2">{exp.role}</h3>
                <p className="text-slate-400 text-sm mb-3">{exp.company}</p>
                <p className="text-slate-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
