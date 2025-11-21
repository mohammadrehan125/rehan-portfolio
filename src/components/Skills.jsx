import { motion } from 'framer-motion'

export default function SkillsSection() {
  const skillCategories = {
    'Programming Languages': ['Java', 'Java 8', 'Java 17', 'SQL'],
    'Frameworks & Libraries': ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate/JPA', 'Spring Data'],
    'Backend Technologies': ['Microservices', 'REST APIs', 'WebSockets'],
    'Databases & Caching': ['PostgreSQL', 'Redis', 'ElasticSearch'],
    'Tools & Technologies': ['Docker', 'Apache Kafka', 'JUnit', 'Mockito'],
    'Cloud & DevOps': ['AWS', 'Git', 'GitLab', 'Jira']
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id='skills' className='min-h-screen bg-[#0F1115] text-[#EAEAEA] py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h4 className='uppercase text-[#4FC3F7] text-sm tracking-wide mb-2'>What I Do</h4>
          <h1 className='text-5xl md:text-6xl font-jetbrains font-bold text-[#EAEAEA] mb-6'>Skills & Expertise</h1>
          <p className='text-[#9BA1A6] text-lg max-w-2xl mx-auto leading-relaxed'>
            A comprehensive overview of my technical skills and the technologies I work with to build scalable, efficient solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className='bg-[#1A1D23] border border-[#2A2D34] rounded-2xl p-6 hover:border-[#00BFA6] transition-colors duration-300'
            >
              <h3 className='text-xl font-semibold text-[#EAEAEA] mb-6 flex items-center'>
                <div className='w-2 h-2 bg-[#00BFA6] rounded-full mr-3'></div>
                {category}
              </h3>
              <div className='space-y-3'>
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    className='flex items-center group'
                  >
                    <div className='w-2 h-2 bg-[#4FC3F7] rounded-full mr-3 group-hover:bg-[#00BFA6] transition-colors duration-300'></div>
                    <span className='text-[#9BA1A6] group-hover:text-[#EAEAEA] transition-colors duration-300 font-medium'>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'
        >
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '15+', label: 'Technologies' },
            { number: '50+', label: 'Projects Completed' },
            { number: '98%', label: 'Test Coverage' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='text-4xl md:text-5xl font-bold text-[#00BFA6] mb-2'>{stat.number}</div>
              <div className='text-[#9BA1A6] font-medium'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}