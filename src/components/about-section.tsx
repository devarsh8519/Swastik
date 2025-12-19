export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-muted-foreground text-lg">Who we are & how we help</p>
        </div>

        <div className="bg-gradient-to-br from-card to-muted/50 rounded-[2.5rem] p-8 md:p-16 shadow-2xl border-2 border-primary/10 hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500">
          <div className="space-y-6 text-center">
            <p className="text-lg leading-relaxed text-foreground/80">
              We are a professional Vastu Shastra consultancy focused on providing clear, practical and effective
              guidance. Our approach is simple — understand your space, identify energy imbalances, and suggest
              realistic improvements without unnecessary changes.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              With experience in residential and commercial Vastu, we help individuals and businesses create spaces that
              support peace, stability and long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
