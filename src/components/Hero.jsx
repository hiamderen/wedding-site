import { useState, useEffect } from 'react'

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
      <span className="text-xs md:text-sm uppercase tracking-widest text-pink-100 mt-1">
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

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        {/* Save the date label */}
        <p className="uppercase tracking-[0.3em] text-pink-200 text-xs md:text-sm mb-4 font-inter font-light">
          Save The Date
        </p>

        {/* Couple names */}
        <h1 className="font-vibes text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl leading-tight mb-2">
          Deren &amp; Valentina
        </h1>

        {/* Full names in Vietnamese */}
        <p className="font-playfair italic text-pink-100 text-base md:text-xl mb-6 tracking-wide">
          Lưu Uy Danh &amp; Phan Huỳnh Cúc
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-16 md:w-24 h-px bg-pink-300/60" />
          <span className="text-pink-300 text-lg">♥</span>
          <div className="w-16 md:w-24 h-px bg-pink-300/60" />
        </div>

        {/* Wedding date */}
        <p className="font-playfair text-white text-xl md:text-3xl tracking-widest mb-10">
          {weddingDateStr}
        </p>

        {/* Countdown timer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 inline-block border border-white/20">
          <p className="text-pink-200 text-xs uppercase tracking-widest mb-3 font-inter">
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
