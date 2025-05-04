"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />
      <div className="container relative z-10 flex flex-col items-center text-center gap-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I&apos;m <span className="text-primary">Arya Chandra Kusuma</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A passionate web developer creating beautiful and functional websites
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" onClick={scrollToContact}>
            Contact Me
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">View My Work</a>
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  )
}
