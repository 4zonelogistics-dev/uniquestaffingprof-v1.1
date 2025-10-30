import { Card } from "@/components/ui/card"
import { Quotes } from "@phosphor-icons/react"

const testimonials = [
  {
    quote: "Unique Staffing Professionals transformed our hiring process. They consistently deliver high-quality candidates who are not only skilled but also align perfectly with our company culture.",
    author: "Sarah Martinez",
    role: "HR Director",
    company: "TechVision Solutions"
  },
  {
    quote: "Working with this team has been a game-changer for our seasonal staffing needs. Their responsiveness and understanding of our industry is unmatched.",
    author: "Michael Chen",
    role: "Operations Manager",
    company: "Logistics Dynamics Inc."
  },
  {
    quote: "The executive search services exceeded our expectations. They found us a VP of Sales who has transformed our entire revenue strategy. Truly exceptional work.",
    author: "Jennifer Foster",
    role: "CEO",
    company: "Growth Capital Partners"
  }
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 border-border bg-card hover:shadow-lg transition-shadow"
            >
              <Quotes size={32} className="text-accent mb-4" weight="duotone" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary font-medium mt-1">
                  {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
