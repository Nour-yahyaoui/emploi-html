'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  onContactClick: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            className="w-8 h-8"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Eye design */}
            <circle cx="50" cy="50" r="45" stroke="#ff0000" strokeWidth="3" fill="none" />
            <circle cx="50" cy="50" r="30" fill="#ff0000" />
            <circle cx="50" cy="50" r="20" fill="#0a0a0a" />
            <circle cx="55" cy="45" r="8" fill="#ffffff" />
            {/* Swoosh curves */}
            <path
              d="M 30 40 Q 20 50 30 60"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 70 40 Q 80 50 70 60"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-bold text-white">TOONART</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <Button
            onClick={onContactClick}
            className="bg-primary hover:bg-red-600 text-white font-bold"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-3">
            <a href="#gallery" className="block text-foreground hover:text-primary">
              Gallery
            </a>
            <a href="#about" className="block text-foreground hover:text-primary">
              About
            </a>
            <Button
              onClick={() => {
                onContactClick()
                setIsOpen(false)
              }}
              className="w-full bg-primary hover:bg-red-600 text-white font-bold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
