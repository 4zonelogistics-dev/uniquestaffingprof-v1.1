import { Card } from "@/components/ui/card"
import { 
  Heart, 
  Factory, 
  Storefront, 
  Buildings, 
  Truck,
  Wrench,
  ComputerTower,
  Users
} from "@phosphor-icons/react"

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Medical professionals and support staff"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Production and industrial workforce"
  },
  {
    icon: Storefront,
    title: "Retail",
    description: "Sales and customer service teams"
  },
  {
    icon: Buildings,
    title: "Corporate",
    description: "Administrative and office professionals"
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Supply chain and distribution experts"
  },
  {
    icon: Wrench,
    title: "Skilled Trades",
    description: "Technical and trade specialists"
  },
  {
    icon: ComputerTower,
    title: "Technology",
    description: "IT professionals and developers"
  },
  {
    icon: Users,
    title: "Hospitality",
    description: "Service industry personnel"
  }
]

export function Industries() {
  return (
    <section id="industries" className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={32} className="text-accent" weight="duotone" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
