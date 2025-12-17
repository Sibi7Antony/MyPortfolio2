"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ScrollReveal, ScrollRevealParagraph } from "./scroll-reveal"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 md:px-12">
      <div className="absolute inset-0 z-0">
        <Image src="/images/fc4e22f1-2515-4a1e-a125-ab79908813f7.png" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Tempest Apache', sans-serif" }}
          >
            <ScrollReveal>Get In Touch</ScrollReveal>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <ScrollRevealParagraph
              className="text-white/80 text-sm leading-relaxed"
              delay={0.3}
              style={{ fontFamily: "'TheGoodMonolith', sans-serif" }}
            >
              {
                "Got an idea that's waiting to come alive? Let's build it together. Whether you're a designer, developer, or a creative studio, I'd love to collaborate and turn your thoughts into something real."
              }
            </ScrollRevealParagraph>
            <motion.a
              href="mailto:sibistark@hotmail.com?subject=Let's%20Collaborate"
              className="inline-block mt-6 px-6 py-3 border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors"
              style={{ fontFamily: "'Skomelr Quantum', sans-serif" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {"LET'S COLLABORATE"}
            </motion.a>
          </div>

          <div>
            <ScrollRevealParagraph
              className="text-white/80 text-sm leading-relaxed"
              delay={0.4}
              style={{ fontFamily: "'TheGoodMonolith', sans-serif" }}
            >
              {
                "If you're a digital agency or company looking for a designer, developer who cares about details, motion, and meaningful design. I'm always open to exciting opportunities."
              }
            </ScrollRevealParagraph>
            <motion.a
              href="mailto:sibistark@hotmail.com?subject=Hire%20Me"
              className="inline-block mt-6 px-6 py-3 border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors"
              style={{ fontFamily: "'Skomelr Quantum', sans-serif" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              HIRE ME
            </motion.a>
          </div>

          <div>
            <ScrollRevealParagraph
              className="text-white/80 text-sm leading-relaxed"
              delay={0.5}
              style={{ fontFamily: "'TheGoodMonolith', sans-serif" }}
            >
              {
                "You can reach me through any of my socials below or drop me a message. I'd be happy to connect, collaborate, or just chat about new ideas."
              }
            </ScrollRevealParagraph>
            <div className="flex flex-wrap gap-4 mt-6" style={{ fontFamily: "'Skomelr Quantum', sans-serif" }}>
              <motion.a
                href="https://www.linkedin.com/in/sibi-antony-l-05063b251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs hover:text-white/70 transition-colors"
                whileHover={{ y: -2 }}
              >
                LINKEDIN
              </motion.a>
              <motion.a
                href="https://github.com/Sibi7Antony"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs hover:text-white/70 transition-colors"
                whileHover={{ y: -2 }}
              >
                GITHUB
              </motion.a>
              <motion.a
                href="mailto:sibiantonyatc@gmail.com"
                className="text-white text-xs hover:text-white/70 transition-colors"
                whileHover={{ y: -2 }}
              >
                EMAIL
              </motion.a>
              <motion.a
                href="tel:+918838588192"
                className="text-white text-xs hover:text-white/70 transition-colors"
                whileHover={{ y: -2 }}
              >
                PHONE
              </motion.a>
            </div>
          </div>
        </div>

        <motion.footer
          className="mt-20 pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="overflow-hidden flex justify-center">
            <motion.h2
              className="text-[8vw] md:text-[12vw] font-bold text-white/10 leading-none tracking-tighter whitespace-nowrap text-center"
              style={{ fontFamily: "'Tempest Apache', sans-serif" }}
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              SIBI ANTONY
            </motion.h2>
          </div>

          <p className="text-white/50 text-xs mt-6 text-center">© 2025 All rights reserved</p>
        </motion.footer>
      </div>
    </section>
  )
}
