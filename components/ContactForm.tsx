'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have questions about our artwork? Want to place an order? We&apos;d love to hear from you! Reach out to us through any of the following methods.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Phone</h3>
                  <a href="tel:+21624526126" className="text-muted-foreground hover:text-primary transition-colors">
                    +216 24 526 126
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <a href="mailto:toonart.deco.tn@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    toonart.deco.tn@gmail.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">We reply within 2 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Sousse, Hamman-Sousse<br />
                    Tunisia, 4054
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-10 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                <a href="https://facebook.com/ToonArt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all flex items-center justify-center">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="https://instagram.com/ToonArt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all flex items-center justify-center">
                  <span className="text-sm">📷</span>
                </a>
                <a href="https://wa.me/21624526126" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all flex items-center justify-center">
                  <span className="text-sm">💬</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-card border border-border/30 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+216 XX XXX XXX"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="order">Place an Order</option>
                  <option value="custom">Custom Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your interest in our artwork..."
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  ✗ Failed to send message. Please try again or contact us directly.
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-red-600 text-white font-bold py-2.5 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
