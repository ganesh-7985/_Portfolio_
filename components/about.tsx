"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Code, Coffee, Lightbulb, Rocket } from 'lucide-react'

export function About() {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
  ]

  const tabItems = [
    {
      value: "about",
      label: "About",
      icon: <Lightbulb className="h-4 w-4 mr-2" />,
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Hello! I'm Shankar, a passionate full-stack developer with a knack for creating elegant solutions to complex
            problems. My journey in the tech world began during my university days when I first discovered the art of
            coding.
          </p>
          <p className="text-muted-foreground">
            Fast-forward to today, and I've had the privilege of working at a startup, a large corporation, and a
            student-led design studio. My main focus these days is building accessible, inclusive products and digital
            experiences.
          </p>
        </>
      ),
    },
    {
      value: "interests",
      label: "Interests",
      icon: <Coffee className="h-4 w-4 mr-2" />,
      content: (
        <>
          <p className="text-muted-foreground mb-4">
            Beyond coding, I'm passionate about design, photography, and exploring new technologies. I enjoy contributing to open-source projects and sharing knowledge through writing and mentoring.
          </p>
          <p className="text-muted-foreground">
            When I'm not in front of a computer, you'll find me hiking, reading sci-fi novels, or experimenting with new coffee brewing techniques.
          </p>
        </>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionHeader number="04" title="About Me" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 mt-12">
            <motion.div variants={itemVariants} className="lg:col-span-3 order-2 lg:order-1">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="mb-6 bg-background/50 backdrop-blur-sm border border-border/50">
                  {tabItems.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value} className="flex items-center">
                      {tab.icon}
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {tabItems.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value} className="space-y-4">
                    {tab.content}
                  </TabsContent>
                ))}
              </Tabs>

              <motion.div 
                variants={itemVariants}
                className="mt-8"
              >
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
                >
                  <span className="mr-1">Get in touch</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2 order-1 lg:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/30 to-primary/5 translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-300"></div>
                
                <div className="absolute inset-0 border-2 border-primary/50 rounded-lg translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300"></div>
                
                <div className="absolute inset-0 overflow-hidden rounded-lg group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Profile"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-lg saturate-0 group-hover:saturate-100 transition-all duration-500"
                    />
                  </div>
                </div>
                
                {/* Floating badge */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-background border border-border/50 rounded-full px-3 py-1 shadow-lg backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="flex items-center gap-1.5">
                    <Rocket className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium">Full Stack Developer</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
