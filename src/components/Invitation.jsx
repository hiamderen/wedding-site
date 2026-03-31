import { useSearchParams } from 'react-router-dom'

/**
 * Invitation / Thiệp Cưới Section
 * - Đọc tên khách mời từ URL query param: ?guest=TenKhachMoi
 * - Hiển thị thiệp cưới cá nhân hóa
 * - Nếu không có tên: hiển thị "Kính mời Quý Khách"
 * - Nút "Lưu thiệp" (in/screenshot)
 */

export default function Invitation() {
  const [searchParams] = useSearchParams()
  // Đọc tên khách mời từ URL query param ?guest=
  const rawGuest = searchParams.get('guest')
  const guestName = rawGuest ? decodeURIComponent(rawGuest) : null

  const handlePrint = () => {
    window.print()
  }

  return (
    <section id="invitation" className="py-20 md:py-28 bg-gradient-to-b from-pink-50 to-[#FEF9C3]">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-inter uppercase tracking-[0.3em] text-pink-400 text-xs mb-3">
            Thiệp Mời
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-4">
            Thiệp Cưới
          </h2>
          <div className="section-divider" />
        </div>

        {/* Invitation card */}
        <div
          id="invitation-card"
          className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-pink-100"
        >
          {/* Decorative top strip */}
          <div className="h-2 bg-gradient-to-r from-pink-300 via-rose-300 to-yellow-200" />

          <div className="px-8 md:px-14 py-12 text-center">
            {/* Decorative border frame */}
            <div className="border-2 border-pink-200 rounded-2xl p-8 relative">
              {/* Corner flourishes */}
              <div className="absolute top-2 left-2 text-pink-200 text-xl leading-none">❧</div>
              <div className="absolute top-2 right-2 text-pink-200 text-xl leading-none rotate-90">❧</div>
              <div className="absolute bottom-2 left-2 text-pink-200 text-xl leading-none -rotate-90">❧</div>
              <div className="absolute bottom-2 right-2 text-pink-200 text-xl leading-none rotate-180">❧</div>

              {/* Opening line */}
              <p className="font-lora text-gray-500 text-sm mb-6 tracking-wide">
                Trân trọng kính mời
              </p>

              {/* Guest name */}
              <div className="mb-6">
                {guestName ? (
                  <p className="font-cormorant font-semibold text-4xl md:text-5xl text-pink-500 leading-snug">
                    {guestName}
                  </p>
                ) : (
                  <p className="font-playfair italic text-2xl md:text-3xl text-pink-400">
                    Quý Khách
                  </p>
                )}
              </div>

              {/* Main invitation text */}
              <p className="font-lora text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                đến dự lễ thành hôn của chúng tôi
              </p>

              {/* Couple names */}
              <h3 className="font-cormorant font-semibold text-5xl md:text-6xl text-gray-800 mb-2 leading-tight">
                Deren &amp; Valentina
              </h3>
              <p className="font-lora text-gray-400 text-xs mb-6">
                Lưu Uy Danh &amp; Phan Huỳnh Cúc
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-px bg-pink-200" />
                <span className="text-pink-300">♥</span>
                <div className="w-12 h-px bg-pink-200" />
              </div>

              {/* Event details */}
              <div className="space-y-2 text-sm font-lora text-gray-600">
                <p>
                  <span className="font-medium text-gray-700">Ngày:</span>{' '}
                  Thứ Năm, 01 tháng 01 năm 2026
                </p>
                <p>
                  <span className="font-medium text-gray-700">Giờ:</span>{' '}
                  17:30 – 21:00
                </p>
                <p>
                  <span className="font-medium text-gray-700">Địa điểm:</span>{' '}
                  Nhà Hàng Tiệc Cưới ABC, 123 Đường Lê Lợi, Quận 1, TP. HCM
                </p>
              </div>

              {/* Closing */}
              <p className="font-lora italic text-gray-400 text-sm mt-6">
                Sự hiện diện của bạn là niềm vinh dự lớn nhất của chúng tôi.
              </p>
            </div>
          </div>

          {/* Decorative bottom strip */}
          <div className="h-2 bg-gradient-to-r from-yellow-200 via-rose-300 to-pink-300" />
        </div>

        {/* URL hint for personalization */}
        {!guestName && (
          <div className="mt-6 bg-white/70 border border-pink-100 rounded-xl p-4 text-center">
            <p className="font-inter text-gray-500 text-sm">
              💡 Thêm tên khách mời vào URL để cá nhân hóa thiệp:
            </p>
            <code className="text-pink-500 text-sm font-mono">
              {typeof window !== 'undefined' ? window.location.origin : ''}/?guest=Tên+Khách+Mời
            </code>
          </div>
        )}

        {/* Save button */}
        <div className="text-center mt-8">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-inter font-medium px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
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
