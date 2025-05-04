"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  const projects = [
    {
      title: "Interviewer.ai",
      description:
        "Designed a personalized mock interview platform using Next.js and Gemini API. Integrated Drizzle ORM for scalable backend architecture and efficient state management. Generated user-specific questions tailored to roles and skill levels via Google's Gemini API.",
      tags: ["Next.js", "Drizzle ORM", "Gemini API", "Tailwind CSS"],
      image: "/interviewer.png?height=600&width=800",
      github: "https://github.com/ganesh-7985/interviewer.ai",
      demo: "https://interviewer-ai-mauve.vercel.app/"
    },
    {
      title: "ConvoSpace",
      description:
        "Developed a real-time multi-user chat application using the MERN stack and Socket.IO. Implemented features like typing indicators, read receipts, and multimedia sharing for an enhanced communication experience.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "Tailwind CSS"],
      image: "/image.png?height=600&width=800",
      github: "https://github.com/ganesh-7985/ConvoSpace",
      demo: "https://convo-space-omega.vercel.app"
    },
    {
      title: "The Angels Investors",
      description:
        "Built a networking platform for startup founders and investors using the MERN stack. Implemented real-time pitch posting with instant notifications and integrated email alerts for key actions to drive user engagement.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      image: "/AngleInvestor.png?height=600&width=800",
      github: "https://github.com/ganesh-7985/AngleInvestor",
      demo: "https://github.com/ganesh-7985/AngleInvestor"
    }
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeader number="03" title="Some Things I've Built" />

        <div className="mt-12">
          {/* Featured Project Carousel */}
          <div className="relative">
            <div ref={carouselRef} className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <FeaturedProject project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all",
                      activeIndex === index
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                    )}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prevProject} aria-label="Previous project">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextProject} aria-label="Next project">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative aspect-video overflow-hidden rounded-lg"
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <div>
          <p className="text-primary font-mono mb-2">Featured Project</p>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <p className="text-muted-foreground">{project.description}</p>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          <Button asChild variant="outline" size="sm">
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
          <Button asChild size="sm">
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Button asChild variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github size={18} />
              </a>
            </Button>
            <Button asChild size="sm" className="bg-primary/80 backdrop-blur-sm">
              <a href={project.demo} target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
              </a>
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs font-normal">
              +{project.tags.length - 3}
            </Badge>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
