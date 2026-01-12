"use client"

import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  price: string
  qrImage: string
}

export function ServiceCard({ title, description, price, qrImage }: ServiceCardProps) {
  const scrollToPayment = () => {
    const paymentSection = document.getElementById("payment")
    paymentSection?.scrollIntoView({ behavior: "smooth" })

    // Update QR image
    const qrImg = document.getElementById("qr-image") as HTMLImageElement
    if (qrImg) {
      qrImg.src = qrImage
    }
  }

  return (
    <div className="group bg-gradient-to-br from-card to-muted/50 rounded-[2rem] p-8 shadow-xl border-2 border-primary/10 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
      <div className="text-center space-y-6">
        <h3 className="font-serif text-2xl font-semibold text-secondary min-h-[4rem] flex items-center justify-center">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed min-h-[4rem]">{description}</p>

        <div className="relative py-4">
          <div className="font-serif text-5xl font-bold bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
            {price}
            <sup className="text-xl">*</sup>
          </div>
        </div>

        <Button
          onClick={scrollToPayment}
          className="w-full bg-secondary hover:from-secondary/90 hover:to-secondary text-secondary-foreground rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Make Payment
        </Button>
      </div>
    </div>
  )
}
