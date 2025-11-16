"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const experiences = [
  {
    title: "Internship - Full Stack Developer",
    company: "Europcar Maroc",
    location: "Casablanca",
    period: "April 2025 (1 month)",
    description:
      "Design and development of a vehicle fleet management system with integrated statistical dashboards (maintenance, vehicles, contracts). Collaborated with business teams to improve SQL performance and user experience.",
    technologies: ["React.js", "Next.js", "Express.js", "SQL Server", "Chart.js", "ECharts", "Tailwind CSS", "MUI"],
  },
]

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-32 px-6 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Experience
        </h2>
        <div className="h-px w-16 bg-white/10 mx-auto mb-6" />
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          A journey of growth, learning, and building exceptional products.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              experience={exp}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({
  experience,
  index,
  inView,
}: {
  experience: typeof experiences[0]
  index: number
  inView: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative pl-20"
    >
      {/* Timeline Dot */}
      <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white/60" />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-white">
          {experience.title}
        </h3>
        <div className="flex items-center gap-3 text-white/70 flex-wrap">
          <span className="font-medium">{experience.company}</span>
          {experience.location && (
            <>
              <span className="text-white/40">•</span>
              <span>{experience.location}</span>
            </>
          )}
          <span className="text-white/40">•</span>
          <span>{experience.period}</span>
        </div>
        <p className="text-white/70 leading-relaxed max-w-2xl mb-3">
          {experience.description}
        </p>
        {experience.technologies && (
          <div className="flex flex-wrap gap-2 mt-3">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

