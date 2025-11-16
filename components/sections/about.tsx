"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="h-px w-16 bg-white/10 mb-8" />
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            I'm a passionate full-stack developer with a keen eye for design
            and a love for creating beautiful, functional digital experiences.
            With expertise in modern web technologies, I bring ideas to life
            through clean code and thoughtful user interfaces.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            My approach combines technical excellence with design sensibility,
            ensuring every project not only works flawlessly but also delights
            users with its elegance and attention to detail.
          </p>
        </motion.div>

        {/* Avatar/Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/5 shadow-card">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
              alt="Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
        </motion.div>
      </div>
    </section>
  )
}

