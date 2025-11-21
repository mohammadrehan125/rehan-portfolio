import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id='about' className='min-h-screen bg-[#0F1115] text-[#EAEAEA] font-inter flex flex-col md:flex-row items-center justify-center p-10 gap-10'>
      {/* Left Section: About Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='max-w-lg'
      >
        <h4 className='uppercase text-[#4FC3F7] text-sm tracking-wide mb-2'>Who I Am</h4>
        <h1 className='text-5xl md:text-6xl font-jetbrains font-bold mb-6'>About Me</h1>
        <p className='text-[#9BA1A6] text-lg leading-relaxed mb-4'>
          I transform ideas into digital reality through clean code, thoughtful design, and innovative backend solutions that create real impact and drive meaningful change.
        </p>
        <p className='text-[#9BA1A6] text-lg leading-relaxed mb-6'>
          As a passionate <span className='text-[#00BFA6]'>Java Backend Developer</span> based in India, I specialize in building scalable microservices using <span className='text-[#00BFA6]'>Spring Boot</span>, <span className='text-[#00BFA6]'>Kafka</span>, and <span className='text-[#00BFA6]'>AWS</span>. My focus is on crafting efficient, secure, and maintainable APIs that deliver real business value.
        </p>

        {/* Music Card (inline SVG to avoid external icon dependency) */}
        <div className='bg-[#1A1D23] border border-[#2A2D34] rounded-2xl p-4 flex items-center justify-between w-full max-w-md shadow-sm'>
          <div>
            <p className='text-sm text-[#9BA1A6]'>Nothing Playing</p>
            <p className='font-semibold text-[#EAEAEA]'>Rehan</p>
          </div>

          {/* Inline Spotify-like glyph (simple circle + arcs) */}
          <div className='w-8 h-8 flex items-center justify-center'>
            <svg width='28' height='28' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <circle cx='12' cy='12' r='10' fill='#00BFA6'/>
              <path d='M7.5 10.5c3-1.5 6.5-1 9 0' stroke='#0F1115' strokeWidth='1.2' strokeLinecap='round' strokeLinejoin='round'/>
              <path d='M6.5 13.5c3-1.2 6.5-0.8 9 0' stroke='#0F1115' strokeWidth='1.2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Right Section: Developer Object Visualization */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='bg-[#1A1D23] border border-[#2A2D34] rounded-2xl p-6 font-mono text-sm text-[#EAEAEA] w-full max-w-md'
      >
        <div className='flex items-center gap-2 mb-4'>
          <div className='w-3 h-3 rounded-full bg-red-500'></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
          <div className='w-3 h-3 rounded-full bg-green-500'></div>
          <span className='ml-4 text-[#9BA1A6]'>developer.js</span>
        </div>
        <pre className='whitespace-pre-wrap font-mono text-sm overflow-x-auto text-left pl-4'>
{`const dev = {
  name: 'Mohammad Rehan',
  age: 25,
  role: 'Java Backend Developer',
  experience: '3+ Years',
  skills: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'Redis', 'AWS'],
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.quickLearner &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
        </pre>
      </motion.div>
    </section>
  )
}
