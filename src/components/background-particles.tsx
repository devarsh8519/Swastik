export function BackgroundParticles() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />

      {/* Animated particles */}
      <div
        className="particle absolute top-[10%] left-[10%] w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="particle absolute top-[20%] right-[15%] w-32 h-32 rounded-full bg-secondary/10 blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="particle absolute bottom-[15%] left-[20%] w-28 h-28 rounded-full bg-accent/10 blur-2xl animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="particle absolute bottom-[25%] right-[10%] w-36 h-36 rounded-full bg-primary/10 blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
