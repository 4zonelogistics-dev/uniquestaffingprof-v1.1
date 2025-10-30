import { Phone, Envelope, MapPin } from "@phosphor-icons/react"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-2xl mb-4">
              Unique Staffing Professionals
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner in staffing solutions, connecting exceptional talent 
              with outstanding opportunities for over 15 years.
            </p>
            <div className="flex gap-4">
              <a href="tel:+15551234567" className="text-primary-foreground hover:text-accent transition-colors">
                <Phone size={24} weight="duotone" />
              </a>
              <a href="mailto:info@uniquestaffing.com" className="text-primary-foreground hover:text-accent transition-colors">
                <Envelope size={24} weight="duotone" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("industries")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" weight="duotone" />
                <span>123 Business Plaza<br />Suite 500<br />Metropolis, ST 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} weight="duotone" />
                <a href="tel:+15551234567" className="hover:text-primary-foreground transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Envelope size={18} weight="duotone" />
                <a href="mailto:info@uniquestaffing.com" className="hover:text-primary-foreground transition-colors">
                  info@uniquestaffing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Unique Staffing Professionals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
