"use client"

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary/95 to-primary/90 shadow-lg border-b-2 border-primary-foreground/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-8 py-4 overflow-x-auto scrollbar-hide">
          {[
            { label: "About Us", id: "about" },
            { label: "Services", id: "services" },
            { label: "Payment", id: "payment" },
            { label: "Contact Us", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-primary-foreground font-semibold text-sm md:text-base px-4 md:px-6 py-2 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 whitespace-nowrap relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-foreground transition-all duration-300 group-hover:w-3/4" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
