import { useState, useEffect } from 'react'
import CatIcon from './CatIcon'

/**
 * Hero Section
 * - Romantic background with gradient overlay
 * - Couple names in decorative fonts
 * - Wedding date display
 * - Countdown timer to the wedding date
 * - Fade-in animation on load
 */

// *** Thay đổi ngày cưới tại đây ***
const WEDDING_DATE = new Date('2026-01-01T10:00:00')

function useCountdown(targetDate) {
  const calcTimeLeft = () => {
    const diff = targetDate - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center mx-3">
      <span className="text-3xl md:text-5xl font-playfair font-bold text-white drop-shadow-lg">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs md:text-sm uppercase tracking-widest text-[#F5D78A] mt-1">
        {label}
      </span>
    </div>
  )
}

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE)

  const weddingDateStr = WEDDING_DATE.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(/\//g, '.')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Layered gradient background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1465495976277-a703d7f4abd2?w=1920&auto=format&fit=crop&q=85")',
        }}
      />
      {/* Dark romantic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Decorative top/bottom borders */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-px bg-white/30" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-px bg-white/30" />

      {/* Cat decorations – bottom corners */}
      <div className="absolute bottom-14 left-6 opacity-50 pointer-events-none hidden md:block">
        <CatIcon size={40} />
      </div>
      <div className="absolute bottom-14 right-6 opacity-50 pointer-events-none hidden md:block">
        <CatIcon size={40} style={{ transform: 'scaleX(-1)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        {/* Save the date label */}
        <p className="uppercase tracking-[0.3em] text-[#F5D78A] text-xs md:text-sm mb-4 font-inter font-light">
          Save The Date
        </p>

        {/* Couple names */}
        <h1 className="font-vibes text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl leading-tight mb-2">
          Deren &amp; Valentina
        </h1>

        {/* Full names in Vietnamese */}
        <p className="font-playfair italic text-[#F5D78A] text-base md:text-xl mb-6 tracking-wide">
          Lưu Uy Danh &amp; Phan Huỳnh Cúc
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-16 md:w-24 h-px" style={{ background: 'rgba(212,175,55,0.6)' }} />
          <span className="text-[#D4AF37] text-lg">♥</span>
          <div className="w-16 md:w-24 h-px" style={{ background: 'rgba(212,175,55,0.6)' }} />
        </div>

        {/* Wedding date */}
        <p className="font-playfair text-white text-xl md:text-3xl tracking-widest mb-10">
          {weddingDateStr}
        </p>

        {/* Countdown timer */}
        <div
          className="backdrop-blur-sm rounded-2xl px-6 py-5 inline-block"
          style={{ background: 'rgba(123,10,30,0.5)', border: '1px solid rgba(212,175,55,0.3)' }}
        >
          <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-3 font-inter">
            Đếm ngược đến ngày trọng đại
          </p>
          <div className="flex items-center justify-center">
            <CountdownUnit value={days} label="Ngày" />
            <span className="text-white text-2xl mb-3">:</span>
            <CountdownUnit value={hours} label="Giờ" />
            <span className="text-white text-2xl mb-3">:</span>
            <CountdownUnit value={minutes} label="Phút" />
            <span className="text-white text-2xl mb-3">:</span>
            <CountdownUnit value={seconds} label="Giây" />
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#story"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 hover:text-white animate-bounce transition-colors"
        aria-label="Cuộn xuống"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
