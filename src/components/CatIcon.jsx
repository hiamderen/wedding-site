/**
 * CatIcon – decorative cat face silhouette used throughout the site
 * fill defaults to gold (#D4AF37) to match the red/gold wedding theme
 */
export default function CatIcon({ style, size = 36, fill = '#D4AF37' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      style={style}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Head */}
      <ellipse cx="32" cy="36" rx="18" ry="16" />
      {/* Left ear */}
      <polygon points="14,24 10,10 22,20" />
      {/* Right ear */}
      <polygon points="50,24 54,10 42,20" />
      {/* Eyes */}
      <ellipse cx="25" cy="33" rx="3" ry="3.5" fill="#7B0A1E" />
      <ellipse cx="39" cy="33" rx="3" ry="3.5" fill="#7B0A1E" />
      {/* Nose */}
      <ellipse cx="32" cy="40" rx="2" ry="1.5" fill="#C0152A" />
      {/* Whiskers left */}
      <line x1="14" y1="40" x2="27" y2="41" stroke="#C0152A" strokeWidth="1" />
      <line x1="14" y1="43" x2="27" y2="42" stroke="#C0152A" strokeWidth="1" />
      {/* Whiskers right */}
      <line x1="50" y1="40" x2="37" y2="41" stroke="#C0152A" strokeWidth="1" />
      <line x1="50" y1="43" x2="37" y2="42" stroke="#C0152A" strokeWidth="1" />
    </svg>
  )
}
