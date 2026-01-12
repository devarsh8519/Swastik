"use client"

import { ServiceCard } from "./service-card"
import { useState } from "react"

const services = [
  {
    title: "Online Vastu Consultation",
    description: "Remote consultation via call or video from anywhere.",
    price: "₹6,999",
    qrImage: "/online-qr.jpeg",
  },
  {
    title: "Flat Vastu Consultation",
    description: "Comprehensive Vastu analysis for residential flats, offering accurate assessment to enhance harmony, balance, and positive energy.",
    price: "₹9,999",
    qrImage: "/home-qr.jpeg",
  },
  {
    title: "Bunglow Vastu Consultation",
    description: "“Comprehensive Vastu analysis for bungalows, designed to balance energies and enhance peace, health, and success..",
    price: "₹19,999",
    qrImage: "/bunglow-qr.jpeg",
  },
  {
    title: "Office & Business Vastu",
    description: "Professional Vastu guidance for offices, shops and business growth.",
    price: "₹14,999",
    qrImage: "/office-qrjpeg",
  },
  {
    title: "Industrial Vastu",
    description: "Comprehensive Vastu solutions for industrial spaces.",
    price: "₹25,999",
    qrImage: "/industry-qr.jpeg",
  },
]

export function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Our Services & Fees</h2>
          <p className="text-muted-foreground text-lg">Clear, transparent and professional pricing</p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative">
          <ServiceCard {...services[currentSlide]} />

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-secondary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
              aria-label="Previous service"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-secondary w-8" : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-secondary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
              aria-label="Next service"
            >
              ›
            </button>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
  <span className="font-medium">Note:</span> Remedies and material charges, if required,
  will be billed separately and are not included in the consultation fees.
</p>
      </div>
    </section>
  )
}
