import { QRCodeSVG } from 'qrcode.react'
import CatIcon from './CatIcon'

/**
 * QR Code Section
 * - Hiển thị QR Code mã hóa link website
 * - Tiêu đề và hướng dẫn sử dụng bằng tiếng Việt
 */

// *** Cập nhật URL website thực tế tại đây ***
const SITE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://deren-valentina.wedding'

export default function QRCode() {
  return (
    <section id="qrcode" className="py-20 md:py-28" style={{ background: '#FDF0F0' }}>
      <div className="container mx-auto px-6 max-w-lg text-center">
        {/* Section header */}
        <p className="font-inter uppercase tracking-[0.3em] text-[#D4AF37] text-xs mb-3">
          Chia Sẻ Thiệp
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl text-[#7B0A1E] mb-4">
          QR Code
        </h2>
        <div className="section-divider" />
        <p className="font-inter text-[#7B0A1E]/70 mt-4 mb-10 text-sm md:text-base">
          Quét mã để xem thiệp cưới và chia sẻ với mọi người
        </p>

        {/* QR Card */}
        <div
          className="inline-block p-8 rounded-3xl shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #FFF0F0 0%, #FFF8E7 100%)',
            border: '1px solid rgba(212,175,55,0.4)',
          }}
        >
          {/* Decorative corners */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 rounded-tl" style={{ borderColor: '#D4AF37' }} />
            <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 rounded-tr" style={{ borderColor: '#D4AF37' }} />
            <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 rounded-bl" style={{ borderColor: '#D4AF37' }} />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 rounded-br" style={{ borderColor: '#D4AF37' }} />

            {/* QR Code */}
            <div className="bg-white p-4 rounded-2xl shadow-inner">
              <QRCodeSVG
                value={SITE_URL}
                size={200}
                bgColor="#ffffff"
                fgColor="#7B0A1E"
                level="M"
                includeMargin={false}
              />
            </div>
          </div>

          {/* Cat + heart below QR */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <CatIcon size={24} fill="#C0152A" />
            <span className="text-[#D4AF37] text-xl">♥</span>
            <CatIcon size={24} fill="#C0152A" style={{ transform: 'scaleX(-1)' }} />
          </div>

          {/* URL label */}
          <p className="font-inter text-[#7B0A1E]/50 text-xs mt-2 break-all">{SITE_URL}</p>
        </div>

        {/* Instructions */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            { icon: '📱', step: '1', text: 'Mở camera điện thoại' },
            { icon: '🔍', step: '2', text: 'Hướng vào mã QR' },
            { icon: '💌', step: '3', text: 'Nhấn vào đường link hiện ra' },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-inter text-xs text-[#7B0A1E]/60">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
