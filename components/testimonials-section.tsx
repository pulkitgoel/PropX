
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Home Buyer',
      location: 'Sector 43, Gurugram',
      quote:
        'PropX made the entire home buying experience stress-free. The legal verification was thorough and transparent. Highly recommended!',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Home Seller',
      location: 'DLF Sector 27, Gurugram',
      quote:
        'I was amazed at how quickly PropX found a buyer for my property. The professional staging really made a difference. Sold in just 45 days!',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'First-Time Buyer',
      location: 'South City, Gurugram',
      quote:
        'As a first-time buyer, I was nervous about the process. PropX team guided me at every step with complete transparency. Best decision ever!',
      avatar: '👨‍🦱',
      rating: 5,
    },
    {
      id: 4,
      name: 'Neha Gupta',
      role: 'Property Investor',
      location: 'Golf Course Road, Gurugram',
      quote:
        'The investment insights and property analysis provided by PropX helped me make informed decisions. Excellent service!',
      avatar: '👩‍💻',
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/15 to-transparent rounded-full blur-3xl -z-0" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">Customer Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who found their perfect home with PropX
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4 md:px-8">
                  <div className="bg-gradient-to-br from-white via-white to-slate-50 rounded-3xl border border-primary/20 p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{testimonial.avatar}</div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-primary font-medium">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-border w-2.5 hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-muted-foreground text-sm">
            {currentIndex + 1} of {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  )
}
