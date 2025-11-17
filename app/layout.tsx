import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sf-pro",
  display: "swap",
})

// Using Inter as a fallback for SF Pro (SF Pro requires Apple device or manual font files)
// In production, you would add SF Pro Display and SF Pro Text font files
const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-sf-pro-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Full-Stack Developer & UI Engineer",
  description: "Premium developer portfolio showcasing modern web development and design expertise.",
  icons: {
    icon: "/logo2.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${interDisplay.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}

