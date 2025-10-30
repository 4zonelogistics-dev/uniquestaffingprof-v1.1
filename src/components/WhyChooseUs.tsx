import { Card } from "@/components/ui/card"
import { CheckCircle, Target, Lightning, ShieldCheck } from "@phosphor-icons/react"

const features = [
  {
    icon: Target,
    title: "Industry Expertise",
    description: "15+ years of specialized recruitment experience across multiple sectors, ensuring we understand your unique needs and challenges."
  },
  {
    icon: Lightning,
    title: "Fast Turnaround",
    description: "Average time-to-fill of just 5 days for most positions. Our extensive talent network means quick access to qualified candidates."
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description: "Rigorous screening and vetting process. Every candidate is thoroughly evaluated for skills, experience, and cultural fit."
  },
  {
    icon: CheckCircle,
    title: "Ongoing Support",
    description: "Dedicated account management and continuous support throughout the entire hiring process and beyond placement."
  }
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Why Choose Unique Staffing Professionals?
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              We're not just another staffing agency. We're your strategic partner in building 
              exceptional teams that drive business success.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Founded with a mission to transform the staffing industry, Unique Staffing Professionals 
              has spent over 15 years perfecting the art and science of talent acquisition. Our approach 
              combines deep industry knowledge, extensive candidate networks, and a genuine commitment 
              to understanding what makes your organization unique.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-heading font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Retention Rate</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" weight="duotone" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
