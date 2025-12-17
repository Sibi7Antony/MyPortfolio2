"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { ScrollReveal, ScrollRevealParagraph } from "./scroll-reveal"
import { SpotlightCard } from "./spotlight-card"

// Added links for first two, removed links for last two
const projects = [
  {
    title: "CosmicWatch",
    subtitle: "Real-Time Near-Earth Asteroid Tracker",
    description:
      "Developed a web application using React and NASA's NeoWs API to visualize and monitor near-Earth asteroids in real-time.",
    tech: ["React", "NASA API", "JavaScript", "CSS"],
    year: "2025",
    link: "https://quiet-marzipan-349816.netlify.app/",
  },
  {
    title: "AegisAid",
    subtitle: "IoT Driven Healthcare for remote communities",
    description:
      "Developed an IoT-based health monitoring system with ESP32, sensors, AI chat-bot, and cloud dashboards for real-time remote care and early anomaly detection.",
    tech: ["ESP32", "IoT", "AI", "Cloud"],
    year: "2025",
    link: "https://dreampixelz.in/25/iot57/",
  },
  {
    title: "Smart Lock System",
    subtitle: "PIT-based Security Solution",
    description:
      "Built a PIT-based smart lock using Arduino with encrypted access control and scalable entry management for enhanced security.",
    tech: ["Arduino", "C++", "IoT", "Security"],
    year: "2023",
    link: null,
  },
  {
    title: "Contactless Sanitizer Dispenser",
    subtitle: "Dual Mount Dispenser System",
    description:
      "Designed a PIC microcontroller-powered contactless sanitizer dispenser with ultrasonic sensing for touchless hygiene solutions.",
    tech: ["PIC", "Ultrasonic", "Embedded"],
    year: "2021",
    link: null,
  },
]

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6 md:px-12">
      <div className="absolute inset-0 z-0">
        <Image src="/images/fc4e22f1-2515-4a1e-a125-ab79908813f7.png" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'Tempest Apache', sans-serif" }}
          >
            <ScrollReveal>Projects</ScrollReveal>
          </h2>
          <ScrollRevealParagraph
            className="text-white/80 mt-4 max-w-2xl"
            delay={0.3}
            style={{ fontFamily: "'Allan', sans-serif" }}
          >
            {
              "Every project I create has a story behind it. It's not just about making something. It's about exploring an idea, experimenting, failing a few times, and then finally watching it come alive."
            }
          </ScrollRevealParagraph>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-8" style={{ fontFamily: "'Allan', sans-serif" }}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-primary font-mono text-sm">{project.year}</span>
                      <span className="text-white/60">—</span>
                      <span className="text-white/60 text-sm">{project.subtitle}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-white/70 mt-4 max-w-2xl">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                    >
                      <ExternalLink className="text-primary" size={24} />
                    </motion.a>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
