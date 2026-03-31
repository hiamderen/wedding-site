import { QRCodeSVG } from 'qrcode.react'

/**
 * QR Code Section
 * - Hiển thị QR Code mã hóa link website
 * - Tiêu đề và hướng dẫn sử dụng bằng tiếng Việt
 */

// *** Cập nhật URL website thực tế tại đây ***
const SITE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://deren-valentina.wedding'

export default function QRCode() {
  return (
    <section id="qrcode" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-lg text-center">
        {/* Section header */}
        <p className="font-inter uppercase tracking-[0.3em] text-pink-400 text-xs mb-3">
          Chia Sẻ Thiệp
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-4">
          QR Code
        </h2>
        <div className="section-divider" />
        <p className="font-inter text-gray-500 mt-4 mb-10 text-sm md:text-base">
          Quét mã để xem thiệp cưới và chia sẻ với mọi người
        </p>

        {/* QR Card */}
        <div className="inline-block bg-gradient-to-br from-pink-50 to-[#FEF9C3] p-8 rounded-3xl shadow-lg border border-pink-100">
          {/* Decorative corners */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-pink-300 rounded-tl" />
            <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-pink-300 rounded-tr" />
            <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-pink-300 rounded-bl" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-pink-300 rounded-br" />

            {/* QR Code */}
            <div className="bg-white p-4 rounded-2xl shadow-inner">
              <QRCodeSVG
                value={SITE_URL}
                size={200}
                bgColor="#ffffff"
                fgColor="#374151"
                level="M"
                includeMargin={false}
              />
            </div>
          </div>

          {/* Heart icon below QR */}
          <div className="mt-5 text-2xl">♥</div>

          {/* URL label */}
          <p className="font-inter text-gray-400 text-xs mt-2 break-all">{SITE_URL}</p>
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
              <span className="font-inter text-xs text-gray-500">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
