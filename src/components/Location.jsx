/**
 * Location Section
 * - Tên địa điểm, ngày giờ, địa chỉ tổ chức tiệc cưới
 * - Nhúng Google Maps iframe
 * - Nút "Chỉ đường" mở Google Maps
 */

// *** Cập nhật thông tin địa điểm tại đây ***
const EVENT = {
  venue: 'Nhà Hàng Tiệc Cưới ABC',
  address: '123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh',
  date: 'Thứ Năm, 01 tháng 01 năm 2026',
  time: '17:30 – 21:00',
  // Google Maps embed query cho TP. Hồ Chí Minh
  mapsQuery: 'Nhà+Hàng+Tiệc+Cưới,+Lê+Lợi,+Quận+1,+Thành+phố+Hồ+Chí+Minh,+Vietnam',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=L%C3%AA+L%E1%BB%A3i,+Qu%E1%BA%ADn+1,+TP.+H%E1%BB%93+Ch%C3%AD+Minh',
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white/70 rounded-xl border border-pink-100">
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-pink-100 rounded-full text-pink-500 text-lg">
        {icon}
      </div>
      <div>
        <p className="font-inter text-xs uppercase tracking-widest text-pink-400 mb-0.5">{label}</p>
        <p className="font-playfair text-gray-800 text-base">{value}</p>
      </div>
    </div>
  )
}

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-28 bg-gradient-to-b from-[#FDF6EC] to-pink-50">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-inter uppercase tracking-[0.3em] text-pink-400 text-xs mb-3">
            Địa Điểm Tổ Chức
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-4">
            Tiệc Cưới
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info cards */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl md:text-3xl text-gray-800 mb-6">
              {EVENT.venue}
            </h3>

            <InfoCard icon="📍" label="Địa chỉ" value={EVENT.address} />
            <InfoCard icon="📅" label="Ngày" value={EVENT.date} />
            <InfoCard icon="🕐" label="Giờ" value={EVENT.time} />

            {/* Directions button */}
            <a
              href={EVENT.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-pink-400 hover:bg-pink-500 text-white font-inter font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Chỉ Đường
            </a>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-pink-100">
            <iframe
              title="Bản đồ địa điểm tổ chức tiệc cưới"
              src={`https://maps.google.com/maps?q=${EVENT.mapsQuery}&output=embed&z=15`}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
