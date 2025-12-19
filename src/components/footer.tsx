export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact */}
          <div>
            <h4 className="font-serif text-2xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p>
                <a href="tel:+919601283518" className="hover:text-accent transition-colors">
                  ☎ +91 9601283518
                </a>
              </p>
              <p>
                <a href="mailto:swastikdevtavastu@gmail.com" className="hover:text-accent transition-colors break-all">
                  ✉️ swastikdevtavastu@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-serif text-2xl font-semibold mb-4">Our Office</h4>
            <address className="not-italic space-y-1 leading-relaxed">
              <p>Swastik Devta Vastu</p>
              <p>Sabarmati,</p>
              <p>Ahmedabad, Gujarat - 380007</p>
              <p>India</p>
            </address>
          </div>

          {/* Map */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-48">
              <iframe
                src="https://www.google.com/maps?q=Sabarmati%20Gujarat&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/90">© 2025 Swastik Devta Vastu | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
