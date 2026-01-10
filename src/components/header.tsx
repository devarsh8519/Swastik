import Image from "next/image"

export function Header() {
  return (
    <header className="relative bg-gradient-to-r from-card/95 to-muted/95 backdrop-blur-md border-b-4 border-primary/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Logo Box */}
          <div className="relative">
            <div>
              <div className="w-36 h-36 md:w-36 md:h-36 relative">
                <Image
                  src="/logo1.png"
                  alt="Swastik Devta Vastu Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight mb-2">
              Swastik Devta Vastu
            </h1>
            <p className="font-serif text-lg md:text-xl text-secondary/90 italic max-w-2xl">
              Calm, balanced and practical Vastu guidance for homes, offices and businesses.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
