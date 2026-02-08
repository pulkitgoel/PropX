import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Premium Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight">
          Ready to Find Your <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">Dream Home</span>?
        </h2>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Join thousands of happy customers who have found their perfect home with PropX. Start your journey today and experience the future of real estate.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 md:gap-8 py-8">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-white">10K+</div>
            <p className="text-white/80 text-sm">Happy Customers</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-white">5K+</div>
            <p className="text-white/80 text-sm">Homes Sold</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-white">₹5000Cr+</div>
            <p className="text-white/80 text-sm">Value Transacted</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:shadow-2xl hover:shadow-accent/50 text-white px-10 font-semibold text-base rounded-lg transition-all">
            Browse Properties
          </Button>
          <Button
            size="lg"
            className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-md px-10 font-semibold bg-white/10 rounded-lg transition-all text-base"
          >
            Tell Us Your Requirements
          </Button>
        </div>
      </div>
    </section>
  )
}
