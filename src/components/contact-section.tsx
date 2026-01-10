"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactSection() {
  const [formStatus, setFormStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("✅ Thank you! Your message has been sent successfully.")
      setIsSubmitting(false)
      ;(e.target as HTMLFormElement).reset()

      // Clear status after 5 seconds
      setTimeout(() => setFormStatus(""), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-muted-foreground text-lg">We are happy to assist you</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-card to-muted/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-2 border-primary/10 space-y-6"
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            pattern="^[A-Za-z\s]+$"
            className="h-14 rounded-2xl border-2 focus:border-primary text-base"
          />

          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="h-14 rounded-2xl border-2 focus:border-primary text-base"
          />

          <Input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            required
            pattern="^[0-9]{10}$"
            maxLength={10}
            className="h-14 rounded-2xl border-2 focus:border-primary text-base"
          />

          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="rounded-2xl border-2 focus:border-primary text-base resize-none"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-secondary hover:from-secondary/90 hover:to-secondary text-secondary-foreground rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>

          {formStatus && (
            <p className="text-center p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold">
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
