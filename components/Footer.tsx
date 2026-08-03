'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-8 h-8"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" stroke="#ff0000" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="30" fill="#ff0000" />
                <circle cx="50" cy="50" r="20" fill="#0a0a0a" />
                <circle cx="55" cy="45" r="8" fill="#ffffff" />
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
              <span className="font-bold text-white text-lg">TOONART</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium anime and cartoon wall art from Tunisia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-bold mb-4 text-white">Collections</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Anime</span>
              </li>
              <li>
                <span className="text-muted-foreground">Disney</span>
              </li>
              <li>
                <span className="text-muted-foreground">Cartoons</span>
              </li>
              <li>
                <span className="text-muted-foreground">Pixar</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+21624526126" className="text-muted-foreground hover:text-primary transition-colors">
                  +216 24 526 126
                </a>
              </li>
              <li>
                <a href="mailto:toonart.deco.tn@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  toonart.deco.tn@gmail.com
                </a>
              </li>
              <li>
                <p className="text-muted-foreground">
                  Sousse, Tunisia
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} ToonArt. All rights reserved. | Made with ❤️ in Tunisia
            </p>
            <div className="flex gap-6">
              <a href="https://facebook.com/ToonArt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="https://instagram.com/ToonArt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="https://wa.me/21624526126" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
