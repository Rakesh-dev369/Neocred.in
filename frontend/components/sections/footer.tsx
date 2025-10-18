"use client"

import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Learn", href: "#learn" },
      { name: "Calculators", href: "#tools" },
      { name: "AI Tutor", href: "#ai-tutor" },
      { name: "Pricing", href: "#pricing" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Help Center", href: "#help" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Security", href: "#security" },
      { name: "Cookie Policy", href: "#cookies" }
    ]
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative glow effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_60%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.15),_transparent_60%)]"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
               NeoCred
              </span>
            </div>
            <p className="text-blue-100/80 mb-6 text-sm leading-relaxed">
              Empowering you to master your money with AI-guided learning and unbiased financial insights.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer"
                >
                  <Icon className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Links Section - 3 columns on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-3 gap-4 lg:col-span-3 lg:gap-8">
            {/* Product Links */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-cyan-300">Product</h3>
              <ul className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                {footerLinks.product.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-blue-100/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-cyan-300">Company</h3>
              <ul className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                {footerLinks.company.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-blue-100/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4 text-cyan-300">Legal</h3>
              <ul className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                {footerLinks.legal.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-blue-100/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 text-cyan-400 mr-3" />
              <span className="text-blue-100/80">hello@neocred.in</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-5 w-5 text-cyan-400 mr-3" />
              <span className="text-blue-100/80">+91-XXXX-XXXX</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-5 w-5 text-cyan-400 mr-3" />
              <span className="text-blue-100/80">Made with ❤️ in India</span>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-white/10 pt-8 text-center text-blue-100/70 text-sm">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-cyan-300">NeoCred</span>. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-blue-200/60">
            Empowering Bharat through AI-driven financial literacy & transparency.
          </p>
        </div>
      </div>
    </footer>
  )
}
