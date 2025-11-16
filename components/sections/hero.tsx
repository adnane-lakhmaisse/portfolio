"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code2, Database, Globe } from "lucide-react"

const floatingIcons = [
  { Icon: Code2, x: "10%", y: "20%", delay: 0 },
  { Icon: Database, x: "80%", y: "30%", delay: 0.2 },
  { Icon: Globe, x: "50%", y: "60%", delay: 0.4 },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, x, y, delay }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.05, 0.08, 0.05],
              scale: [1, 1.1, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-16 h-16 md:w-24 md:h-24 text-white" />
          </motion.div>
        ))}
      </div>

      {/* Spotlight Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Adnane Lakhmaisse
            <br />
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            React & Node.js Specialist • Open Source Enthusiast
            <br />
            <span className="text-base md:text-lg text-white/60">
              Turning ideas into reality • Beni Mellal, Morocco 🇲🇦
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

