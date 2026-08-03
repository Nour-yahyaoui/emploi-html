'use client'

import { useState, useRef } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Page() {
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={scrollToContact} />
      <Hero onContactClick={scrollToContact} />
      <Gallery />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
