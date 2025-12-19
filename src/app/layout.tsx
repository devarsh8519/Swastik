import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Swastik Devta Vastu | Professional Vastu Consultancy",
  description:
    "Professional Vastu Shastra Consultancy for Home, Office & Business. Calm, balanced and trusted guidance with easy QR payment.",
  keywords: "Vastu, Devta Vastu, Vastu remedies, Home Vastu, Bunglow Vastu, Industrial Vastu",
  authors: [{ name: "Swastik Devta Vastu" }],
  icons: {
    icon: "/logo1.png",
    apple: "/logo1.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
