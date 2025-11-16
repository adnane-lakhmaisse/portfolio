"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
]

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 max-w-4xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Let's Build Something Great
        </h2>
        <div className="h-px w-16 bg-white/10 mx-auto mb-8" />
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <Icon className="w-5 h-5" />
                  {social.label}
                </Button>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none -z-10 rounded-3xl" />
      </motion.div>
    </section>
  )
}

