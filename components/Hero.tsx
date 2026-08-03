'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background via-background to-background/50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30">
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm text-primary font-semibold">Premium Anime Wall Art</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Transform Your <span className="text-primary">Space</span> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-primary">ToonArt</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
          Discover stunning multi-panel anime, cartoon, and Disney wall art. Each piece is carefully crafted to bring your favorite characters to life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={onContactClick}
            size="lg"
            className="bg-primary hover:bg-red-600 text-white font-bold text-base h-12"
          >
            Get Started <ArrowRight size={20} className="ml-2" />
          </Button>
          <a href="#gallery">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-bold text-base h-12 w-full sm:w-auto"
            >
              Explore Gallery
            </Button>
          </a>
        </div>



        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 md:mt-16 max-w-2xl mx-auto">
          <div className="p-4 rounded-lg bg-card border border-border/30">
            <div className="text-2xl font-bold text-primary">50+</div>
            <p className="text-xs text-muted-foreground mt-1">Designs</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/30">
            <div className="text-2xl font-bold text-primary">37 DT</div>
            <p className="text-xs text-muted-foreground mt-1">Per Set</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/30">
            <div className="text-2xl font-bold text-primary">5</div>
            <p className="text-xs text-muted-foreground mt-1">Pieces</p>
          </div>
        </div>
      </div>
    </section>
  )
}
