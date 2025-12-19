import Image from "next/image"

export function PaymentSection() {
  return (
    <section id="payment" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">QR Code Payment</h2>
          <p className="text-muted-foreground text-lg">Fast and secure UPI payment</p>
        </div>

        <div className="bg-gradient-to-br from-card to-muted/50 rounded-[2.5rem] p-8 md:p-16 shadow-2xl border-2 border-primary/10 text-center">
          <p className="text-lg font-semibold text-foreground/80 mb-8">Scan the QR code using any UPI app</p>

          <div className="relative w-64 h-64 mx-auto mb-8 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
            <Image id="qr-image" src="/qr-code.jpeg" alt="UPI QR Code" fill className="object-cover" />
          </div>

          <p className="text-lg font-semibold text-foreground/80">Our team will contact you after payment</p>
        </div>
      </div>
    </section>
  )
}
