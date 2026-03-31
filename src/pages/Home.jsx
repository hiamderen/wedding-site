import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Story from '../components/Story'
import Location from '../components/Location'
import QRCode from '../components/QRCode'
import Invitation from '../components/Invitation'

/**
 * Navbar - Fixed top navigation with smooth scroll links
 */
const navLinks = [
  { href: '#hero', label: 'Trang Chủ' },
  { href: '#story', label: 'Câu Chuyện' },
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
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between h-16">
        {/* Logo / couple name */}
        <a
          href="#hero"
          className={`font-vibes text-2xl transition-colors ${
            scrolled ? 'text-pink-500' : 'text-white'
          }`}
        >
          D &amp; V
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-inter text-sm transition-colors hover:text-pink-400 ${
                  scrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100 px-6 py-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-inter text-gray-700 text-sm block hover:text-pink-400 transition-colors"
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
    <footer className="bg-gray-900 text-white py-10 text-center">
      <p className="font-vibes text-3xl text-pink-300 mb-2">Deren &amp; Valentina</p>
      <p className="font-inter text-gray-400 text-sm">
        01.01.2026 · TP. Hồ Chí Minh · Việt Nam
      </p>
      <div className="mt-4 flex items-center justify-center gap-2 text-pink-400">
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
        <Location />
        <QRCode />
        <Invitation />
      </main>
      <Footer />
    </>
  )
}
