"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react'
import { HeroSvg } from "./hero-svg"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateMovement = (axis: "x" | "y", strength = 20) => {
    if (typeof window === 'undefined') return 0;

    const windowCenter = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }
    
    const offset = (mousePosition[axis] - windowCenter[axis]) / windowCenter[axis]
    return offset * strength
  }

  return (
    <section className="relative min-h-screen flex items-stretch px-4 lg:px-0 pt-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-background to-background"
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-60" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-60" />
      </div>

      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          // style={{
          //   width: Math.random() * 8 + 4,
          //   height: Math.random() * 8 + 4,
          //   top: `${Math.random() * 100}%`,
          //   left: `${Math.random() * 100}%`,
          // }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Scroll indicator */}
      <motion.div 
        className="absolute  bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity, y }}
      >
        <span className="text-xs text-muted-foreground font-mono">Scroll Down</span>
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-1"
          initial={{ opacity: 0.5 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Social links */}
      <motion.div 
        className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href="https://github.com/ganesh-7985" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/nshankarganesh" target="_blank"  className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://x.com/Ganesh_7985" target="_blank"  className="text-muted-foreground hover:text-primary transition-colors">
          <Twitter size={20} />
        </a>
        <div className="w-px h-24 bg-muted-foreground/20" />
      </motion.div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <motion.span 
                className="inline-block text-primary font-mono text-sm md:text-base px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Full Stack Developer
              </motion.span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Shankar Ganesh
            </motion.h1>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build things for the web.
            </motion.h2>

            <motion.p 
              className="text-muted-foreground text-lg mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm a full-stack developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on creating accessible, human-centered products.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="rounded-full group">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
            style={{
              transform: `translate(${calculateMovement("x", -15)}px, ${calculateMovement("y", -15)}px)`,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30" />
              <HeroSvg />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
