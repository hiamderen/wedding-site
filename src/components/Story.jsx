/**
 * Story Section
 * - Timeline kể câu chuyện tình yêu của Deren & Valentina
 * - Layout zigzag (xen kẽ trái/phải) cho desktop
 * - Mỗi mốc có icon trái tim, tiêu đề, mô tả ngắn
 */

const milestones = [
  {
    year: '2020',
    date: 'Tháng 3, 2020',
    title: 'Lần đầu gặp nhau',
    description:
      'Trong một buổi tiệc sinh nhật của người bạn chung, ánh mắt của Deren và Valentina tình cờ gặp nhau qua đám đông. Một nụ cười nhỏ và cái bắt tay rụt rè — đó là khởi đầu của một câu chuyện đẹp chưa ai ngờ tới.',
    icon: '💫',
    bg: 'from-pink-50 to-rose-50',
  },
  {
    year: '2020',
    date: 'Tháng 6, 2020',
    title: 'Ngày hẹn hò đầu tiên',
    description:
      'Deren đã dũng cảm rủ Valentina đi cà phê sau nhiều lần do dự. Buổi sáng ấy kéo dài đến tận chiều tối — hai người cứ thế trò chuyện không ngừng, quên cả thời gian. Kể từ đó, họ biết họ thuộc về nhau.',
    icon: '☕',
    bg: 'from-yellow-50 to-amber-50',
  },
  {
    year: '2022',
    date: 'Tháng 12, 2022',
    title: 'Chuyến du lịch Đà Lạt',
    description:
      'Giữa không khí se lạnh của thành phố ngàn hoa, Deren và Valentina cùng nhau khám phá những con đường rải đầy hoa dã quỳ. Chuyến đi ấy khắc sâu thêm tình cảm của đôi trẻ và là ký ức không thể quên.',
    icon: '🌸',
    bg: 'from-purple-50 to-pink-50',
  },
  {
    year: '2024',
    date: 'Tháng 2, 2024',
    title: 'Ngày cầu hôn',
    description:
      'Dưới ánh đèn lung linh của một nhà hàng lãng mạn nhìn ra thành phố, Deren quỳ xuống với nhẫn kim cương trên tay và hỏi câu mà anh đã ấp ủ từ lâu. Valentina gật đầu trong nước mắt hạnh phúc — và từ đó, họ bắt đầu hành trình mới.',
    icon: '💍',
    bg: 'from-rose-50 to-pink-50',
  },
]

export default function Story() {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#FDF6EC]">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-inter uppercase tracking-[0.3em] text-pink-400 text-xs mb-3">
            Hành Trình Tình Yêu
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-4">
            Chuyện Tình Của Chúng Tôi
          </h2>
          <div className="section-divider" />
          <p className="font-inter text-gray-500 mt-4 max-w-md mx-auto text-sm md:text-base">
            Mỗi câu chuyện tình yêu đều có khởi đầu riêng — và đây là câu chuyện của chúng tôi.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-pink-200" />

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
                      className={`bg-gradient-to-br ${milestone.bg} rounded-2xl p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow`}
                    >
                      {/* Year badge */}
                      <span className="inline-block bg-pink-100 text-pink-600 text-xs font-inter font-medium px-3 py-1 rounded-full mb-3">
                        {milestone.date}
                      </span>
                      <h3 className="font-playfair text-xl md:text-2xl text-gray-800 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-inter text-gray-500 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon (desktop) */}
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-pink-300 shadow-md text-xl flex-shrink-0">
                    {milestone.icon}
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
