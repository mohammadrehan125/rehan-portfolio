"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Java 8", "Java 17", "OOP", "Functional Programming"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate/JPA", "Spring Data"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Docker", "Apache Kafka", "ElasticSearch", "Redis", "WebSockets", "AWS"],
    },
    {
      category: "Database & Version Control",
      skills: ["PostgreSQL", "SQL", "Git", "GitLab"],
    },
    {
      category: "Testing & Architecture",
      skills: ["JUnit", "Mockito", "Microservices", "REST APIs", "Data Structures & Algorithms"],
    },
    {
      category: "Development Tools",
      skills: ["Jira", "Maven", "Gradle", "IDE"],
    },
  ]

  return (
 <>
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Core Competencies</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise in Java backend development, cloud technologies, and distributed systems
            architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-400 group">
                    <span className="w-2 h-2 bg-cyan-400/50 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors"></span>
                    <span className="group-hover:text-cyan-400 transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
 </>
  )
}
