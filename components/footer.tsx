import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Browse Properties', href: '#' },
      { label: 'Find Your Home', href: '#' },
      { label: 'Sell Your Home', href: '#' },
      { label: 'Partners', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Media', href: '#' },
    ],
    Support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Community', href: '#' },
    ],
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gradient-to-tr from-secondary/15 to-transparent rounded-full blur-3xl opacity-50" />
      
      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">Stay Updated</h3>
              <p className="text-white/70">Get the latest real estate insights delivered to your inbox.</p>
            </div>

            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 rounded-lg focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-white px-6 rounded-lg">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">PropX</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Revolutionizing real estate with transparency, trust, and technology.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-semibold text-white">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact</h4>
              <div className="space-y-3 text-sm">
                <a href="mailto:hello@propx.in" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Mail size={16} />
                  hello@propx.in
                </a>
                <a href="tel:+91-1234567890" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Phone size={16} />
                  +91-1234-567-890
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <p className="text-white/70 text-sm">
                © {currentYear} PropX. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
