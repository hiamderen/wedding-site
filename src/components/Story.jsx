/**
 * Story Section
 * - Timeline kể câu chuyện tình yêu của Deren & Valentina
 * - Layout zigzag (xen kẽ trái/phải) cho desktop
 * - Mỗi mốc có icon trái tim, tiêu đề, mô tả ngắn
 */
import CatIcon from './CatIcon'

const milestones = [
  {
    year: '2020',
    date: 'Tháng 3, 2020',
    title: 'Lần đầu gặp nhau',
    description:
      'Trong một buổi tiệc sinh nhật của người bạn chung, ánh mắt của Deren và Valentina tình cờ gặp nhau qua đám đông. Một nụ cười nhỏ và cái bắt tay rụt rè — đó là khởi đầu của một câu chuyện đẹp chưa ai ngờ tới.',
    icon: '💫',
    bg: 'from-red-50 to-rose-50',
  },
  {
    year: '2020',
    date: 'Tháng 6, 2020',
    title: 'Ngày hẹn hò đầu tiên',
    description:
      'Deren đã dũng cảm rủ Valentina đi cà phê sau nhiều lần do dự. Buổi sáng ấy kéo dài đến tận chiều tối — hai người cứ thế trò chuyện không ngừng, quên cả thời gian. Kể từ đó, họ biết họ thuộc về nhau.',
    icon: '☕',
    bg: 'from-amber-50 to-yellow-50',
  },
  {
    year: '2022',
    date: 'Tháng 12, 2022',
    title: 'Chuyến du lịch Đà Lạt',
    description:
      'Giữa không khí se lạnh của thành phố ngàn hoa, Deren và Valentina cùng nhau khám phá những con đường rải đầy hoa dã quỳ. Chuyến đi ấy khắc sâu thêm tình cảm của đôi trẻ và là ký ức không thể quên.',
    icon: '🌸',
    bg: 'from-rose-50 to-red-50',
  },
]

export default function Story() {
  return (
    <section id="story" className="py-20 md:py-28" style={{ background: '#FDF0F0' }}>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-inter uppercase tracking-[0.3em] text-[#D4AF37] text-xs mb-3">
            Hành Trình Tình Yêu
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#7B0A1E] mb-4">
            Chuyện Tình Của Chúng Tôi
          </h2>
          <div className="section-divider" />
          <p className="font-inter text-[#7B0A1E]/70 mt-4 max-w-md mx-auto text-sm md:text-base">
            Mỗi câu chuyện tình yêu đều có khởi đầu riêng — và đây là câu chuyện của chúng tôi.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: 'rgba(212,175,55,0.4)' }}
          />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } mb-12`}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${milestone.bg} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow`}
                      style={{ border: '1px solid rgba(192,21,42,0.15)' }}
                    >
                      {/* Year badge */}
                      <span
                        className="inline-block text-xs font-inter font-medium px-3 py-1 rounded-full mb-3"
                        style={{ background: 'rgba(212,175,55,0.2)', color: '#7B0A1E' }}
                      >
                        {milestone.date}
                      </span>
                      <h3 className="font-playfair text-xl md:text-2xl text-[#7B0A1E] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-inter text-[#7B0A1E]/70 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon (desktop) */}
                  <div
                    className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full shadow-md text-xl flex-shrink-0"
                    style={{ background: 'white', border: '2px solid #D4AF37' }}
                  >
                    {milestone.icon}
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Decorative cats at bottom of section */}
        <div className="flex items-center justify-center gap-6 mt-8 opacity-40">
          <CatIcon size={32} fill="#C0152A" />
          <span className="text-[#D4AF37]">✦</span>
          <CatIcon size={32} fill="#C0152A" style={{ transform: 'scaleX(-1)' }} />
        </div>
      </div>
    </section>
  )
}
