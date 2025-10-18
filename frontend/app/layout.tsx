import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NeoCred - Master Your Financial Future with AI",
  description: "Transform from financially confused to confidently wealthy through personalized AI tutoring and real-world application. Learn finance with interactive tools and expert guidance.",
  keywords: "financial education, AI tutor, credit score, investment calculator, personal finance, financial literacy",
  authors: [{ name: "NeoCred Team" }],
  openGraph: {
    title: "NeoCred - AI-Powered Financial Education",
    description: "Master your financial future with personalized AI tutoring and interactive tools",
    url: "https://neocred.in",
    siteName: "NeoCred",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoCred - AI-Powered Financial Education",
    description: "Master your financial future with personalized AI tutoring",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}