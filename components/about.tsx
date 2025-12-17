"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { ScrollReveal, ScrollRevealParagraph } from "./scroll-reveal"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 md:px-12">
      <div className="absolute inset-0 z-0">
        <Image src="/images/40cd9de1-5d0f-4e9f-949b-ade0dd1c3bcc.png" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'Tempest Apache', sans-serif" }}
          >
            <ScrollReveal>About Me</ScrollReveal>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={imageRef}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden glow"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              <Image
                src="/images/wmremove-transformed-20-281-29-imgupscaler.jpg"
                alt="Sibi Antony"
                fill
                className="object-cover scale-110"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-6" style={{ fontFamily: "'Lushgunin-Normal', sans-serif" }}>
            <ScrollRevealParagraph className="text-lg text-white" delay={0.3}>
              {"Hello, I'm Sibi Antony."}
            </ScrollRevealParagraph>

            <ScrollRevealParagraph className="text-lg text-white/90" delay={0.4}>
              {
                "What keeps me going is curiosity—the relentless urge to learn, experiment, and make something meaningful out of a spark of an idea. I am a solution-oriented creative who believes that collaboration and adaptability are the keys to innovation."
              }
            </ScrollRevealParagraph>

            <ScrollRevealParagraph className="text-lg text-white/90" delay={0.5}>
              {
                "I specialize in taking complex problems and unraveling them into user-centric stories. My goal isn't just to write code, but to create impact."
              }
            </ScrollRevealParagraph>

            <div className="pt-4">
              <h3 className="text-primary font-semibold mb-2 text-white">
                <ScrollReveal delay={0.6}>Current Obsession:</ScrollReveal>
              </h3>
              <ScrollRevealParagraph className="text-white/80" delay={0.65}>
                {
                  "Leveraging the power of AI to redefine development. From optimizing workflows to exploring the nuances of prompt engineering, I love finding new ways technology can enhance human creativity."
                }
              </ScrollRevealParagraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
