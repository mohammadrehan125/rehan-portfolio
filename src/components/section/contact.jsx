"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            I'm interested in backend engineering roles, distributed systems projects, and innovative tech challenges.
            Let's connect!
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-12">
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <Mail size={20} className="text-cyan-400" />
              <a href="mailto:mohd.rehan.dev@gmail.com" className="hover:text-cyan-400 transition-colors">
                mohd.rehan.dev@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <span className="text-cyan-400">📱</span>
              <a href="tel:+91-9690861297" className="hover:text-cyan-400 transition-colors">
                +91-9690861297
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/mohammadrehan125"
              className="p-3 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github size={20} className="text-slate-400 hover:text-cyan-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-rehan-2379a61b8/"
              className="p-3 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-slate-400 hover:text-cyan-400" />
            </a>
            <a
              href="mailto:mohd.rehan.dev@gmail.com"
              className="p-3 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail size={20} className="text-slate-400 hover:text-cyan-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
