"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const jobs = [
    {
      company: "Blackcoffer",
      title: "Frontend Developer Intern",
      period: "January 2024 – May 2024",
      duties: [
        "Developed and optimized frontend features using React.js and Tailwind CSS",
        "Integrated REST APIs and improved UI/UX responsiveness across client projects",
        "Delivered reusable and accessible component libraries for better scalability",
      ],
    },
    {
      company: "Optica Society",
      title: "Technical Member",
      period: "Auguest 2023 – May 2024",
      duties: [
        "Participated in team-based technical projects focused on innovation and outreach",
        "Contributed to knowledge-sharing workshops and coding events",
      ],
    },
  ];
  return (
    <section id="experience" className="section-container">
      <SectionHeader number="02" title="Where I've Worked" />

      <div className="mt-12 grid md:grid-cols-4 gap-4">
        <div className="md:col-span-1 flex md:flex-col overflow-x-auto md:overflow-visible mb-6 md:mb-0 scrollbar-hide">
          {jobs.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap md:whitespace-normal min-w-min
                ${
                  activeTab === index
                    ? "text-primary border-primary bg-primary/10"
                    : "text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
                } transition-all duration-300`}
              aria-selected={activeTab === index}
              role="tab"
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="md:col-span-3 pl-0 md:pl-6">
          {jobs[activeTab] && (
            <motion.div
              key={jobs[activeTab].company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              role="tabpanel"
            >
              <h3 className="text-xl font-bold mb-1">
                {jobs[activeTab].title} <span className="text-primary">@ {jobs[activeTab].company}</span>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{jobs[activeTab].period}</p>
              <ul className="space-y-4">
                {jobs[activeTab].duties.map((duty, index) => (
                  <li key={index} className="flex">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">▹</span>
                    <span className="text-muted-foreground">{duty}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
