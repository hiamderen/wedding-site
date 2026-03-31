import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Story from '../components/Story'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import QRCode from '../components/QRCode'
import Invitation from '../components/Invitation'
import CatIcon from '../components/CatIcon'

/**
 * Navbar - Fixed top navigation with smooth scroll links
 */
const navLinks = [
  { href: '#hero', label: 'Trang Chủ' },
  { href: '#story', label: 'Câu Chuyện' },
  { href: '#gallery', label: 'Ảnh Cưới' },
  { href: '#location', label: 'Địa Điểm' },
  { href: '#qrcode', label: 'QR Code' },
  { href: '#invitation', label: 'Thiệp Mời' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(123,10,30,0.95)' } : {}}
    >
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between h-16">
        {/* Logo / couple name */}
        <a
          href="#hero"
          className="font-vibes text-2xl transition-colors text-[#D4AF37]"
        >
          D &amp; V
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-inter text-sm transition-colors hover:text-[#D4AF37] text-white/90"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded transition-colors text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden backdrop-blur-md border-t px-6 py-4"
          style={{ background: 'rgba(123,10,30,0.97)', borderColor: 'rgba(212,175,55,0.3)' }}
        >
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-inter text-sm block hover:text-[#D4AF37] transition-colors text-white/90"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

/**
 * Footer
 */
function Footer() {
  return (
    <footer
      className="text-white py-10 text-center"
      style={{ background: 'linear-gradient(180deg, #4A0010 0%, #2D0009 100%)' }}
    >
      {/* Decorative cats */}
      <div className="flex items-center justify-center gap-4 mb-3 opacity-70">
        <CatIcon size={28} />
        <CatIcon size={28} style={{ transform: 'scaleX(-1)' }} />
      </div>
      <p className="font-vibes text-3xl text-[#D4AF37] mb-2">Deren &amp; Valentina</p>
      <p className="font-inter text-[#F5D78A]/70 text-sm">
        01.01.2026 · TP. Hồ Chí Minh · Việt Nam
      </p>
      <div className="mt-4 flex items-center justify-center gap-2 text-[#D4AF37]">
        <span className="text-xs font-inter">Made with</span>
        <span>♥</span>
      </div>
    </footer>
  )
}

/**
 * Home Page - Assembles all sections in order
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Gallery />
        <Location />
        <QRCode />
        <Invitation />
      </main>
      <Footer />
    </>
  )
}
