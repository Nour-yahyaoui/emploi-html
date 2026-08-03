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

        {/* Decorative Grid Background with Products */}
        <div className="relative mt-12 mb-0 h-96 md:h-96 rounded-lg overflow-hidden border border-border/30 bg-gradient-to-br from-card to-background/50 flex items-center justify-center">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ff0000" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Product Panels Background */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 px-4 opacity-40">
            {/* Left Product Panel */}
            <div className="w-20 h-32 rounded-lg bg-gradient-to-b from-yellow-400 via-orange-400 to-red-500 border-2 border-primary shadow-lg transform -rotate-12 hover:rotate-0 transition-transform flex items-end justify-center pb-2">
              <span className="text-2xl">🎬</span>
            </div>
            
            {/* Center Product Panel */}
            <div className="w-24 h-40 rounded-lg bg-gradient-to-b from-green-400 via-cyan-400 to-blue-600 border-2 border-primary shadow-xl transform rotate-0 scale-110 flex items-end justify-center pb-3">
              <span className="text-3xl">⚡</span>
            </div>
            
            {/* Right Product Panel */}
            <div className="w-20 h-32 rounded-lg bg-gradient-to-b from-purple-400 via-pink-400 to-red-500 border-2 border-primary shadow-lg transform rotate-12 hover:rotate-0 transition-transform flex items-end justify-center pb-2">
              <span className="text-2xl">✨</span>
            </div>

            {/* Far Left Product Panel */}
            <div className="hidden md:flex w-16 h-28 rounded-lg bg-gradient-to-b from-indigo-400 to-purple-600 border-2 border-primary/70 shadow-md transform -rotate-6 flex items-end justify-center pb-1">
              <span className="text-xl">🎨</span>
            </div>

            {/* Far Right Product Panel */}
            <div className="hidden md:flex w-16 h-28 rounded-lg bg-gradient-to-b from-cyan-300 to-blue-500 border-2 border-primary/70 shadow-md transform rotate-6 flex items-end justify-center pb-1">
              <span className="text-xl">🎭</span>
            </div>
          </div>

          {/* Center Content */}
          <div className="relative z-10 text-center pointer-events-none">
            <div className="mb-4 text-6xl">🎨</div>
            <p className="text-muted-foreground font-medium">
              Explore Our Collection
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Featuring anime, Disney, cartoons, and more
            </p>
          </div>
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
