"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Code, Database, Wrench, Brain, Cloud } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"
import { SpotlightCard } from "./spotlight-card"

const skillCategories = [
  {
    title: "Languages & Web",
    icon: Code,
    skills: ["JAVA", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    title: "Software & Tools",
    icon: Wrench,
    skills: ["VS Code", "Multisim", "Figma"],
  },
  {
    title: "AI & Modern Tools",
    icon: Brain,
    skills: ["AI Prompting", "Replit", "Trae", "Cursor"],
  },
]

const certifications = [
  { title: "AI Foundations Associate", org: "Oracle University", icon: Brain },
  { title: "Full Stack Web Developer", org: "TAP Ed-tech", icon: Code },
  { title: "Google Analytics", org: "Google", icon: Award },
  { title: "Prompt Engineering", org: "Infosys", icon: Brain },
  { title: "AI Chat Interface Developer", org: "IBM SkillBuild", icon: Brain },
  { title: "Technology Job Simulation", org: "Deloitte", icon: Award },
  { title: "AWS Cloud Practitioner", org: "AWS Training", icon: Cloud },
]

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6 md:px-12">
      <div className="absolute inset-0 z-0">
        <Image src="/images/31ba08bd-f3db-40a0-bd24-586c983300dd.png" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'Tempest Apache', sans-serif" }}
          >
            <ScrollReveal>Skills & Certifications</ScrollReveal>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-6 h-full" style={{ fontFamily: "'Allan', sans-serif" }}>
                <category.icon className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <div>
          <h3
            className="text-2xl md:text-3xl font-bold mb-8 text-white"
            style={{ fontFamily: "'Tempest Apache', sans-serif" }}
          >
            <ScrollReveal>Achievements & Recognition</ScrollReveal>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              >
                <SpotlightCard className="p-4" style={{ fontFamily: "'Allan', sans-serif" }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <cert.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                      <p className="text-white/60 text-xs">{cert.org}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
