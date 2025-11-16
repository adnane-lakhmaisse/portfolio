"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  Layers,
  Zap,
  Palette,
  Server,
  Box,
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "Redux", icon: Layers },
      { name: "React Router", icon: Globe },
      { name: "React Hook Form", icon: Layers },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "HTML5", icon: Layers },
      { name: "CSS3", icon: Palette },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Bootstrap", icon: Palette },
      { name: "Material-UI", icon: Palette },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "PHP", icon: Code2 },
      { name: "Laravel", icon: Server },
      { name: "Python", icon: Code2 },
      { name: "JWT", icon: Cloud },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Vercel", icon: Cloud },
      { name: "Netlify", icon: Cloud },
      { name: "Postman", icon: Box },
      { name: "Chart.js", icon: Zap },
    ],
  },
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
      ref={ref}
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Skills & Technologies
        </h2>
        <div className="h-px w-16 bg-white/10 mx-auto mb-6" />
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications.
        </p>
      </motion.div>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white/90 mb-6">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillBadge
                  key={skill.name}
                  skill={skill}
                  index={categoryIndex * 10 + skillIndex}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function SkillBadge({
  skill,
  index,
  inView,
}: {
  skill: { name: string; icon: React.ComponentType<{ className?: string }> }
  index: number
  inView: boolean
}) {
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="group"
    >
      <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-default">
        <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
        <span className="text-white/80 group-hover:text-white font-medium transition-colors">
          {skill.name}
        </span>
      </div>
    </motion.div>
  )
}

