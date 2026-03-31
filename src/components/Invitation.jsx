import { useSearchParams } from 'react-router-dom'
import CatIcon from './CatIcon'

/**
 * Invitation / Thiệp Cưới Section
 * - Đọc tên khách mời từ URL query param: ?guest=TenKhachMoi
 * - Hiển thị thiệp cưới cá nhân hóa phong cách Trung Hoa đỏ đô
 * - Nếu không có tên: hiển thị "Kính mời Quý Khách"
 * - Nút "Lưu thiệp" (in/screenshot)
 */

// SVG diamond-lattice pattern encoded as data URI for card background
const DIAMOND_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='none' stroke='%23C0152A' stroke-width='0.8' stroke-opacity='0.4'/%3E%3C/svg%3E")`

const cardStyle = {
  aspectRatio: '3/4',
  maxWidth: '480px',
  background: `${DIAMOND_PATTERN}, linear-gradient(160deg, #7B0A1E 0%, #A01020 60%, #7B0A1E 100%)`,
  border: '2px solid #D4AF37',
  boxShadow: 'inset 0 0 0 4px rgba(212,175,55,0.25), 0 20px 60px rgba(123,10,30,0.5)',
}

export default function Invitation() {
  const [searchParams] = useSearchParams()
  // Đọc tên khách mời từ URL query param ?guest=
  const rawGuest = searchParams.get('guest')
  const guestName = rawGuest ? decodeURIComponent(rawGuest) : null

  const handlePrint = () => {
    window.print()
  }

  return (
    <section
      id="invitation"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #7B0A1E 0%, #C0152A 100%)' }}
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-inter uppercase tracking-[0.3em] text-[#D4AF37] text-xs mb-3">
            Thiệp Mời
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4">
            Thiệp Cưới
          </h2>
          <div className="section-divider" />
        </div>

        {/* Invitation card — 3:4 portrait */}
        <div
          id="invitation-card"
          className="relative rounded-2xl overflow-hidden w-full flex flex-col"
          style={cardStyle}
        >
          {/* Cat motif — bottom-left */}
          <div className="absolute bottom-4 left-4 opacity-80 pointer-events-none">
            <CatIcon />
          </div>
          {/* Cat motif — bottom-right */}
          <div className="absolute bottom-4 right-4 opacity-80 pointer-events-none">
            <CatIcon style={{ transform: 'scaleX(-1)' }} />
          </div>

          {/* Inner gold double-border frame */}
          <div
            className="absolute inset-3 rounded-xl pointer-events-none"
            style={{ border: '1px solid rgba(212,175,55,0.5)' }}
          />
          <div
            className="absolute inset-[18px] rounded-lg pointer-events-none"
            style={{ border: '1px solid rgba(212,175,55,0.3)' }}
          />

          {/* Card content */}
          <div className="flex flex-col items-center justify-center flex-1 px-8 py-10 text-center relative z-10">
            {/* Top gold ornament */}
            <div className="text-[#D4AF37] text-2xl mb-4 tracking-widest">✦ ✦ ✦</div>

            {/* Opening line */}
            <p className="font-lora text-[#F5D78A] text-sm mb-4 tracking-widest uppercase">
              Trân trọng kính mời
            </p>

            {/* Guest name */}
            <div className="mb-4">
              {guestName ? (
                <p className="font-cormorant font-semibold text-3xl md:text-4xl text-white leading-snug">
                  {guestName}
                </p>
              ) : (
                <p className="font-playfair italic text-2xl md:text-3xl text-[#F5D78A]">
                  Quý Khách
                </p>
              )}
            </div>

            {/* Main invitation text */}
            <p className="font-lora text-[#F5D78A] text-sm md:text-base leading-relaxed mb-5">
              đến dự lễ thành hôn của chúng tôi
            </p>

            {/* Couple names */}
            <h3 className="font-cormorant font-semibold text-3xl md:text-4xl text-white mb-1 leading-tight whitespace-nowrap">
              Deren &amp; Valentina
            </h3>
            <p className="font-lora text-[#D4AF37] text-xs mb-5">
              Lưu Uy Danh &amp; Phan Huỳnh Cúc
            </p>

            {/* Divider with paw prints */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <div className="w-10 h-px" style={{ background: 'rgba(212,175,55,0.6)' }} />
              <span className="text-[#D4AF37] text-sm">♥ 🐾 ♥</span>
              <div className="w-10 h-px" style={{ background: 'rgba(212,175,55,0.6)' }} />
            </div>

            {/* Event details */}
            <div className="space-y-1.5 text-xs md:text-sm font-lora text-[#F5D78A]">
              <p>
                <span className="font-semibold text-[#D4AF37]">Ngày:</span>{' '}
                Thứ Năm, 01 tháng 01 năm 2026
              </p>
              <p>
                <span className="font-semibold text-[#D4AF37]">Giờ:</span>{' '}
                17:30 – 21:00
              </p>
              <p>
                <span className="font-semibold text-[#D4AF37]">Địa điểm:</span>{' '}
                Nhà Hàng Tiệc Cưới ABC, 123 Đường Lê Lợi, Quận 1, TP. HCM
              </p>
            </div>

            {/* Closing */}
            <p className="font-lora italic text-[#F5D78A] text-xs mt-5 leading-relaxed">
              Sự hiện diện của bạn là niềm vinh dự lớn nhất của chúng tôi.
            </p>

            {/* Cat closing note */}
            <p className="font-lora italic text-[#D4AF37] text-xs mt-3 opacity-80">
              Và những người bạn lông mao của chúng tôi cũng chờ đón bạn 🐾
            </p>

            {/* Bottom gold ornament */}
            <div className="text-[#D4AF37] text-xl mt-4 tracking-widest">✦ ✦ ✦</div>
          </div>
        </div>

        {/* URL hint for personalization */}
        {!guestName && (
          <div
            className="mt-6 rounded-xl p-4 text-center w-full max-w-sm"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(212,175,55,0.4)' }}
          >
            <p className="font-inter text-[#F5D78A] text-sm mb-1">
              💡 Thêm tên khách mời vào URL để cá nhân hóa thiệp:
            </p>
            <code className="text-[#D4AF37] text-sm font-mono break-all">
              {typeof window !== 'undefined' ? window.location.origin : ''}/wedding-site/?guest=Tên+Khách+Mời
            </code>
          </div>
        )}

        {/* Save button */}
        <div className="text-center mt-8">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 font-inter font-medium px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
              color: '#7B0A1E',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
            </svg>
            Lưu / In Thiệp
          </button>
        </div>
      </div>
    </section>
  )
}
