'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    title: 'Neon Villain',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785782818813-D36J6H6WQmvWHDhqiOl2TFCFn5sy2w.jpg',
    category: 'Dark Anime',
  },
  {
    id: 2,
    title: 'Speed Machine',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785786977094-8x5db7abeTRTvpMLkSihr4A0x1Bqf2.jpg',
    category: 'Sports',
  },
  {
    id: 3,
    title: 'Minecraft World',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785786984586-ZHqVxtoFAeZeGfvZHxXhwkKygj261M.jpg',
    category: 'Gaming',
  },
  {
    id: 4,
    title: 'Fire Warrior',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785786870684-IRbQiFc7Xsv1Wh6kTxjUUKCoK8Vs9h.jpg',
    category: 'Dark Anime',
  },
  {
    id: 5,
    title: 'Pink Dreams',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785786950049-KOpBhSOtJ5jr1DMgiG3mRQASbznsfd.jpg',
    category: 'Anime',
  },
  {
    id: 6,
    title: 'BMW M4 Racing',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785786972183-1AbGVvdJyvOn7fAWge5uPRRFtN3ZIx.jpg',
    category: 'Sports',
  },
  {
    id: 7,
    title: 'Frozen Magic',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785782831765-Z3iCVW3Fei3Xw6mBPOgWH2777SWJUl.jpg',
    category: 'Disney',
  },
  {
    id: 8,
    title: 'Dark Wings',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785782822993-bme5yb9eW05JJICg3oUNv1Se1ldtn4.jpg',
    category: 'Anime',
  },
  {
    id: 9,
    title: 'Tom & Jerry',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785782828441-u8AvHCaE4FftEHSW7oPQ4ynKWjU8Uj.jpg',
    category: 'Classic',
  },
  {
    id: 10,
    title: 'Cars Adventure',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785782824814-ocbqmY69jgqc33XJTQlzg9tm4jfmvQ.jpg',
    category: 'Pixar',
  },
  {
    id: 11,
    title: 'Ocean Friend',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785782829865-Ky7GN8YgSLwSFcxYXrSqf4Jbim0O5W.jpg',
    category: 'Anime',
  },
  {
    id: 12,
    title: 'Mixed Emotions',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785782820767-bu7PnSie4jIdVXEiFKn91fzB8QEpAE.jpg',
    category: 'Art',
  },
  {
    id: 13,
    title: 'Disney Magic',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1785782826411-6Yzdx1yFXIZO2M4fjJUNUV32HF7ZXs.jpg',
    category: 'Disney',
  },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))]
  
  const filteredItems = selectedCategory && selectedCategory !== 'All'
    ? galleryItems.filter(item => item.category === selectedCategory)
    : galleryItems

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our diverse selection of anime, cartoon, and Disney wall art. Each design is carefully curated for quality and style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                (selectedCategory === category || (selectedCategory === null && category === 'All'))
                  ? 'bg-primary text-white'
                  : 'bg-card border border-border text-foreground hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className="group relative overflow-hidden rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 cursor-pointer h-80"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-primary text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Each set includes 5 beautifully crafted pieces
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/30">
            <span className="text-2xl font-bold text-primary">37 DT</span>
            <span className="text-muted-foreground">per complete set</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Fullscreen view"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-primary/20 hover:bg-primary/40 text-white rounded-full p-2 transition-colors duration-200 backdrop-blur-sm"
              aria-label="Close fullscreen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
