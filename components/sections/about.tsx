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
            Hey there! I'm <span className="text-white font-semibold">Adnane Lakhmaisse</span>, a <span className="text-white/90">Specialized Technician in Full-Stack Web Development</span> based in <span className="text-white/90">Beni Mellal, Morocco 🇲🇦</span>. Passionate about creating efficient and modern digital solutions, I master front-end and back-end technologies with strong adaptability and team spirit. Motivated by innovation, continuous learning, and solving concrete problems.
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            Currently, I'm diving deep into <span className="text-white/90">Next.js</span>, <span className="text-white/90">TypeScript</span>, and <span className="text-white/90">Advanced React Patterns</span>. My passion lies in clean code, UI/UX design, and contributing to open source projects. I believe in coding with passion and building with purpose.
          </p>
          
          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="text-white/90 font-medium">Diploma in Specialized Technician in Digital Development</p>
                <p className="text-white/60 text-sm">Specialized Institute of Applied Technology • 2023 - 2025</p>
              </div>
              <div>
                <p className="text-white/90 font-medium">Baccalaureate in Life and Earth Sciences</p>
                <p className="text-white/60 text-sm">Lycée Moulay Rchid • 2022 - 2023</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-white/70 leading-relaxed">
            I'm always open to collaborating on innovative projects, creative web solutions, and helping with performance optimization, UI/UX improvements, and code reviews. Let's build something amazing together!
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
              src="/profile-2.jpeg"
              alt="Adnane Lakhmaisse"
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

