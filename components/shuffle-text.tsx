"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface ShuffleTextProps {
  text: string
  className?: string
  duration?: number
  characterSet?: string
}

export function ShuffleText({
  text,
  className = "",
  duration = 50,
  characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:',.<>?",
}: ShuffleTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(true)

  const shuffleText = useCallback(() => {
    let iteration = 0
    const maxIterations = text.length

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            if (char === " ") return " "
            return characterSet[Math.floor(Math.random() * characterSet.length)]
          })
          .join(""),
      )

      if (iteration >= maxIterations) {
        clearInterval(interval)
        setDisplayText(text)
        setIsAnimating(false)
      }

      iteration += 1 / 3
    }, duration)

    return () => clearInterval(interval)
  }, [text, characterSet, duration])

  useEffect(() => {
    const cleanup = shuffleText()
    return cleanup
  }, [shuffleText])

  return (
    <motion.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {displayText}
    </motion.span>
  )
}
