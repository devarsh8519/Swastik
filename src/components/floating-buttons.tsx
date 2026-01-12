import Image from "next/image"

export function FloatingButtons() {
  return (
    <>
      {/* Call Button */}
      <a href="tel:+919601283518" className="fixed right-6 bottom-28 z-50 group" aria-label="Call us">
        <div 
          className="w-16 h-16 rounded-full shadow-2xl bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float">
          <Image src="/phone.png" alt="Call" width={40} height={40} />
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919601283518?text=Hello%20Swastik%20Devta%20Vastu%2C%20I%20would%20like%20to%20book%20a%20Vastu%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-8 z-50 group"
        aria-label="WhatsApp us"
      >
        <div
          className="w-16 h-16 rounded-full shadow-2xl bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Image src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
        </div>
      </a>
    </>
  )
}
