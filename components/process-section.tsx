import { Home, Shield, Calendar, CheckCircle } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    {
      icon: Home,
      number: '01',
      title: 'Find Your Home',
      description: 'Browse 500+ verified properties across Gurugram and surrounding areas.',
    },
    {
      icon: Shield,
      number: '02',
      title: 'Verified & Secure',
      description: 'Full legal verification, title clearance, and ownership verification.',
    },
    {
      icon: Calendar,
      number: '03',
      title: 'Schedule Visit',
      description: 'Easy visit scheduling with our team. See the property at your convenience.',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Hassle-Free Closure',
      description: 'We handle all paperwork and registration. Close your deal in 30 days.',
    },
  ]

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-secondary/15 to-transparent rounded-full blur-3xl -z-0" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Simple & Transparent Steps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We guide you through every step of your home buying journey with clarity
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[calc(50%+48px)] right-[calc(-50%+48px)] h-2 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />
                )}

                <div className="space-y-4">
                  {/* Number Circle */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/50 flex items-center justify-center mx-auto relative z-10 hover:shadow-2xl hover:shadow-primary/30 transition-all group-hover:scale-110">
                      <Icon size={40} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center font-bold text-sm shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2 p-4 rounded-xl hover:bg-white/50 transition-colors">
                    <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
