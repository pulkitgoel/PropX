import { Shield, Zap, DollarSign, Home } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Legal Assurance',
      description: 'Full legal verification, title clearance, and complete documentation handling.',
      stat: '100%',
      color: 'from-primary/20 to-primary/10',
    },
    {
      icon: Zap,
      title: 'Fast Closure',
      description: 'Quick transaction processing with dedicated support. Close in just 30 days.',
      stat: '30 Days',
      color: 'from-secondary/20 to-secondary/10',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden costs. Price benchmarking and honest negotiations.',
      stat: '0 Hidden',
      color: 'from-accent/20 to-accent/10',
    },
    {
      icon: Home,
      title: 'Professional Staging',
      description: 'Beautiful property presentation. Homes sell 85% faster.',
      stat: '85% Faster',
      color: 'from-blue-200/20 to-blue-100/10',
    },
  ]

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl -z-0" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-semibold text-sm backdrop-blur-md border border-white/20">Why Choose PropX</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-white">Our Key Strengths</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We handle all the complex parts so you can focus on finding your dream home
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:border-white/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
              >
                {/* Icon Background */}
                <div className={`bg-gradient-to-br ${feature.color} rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className="text-white" />
                </div>

                {/* Stat */}
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">{feature.stat}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>

                {/* Accent Line */}
                <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
