"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "ITS Golden Card Management System",
      description:
        "Comprehensive membership management system for card issuance lifecycle. Implemented scalable backend APIs, Kafka for asynchronous event handling, and achieved 30% improvement in API response times.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Apache Kafka", "AWS"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "EV Roaming Platform (OCPI 2.1.1)",
      description:
        "Developed seamless communication platform between CPOs and eMSPs for EV charging. Designed RESTful APIs for real-time charge point info exchange and session management.",
      tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Redis", "ElasticSearch", "Kafka"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Advanced EV Charging Management (OCPP 2.0.1)",
      description:
        "Built advanced EV charging system with smart charging, firmware updates, and real-time diagnostics. Reduced operational downtime by 40% and achieved full OCPP 2.0.1 compliance.",
      tech: ["Java", "Spring Boot", "WebSockets", "Apache Kafka", "AWS", "Microservices"],
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Key projects showcasing expertise in backend development, microservices architecture, and distributed
            systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
              ></div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-600 text-slate-300 hover:text-cyan-400 bg-transparent"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 border border-cyan-500/30"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
