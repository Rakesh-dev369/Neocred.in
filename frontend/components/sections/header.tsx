"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-md border-b border-cyan-400/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight"
            >
              NeoCred
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-4 flex-1">
            {[
              { name: "Learn", href: "#learn" },
              { name: "Tools", href: "#tools" },
              { name: "Neo AI", href: "#ai-showcase" },
              { name: "Pricing", href: "#pricing" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-8 py-1.5 text-blue-100 hover:text-cyan-300 font-medium transition-all bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/15 hover:border-cyan-400/30 shadow-md"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              className="text-blue-100 hover:text-cyan-300 hover:bg-white/5 rounded-xl"
              asChild
            >
              <a href="/signin">Login</a>
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all" asChild>
              <a href="/signin?mode=signup">Join Free</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-100 hover:text-cyan-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            suppressHydrationWarning
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 text-center bg-gray-950/90 backdrop-blur-lg rounded-b-2xl">
            <nav className="flex flex-col space-y-4 text-blue-100 px-4">
              <a
                href="#learn"
                className="px-8 py-1.5 text-blue-100 hover:text-cyan-300 font-medium transition-all bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/15 hover:border-cyan-400/30 shadow-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </a>
              <a
                href="#tools"
                className="px-8 py-1.5 text-blue-100 hover:text-cyan-300 font-medium transition-all bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/15 hover:border-cyan-400/30 shadow-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </a>
              <a
                href="#ai-showcase"
                className="px-8 py-1.5 text-blue-100 hover:text-cyan-300 font-medium transition-all bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/15 hover:border-cyan-400/30 shadow-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Neo AI
              </a>
              <a
                href="#pricing"
                className="px-8 py-1.5 text-blue-100 hover:text-cyan-300 font-medium transition-all bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/15 hover:border-cyan-400/30 shadow-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4 px-8">
                <Button
                  variant="ghost"
                  className="text-blue-100 hover:text-cyan-300 hover:bg-white/5 rounded-xl"
                  asChild
                >
                  <a href="/signin">Login</a>
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all" asChild>
                  <a href="/signin?mode=signup">Join Free</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
