/**
 * Gallery Section
 * - Masonry/grid layout with wedding photos
 * - Desktop: 3-column grid, some images span 2 rows (tall)
 * - Mobile: 2-column grid
 * - Hover overlay with zoom effect
 */

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1511285560929-80b5e1fefdba?w=800&auto=format&fit=crop&q=80',
    alt: 'Couple in love',
    tall: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=80',
    alt: 'Wedding ceremony',
    tall: false,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1465495976277-a703d7f4abd2?w=800&auto=format&fit=crop&q=80',
    alt: 'Wedding moment',
    tall: false,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=80',
    alt: 'Bride portrait',
    tall: true,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
    alt: 'Couple portrait',
    tall: false,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&auto=format&fit=crop&q=80',
    alt: 'Wedding rings',
    tall: false,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=800&auto=format&fit=crop&q=80',
    alt: 'Wedding party',
    tall: true,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1529636798458-0d88f231e1d8?w=800&auto=format&fit=crop&q=80',
    alt: 'Wedding dress',
    tall: false,
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-inter uppercase tracking-[0.3em] text-pink-400 text-xs mb-3">
            Our Moments
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-4">
            Khoảnh Khắc Của Chúng Tôi
          </h2>
          <div className="section-divider" />
          <p className="font-inter text-gray-500 mt-4 max-w-md mx-auto text-sm md:text-base">
            Những khoảnh khắc đẹp nhất trong hành trình tình yêu của chúng tôi.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                photo.tall ? 'row-span-2' : 'row-span-1'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-inter text-sm font-light tracking-wide">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
