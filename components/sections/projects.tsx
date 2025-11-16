"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, full-stack e-commerce solution with real-time inventory management and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "An elegant analytics dashboard with real-time data visualization and comprehensive reporting tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Mobile App",
    description: "A cross-platform mobile application with native performance and beautiful, intuitive user experience.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    tech: ["React Native", "TypeScript", "Firebase"],
    link: "#",
    github: "#",
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <div className="h-px w-16 bg-white/10 mx-auto mb-6" />
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          A selection of projects that showcase my expertise in modern web
          development and design.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: typeof projects[0]
  index: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="group h-full overflow-hidden hover:border-white/10 transition-all duration-500 hover:shadow-apple-glow">
        <div className="relative h-64 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
        </div>

        <CardHeader>
          <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
          <CardDescription className="text-base text-white/70">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.link, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

