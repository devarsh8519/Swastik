"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  const scrollToPayment = () => {
    const paymentSection = document.getElementById("payment")
    paymentSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-32 px-6 my-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-card to-muted/50  rounded-[3rem] p-12 md:p-20 text-center shadow-2xl border-2 border-primary-foreground/10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">
            Book Your Consultation
          </h2>
          <p className="text-primary-foreground/90 text-xl mb-10 max-w-2xl mx-auto">
            Take a calm step towards a better-balanced space
          </p>
          <Button
            onClick={scrollToPayment}
            className="bg-gradient-to-r from-card to-muted hover:from-muted hover:to-card text-primary rounded-full px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Proceed to Payment
          </Button>
        </div>
      </div>
    </section>
  )
}
