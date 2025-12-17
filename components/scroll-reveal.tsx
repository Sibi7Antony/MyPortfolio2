"use client"

import type { CSSProperties } from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: string
  className?: string
  delay?: number
  style?: CSSProperties
}

export function ScrollReveal({ children, className = "", delay = 0, style }: ScrollRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const words = children.split(" ")

  return (
    <span ref={ref} className={`inline ${className}`} style={style}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + i * 0.05,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

interface ScrollRevealParagraphProps {
  children: string
  className?: string
  delay?: number
  style?: CSSProperties
}

export function ScrollRevealParagraph({ children, className = "", delay = 0, style }: ScrollRevealParagraphProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const words = children.split(" ")

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.4,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + i * 0.02,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  )
}
