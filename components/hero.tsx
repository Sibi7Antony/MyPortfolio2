"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background Image - Full Cover */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image src="/images/wmremove-transformed.png" alt="Sibi Antony" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
      </motion.div>

      <motion.div
        className="relative z-20 min-h-screen flex flex-col justify-end pb-16 px-6 md:px-12"
        style={{ opacity }}
      >
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Main Title - Left side */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              <h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Kaelie', sans-serif" }}
              >
                <span className="block">FULL STACK</span>
                <span className="block">WEB DEVELOPER</span>
                <span className="block">AND AI ENGINEER.</span>
              </h1>
            </motion.div>

            <motion.div
              className="max-w-sm md:text-right"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              <p
                className="text-white text-xs md:text-sm leading-relaxed"
                style={{ fontFamily: "'DEC Terminal Modern', sans-serif" }}
              >
                A developer who loves to innovate and an engineer who loves to solve problems. I create solutions that
                are simple, but impactful.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
