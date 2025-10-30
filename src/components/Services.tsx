import { Card } from "@/components/ui/card"
import { Briefcase, UsersFour, ClipboardText, ChartLineUp, Handshake, UserCircleGear } from "@phosphor-icons/react"

const services = [
  {
    icon: Briefcase,
    title: "Temporary Staffing",
    description: "Flexible workforce solutions for short-term needs, seasonal peaks, and special projects. Quick deployment of qualified professionals."
  },
  {
    icon: Handshake,
    title: "Permanent Placement",
    description: "Find your next key team member. We source, screen, and present top candidates for full-time positions across all levels."
  },
  {
    icon: ClipboardText,
    title: "Contract-to-Hire",
    description: "Evaluate candidates in real work situations before making permanent hiring decisions. Reduce risk and ensure cultural fit."
  },
  {
    icon: UsersFour,
    title: "Executive Search",
    description: "Specialized recruitment for leadership and executive positions. Discreet, thorough search for transformational talent."
  },
  {
    icon: ChartLineUp,
    title: "Workforce Consulting",
    description: "Strategic guidance on workforce planning, talent acquisition strategies, and organizational development initiatives."
  },
  {
    icon: UserCircleGear,
    title: "Onboarding Support",
    description: "Comprehensive onboarding services to ensure smooth transitions and rapid productivity for new hires."
  }
]

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Our Staffing Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive staffing services tailored to your unique business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={28} className="text-primary" weight="duotone" />
                </div>
                <h3 className="font-heading font-semibold text-xl lg:text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
