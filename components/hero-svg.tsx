"use client"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Image from "next/image";

export function HeroSvg() {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full h-full flex items-center justify-center"
    >
      <Image 
        src={theme === "dark" ? '/hero-bg.svg' : '/hero-bg.svg'}
        alt="Hero background illustration"
        width={600}
        height={400}
        priority
        className="w-full max-w-2xl object-contain"
      />
    </motion.div>
  )
}