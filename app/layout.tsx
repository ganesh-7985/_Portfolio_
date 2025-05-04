import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shankar Ganesh ",
  description:
    "Portfolio of Shankar Ganesh, a Full Stack Developer specializing in building exceptional digital experiences.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Node.js", "JavaScript", "TypeScript", "Next.js"],
  authors: [{ name: "Shankar Ganesh" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shankerganesh.live",
    title: "Shankar Ganesh",
    description:
      "Portfolio of Shankar Ganesh, a Full Stack Developer specializing in building exceptional digital experiences.",
    siteName: "Shankar Ganesh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shankar Ganesh ",
    description:
      "Portfolio of Shankar Ganesh, a Full Stack Developer specializing in building exceptional digital experiences.",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
