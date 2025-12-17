"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "CONTACT", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-colors duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md" : ""
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <nav
          className="w-full flex items-center justify-between"
          style={{ fontFamily: "'Skomelr Quantum', sans-serif" }}
        >
          <motion.a href="#home" className="text-white" whileHover={{ scale: 1.05 }}>
            <div className="text-sm font-bold whitespace-nowrap">SiBi AnTonY</div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white hover:text-white/80 transition-colors relative group text-[10px] tracking-wider"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="/Sibi Antony_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[10px] tracking-wider hover:text-white/80 transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              RESUME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ fontFamily: "'Skomelr Quantum', sans-serif" }}
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-bold text-white hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="/Sibi Antony_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-bold text-white hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                RESUME
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
