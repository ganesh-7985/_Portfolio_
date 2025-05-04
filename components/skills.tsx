"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { cn } from "@/lib/utils"
import {
  Code,
  Server,
  Database,
  Terminal,
  Braces,
  Globe,
  Palette,
  Figma,
  GitBranch,
  Cpu,
  Cloud,
  Lock,
} from "lucide-react"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <Code />,
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/20",
      description: "Building responsive and accessible user interfaces with modern frameworks and tools.",
      skills: [
        { name: "HTML/CSS", icon: <Globe size={16} /> },
        { name: "JavaScript (ES6+)", icon: <Braces size={16} /> },
        { name: "TypeScript", icon: <Braces size={16} /> },
        { name: "React", icon: <Code size={16} /> },
        { name: "Next.js", icon: <Code size={16} /> },
        { name: "Redux", icon: <Code size={16} /> },
        { name: "Tailwind CSS", icon: <Palette size={16} /> },
        { name: "Styled Components", icon: <Palette size={16} /> },
        { name: "Figma", icon: <Figma size={16} /> },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: <Server />,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
      description: "Creating robust server-side applications and APIs with scalable architecture.",
      skills: [
        { name: "Node.js", icon: <Server size={16} /> },
        { name: "Express", icon: <Server size={16} /> },
        { name: "NestJS", icon: <Server size={16} /> },
        { name: "RESTful APIs", icon: <Globe size={16} /> },
        { name: "GraphQL", icon: <Braces size={16} /> },
        { name: "Authentication", icon: <Lock size={16} /> },
        { name: "Authorization", icon: <Lock size={16} /> },
        { name: "Microservices", icon: <Cpu size={16} /> },
      ],
    },
    {
      id: "database",
      title: "Database",
      icon: <Database />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      description: "Managing and optimizing data storage with SQL and NoSQL databases.",
      skills: [
        { name: "MongoDB", icon: <Database size={16} /> },
        { name: "PostgreSQL", icon: <Database size={16} /> },
        { name: "MySQL", icon: <Database size={16} /> },
        { name: "Redis", icon: <Database size={16} /> },
        { name: "Firebase", icon: <Database size={16} /> },
        { name: "Prisma", icon: <Database size={16} /> },
        { name: "Mongoose", icon: <Database size={16} /> },
        { name: "SQL", icon: <Braces size={16} /> },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Tools",
      icon: <Terminal />,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      description: "Streamlining development workflows and deploying applications efficiently.",
      skills: [
        { name: "Git", icon: <GitBranch size={16} /> },
        { name: "GitHub", icon: <GitBranch size={16} /> },
        { name: "Docker", icon: <Cpu size={16} /> },
        { name: "CI/CD", icon: <GitBranch size={16} /> },
        { name: "AWS", icon: <Cloud size={16} /> },
        { name: "Vercel", icon: <Cloud size={16} /> },
        { name: "Netlify", icon: <Cloud size={16} /> },
        { name: "Jest", icon: <Terminal size={16} /> },
      ],
    },
  ]

  const currentCategory = skillCategories.find((cat) => cat.id === activeCategory) || skillCategories[0]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionHeader number="01" title="Skills" />
          </motion.div>

          <div className="mt-12">
            {/* Category tabs */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {skillCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                    "border backdrop-blur-sm",
                    activeCategory === category.id
                      ? cn("bg-background", category.bgColor, category.borderColor)
                      : "border-border/50 hover:border-border",
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={cn(activeCategory === category.id ? category.color : "text-muted-foreground")}>
                    {category.icon}
                  </span>
                  <span
                    className={cn(
                      "font-medium",
                      activeCategory === category.id ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {category.title}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Active category content */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Category info */}
              <div className="md:col-span-1">
                <div
                  className={cn(
                    "p-6 rounded-2xl border backdrop-blur-sm h-full",
                    currentCategory.borderColor,
                    currentCategory.bgColor,
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                      "bg-background/80 backdrop-blur-sm",
                    )}
                  >
                    <span className={currentCategory.color}>{currentCategory.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{currentCategory.title}</h3>
                  <p className="text-muted-foreground">{currentCategory.description}</p>
                </div>
              </div>

              {/* Skills cloud */}
              <div className="md:col-span-2">
                <div className="p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm h-full">
                  <h4 className="text-lg font-medium mb-6">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {currentCategory.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className={cn(
                          "group flex items-center gap-2 px-4 py-2 rounded-full",
                          "border border-border/50 hover:border-primary/30 transition-colors",
                          "bg-background/80 backdrop-blur-sm hover:bg-primary/5",
                        )}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: [0, Math.sin(index * 0.5) * 10, 0],
                        }}
                        // transition={{
                        //   duration: 0.5,
                        //   delay: index * 0.05,
                        //   y: {
                        //     duration: 2 + index * 0.2,
                        //     repeat: Number.POSITIVE_INFINITY,
                        //     repeatType: "reverse",
                        //     ease: "easeInOut",
                        //   },
                        // }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                        }}
                      >
                        <span className={cn("text-muted-foreground group-hover:text-primary transition-colors")}>
                          {skill.icon}
                        </span>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Experience level visualization */}
                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-4">Experience Level</h4>
                    <div className="relative h-16">
                      <div className="absolute inset-0 bg-background/50 rounded-lg border border-border/50 overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-[85%] bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg" />
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                          <span className="text-xs font-medium">Beginner</span>
                          <span className="text-xs font-medium">Intermediate</span>
                          <span className="text-xs font-medium">Advanced</span>
                        </div>
                        <motion.div
                          className={cn(
                            "absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full",
                            "border-2 border-background",
                            currentCategory.id === "frontend"
                              ? "left-[85%] bg-sky-500"
                              : currentCategory.id === "backend"
                                ? "left-[80%] bg-violet-500"
                                : currentCategory.id === "database"
                                  ? "left-[75%] bg-emerald-500"
                                  : "left-[70%] bg-amber-500",
                          )}
                          initial={{ left: "0%" }}
                          animate={{
                            left:
                              currentCategory.id === "frontend"
                                ? "85%"
                                : currentCategory.id === "backend"
                                  ? "80%"
                                  : currentCategory.id === "database"
                                    ? "75%"
                                    : "70%",
                          }}
                          transition={{ duration: 0.8, type: "spring" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
