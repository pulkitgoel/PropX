'use client'

import { useState } from 'react'
import { Heart, MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PropertiesShowcase() {
  const [favorites, setFavorites] = useState<number[]>([])

  const properties = [
    {
      id: 1,
      name: 'Ultra-Modern Luxury Villa',
      location: 'Sector 43, Gurugram',
      price: '₹2.5 Cr',
      specs: '3 BHK | 2100 sq.ft',
      rating: 8.5,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      amenities: ['Pool', 'Gym', 'Garden', 'Security'],
    },
    {
      id: 2,
      name: 'Premium High-Rise Apartment',
      location: 'DLF Sector 27, Gurugram',
      price: '₹5.8 Cr',
      specs: '4 BHK | 4500 sq.ft',
      rating: 9.2,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      amenities: ['Pool', 'Gym', 'Park', '24/7 Security'],
    },
    {
      id: 3,
      name: 'Contemporary Glass Villa',
      location: 'South City, Gurugram',
      price: '₹4.2 Cr',
      specs: '3 BHK | 3200 sq.ft',
      rating: 8.8,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      amenities: ['Gym', 'Garden', 'Security', 'Parking'],
    },
    {
      id: 4,
      name: 'Luxury City Penthouse',
      location: 'Golf Course Road, Gurugram',
      price: '₹3.9 Cr',
      specs: '3 BHK | 3000 sq.ft',
      rating: 8.6,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      amenities: ['Pool', 'Gym', 'Garden', 'Parking'],
    },
    {
      id: 5,
      name: 'Ultra-Luxury Smart Home',
      location: 'Sector 78, Gurugram',
      price: '₹7.5 Cr',
      specs: '4 BHK | 5200 sq.ft',
      rating: 9.5,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      amenities: ['Pool', 'Gym', 'Spa', 'Concierge'],
    },
    {
      id: 6,
      name: 'Modern Bedroom Suite',
      location: 'Sector 84, Gurugram',
      price: '₹1.8 Cr',
      specs: '2 BHK | 1400 sq.ft',
      rating: 8.2,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      amenities: ['Gym', 'Garden', 'Security', 'Parking'],
    },
  ]

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-secondary/15 to-transparent rounded-full blur-3xl -z-0" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm border border-primary/20">
            Featured Listings
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Handpicked Beautiful Homes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of 500+ verified properties across Gurugram with stunning visuals
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div 
                className="h-56 relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${property.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-sm">{property.rating}</span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors"
                >
                  <Heart
                    size={20}
                    className={
                      favorites.includes(property.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }
                  />
                </button>

                {/* Available Badge */}
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Available
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="font-semibold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {property.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  <span>{property.location}</span>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-primary">{property.price}</div>

                {/* Specs */}
                <div className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                  {property.specs}
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2">
                  {property.amenities.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full font-medium">
                      +{property.amenities.length - 3}
                    </span>
                  )}
                </div>

                {/* Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 mt-2">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Explore All 500+ Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
