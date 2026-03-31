# 💍 Wedding Site — Deren & Valentina

> Website thiệp cưới cá nhân hóa cho **Lưu Uy Danh (Deren)** & **Phan Huỳnh Cúc (Valentina)**  
> Xây dựng bằng **React + Vite + TailwindCSS**, deploy lên **GitHub Pages**.

🌐 **Live site:** [hiamderen.github.io/wedding-site](https://hiamderen.github.io/wedding-site)

---

## 📋 Mục lục

- [Tính năng](#-tính-năng)
- [Cài đặt & Chạy local](#-cài-đặt--chạy-local)
- [Deploy lên GitHub Pages](#-deploy-lên-github-pages)
- [Cách tạo thiệp mời cá nhân hóa](#-cách-tạo-thiệp-mời-cá-nhân-hóa)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Tùy chỉnh thông tin](#-tùy-chỉnh-thông-tin)

---

## ✨ Tính năng

| Section | Mô tả |
|---|---|
| 🎆 **Hero** | Ảnh nền lãng mạn, tên cặp đôi, đếm ngược đến ngày cưới |
| 💑 **Câu chuyện** | Timeline tình yêu theo dạng zigzag |
| 📍 **Địa điểm** | Google Maps nhúng, nút chỉ đường |
| 📱 **QR Code** | Mã QR để chia sẻ link website |
| 💌 **Thiệp cưới** | Thiệp cá nhân hóa theo tên khách mời từ URL |

---

## 🚀 Cài đặt & Chạy local

### Yêu cầu
- Node.js >= 18
- npm >= 9

### Các bước

```bash
# 1. Clone repository
git clone https://github.com/hiamderen/wedding-site.git
cd wedding-site

# 2. Cài đặt dependencies
npm install

# 3. Chạy development server
npm run dev
```

Mở trình duyệt tại: **http://localhost:5173**

### Build production

```bash
npm run build      # Build ra thư mục dist/
npm run preview    # Xem trước bản build
```

---

## 🌐 Deploy lên GitHub Pages

### Lần đầu tiên (bắt buộc)

Trước khi deploy được, cần **bật GitHub Pages** một lần duy nhất:

1. Vào **Settings** của repository → chọn **Pages**  
   👉 https://github.com/hiamderen/wedding-site/settings/pages

2. Tại mục **"Build and deployment"**, chọn **Source = GitHub Actions**

3. Bấm **Save**

### Deploy tự động

Sau khi bật GitHub Pages, mỗi lần push lên nhánh `main` sẽ **tự động deploy**:

```bash
git add .
git commit -m "your message"
git push origin main
```

Theo dõi tiến trình tại tab **Actions**:  
👉 https://github.com/hiamderen/wedding-site/actions

---

## 💌 Cách tạo thiệp mời cá nhân hóa

Website hỗ trợ **thiệp cưới cá nhân hóa** theo tên từng khách mời thông qua URL.

### Cú pháp URL

```
https://hiamderen.github.io/wedding-site/?guest=Tên+Khách+Mời
```

### Ví dụ cụ thể

| Khách mời | URL thiệp |
|---|---|
| Nguyễn Văn An | `https://hiamderen.github.io/wedding-site/?guest=Nguyễn+Văn+An` |
| Trần Thị Bình | `https://hiamderen.github.io/wedding-site/?guest=Trần+Thị+Bình` |
| Gia đình chú Hùng | `https://hiamderen.github.io/wedding-site/?guest=Gia+đình+chú+Hùng` |

> 💡 **Mẹo:** Dùng dấu `+` hoặc `%20` để thay cho khoảng trắng trong tên.  
> Tên có dấu tiếng Việt hoàn toàn được hỗ trợ!

### Không có tên trong URL

Nếu truy cập URL không có `?guest=`, thiệp sẽ hiển thị mặc định:

```
Trân trọng kính mời
Quý Khách
đến dự lễ thành hôn của chúng tôi
```

### Cách gửi thiệp cho khách

1. **Tạo URL** với tên khách mời theo cú pháp trên
2. **Gửi link** qua Zalo / Facebook / SMS / Email
3. Khách mở link → cuộn xuống cuối trang → thấy **thiệp cưới có tên của mình**
4. Khách có thể bấm **"Lưu / In Thiệp"** để in hoặc chụp màn hình

### Tạo QR Code riêng cho từng khách (nâng cao)

Bạn có thể tạo QR code cho từng URL thiệp và in vào phong bì:

1. Truy cập [qr-code-generator.com](https://www.qr-code-generator.com/) hoặc [qrcode-monkey.com](https://www.qrcode-monkey.com/)
2. Dán URL thiệp có tên khách vào
3. Tải QR code về và in

---

## 📁 Cấu trúc dự án

```
wedding-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions — tự động deploy
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── Hero.jsx            # Section đầu trang, countdown
│   │   ├── Story.jsx           # Timeline câu chuyện tình yêu
│   │   ├── Location.jsx        # Địa điểm + Google Maps
│   │   ├── QRCode.jsx          # QR Code chia sẻ
│   │   └── Invitation.jsx      # Thiệp cưới cá nhân hóa
│   ├── pages/
│   │   └── Home.jsx            # Trang chính (Navbar + Footer + tất cả sections)
│   ├── App.jsx                 # Router setup
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ Tùy chỉnh thông tin

### Đổi ngày cưới

Mở file `src/components/Hero.jsx`, tìm dòng:

```js
const WEDDING_DATE = new Date('2026-01-01T10:00:00')
```

Thay bằng ngày cưới thực tế, ví dụ:

```js
const WEDDING_DATE = new Date('2026-12-25T17:30:00')
```

### Đổi địa điểm

Mở file `src/components/Location.jsx`, tìm object `EVENT`:

```js
const EVENT = {
  venue: 'Nhà Hàng Tiệc Cưới ABC',
  address: '123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh',
  date: 'Thứ Năm, 01 tháng 01 năm 2026',
  time: '17:30 – 21:00',
  mapsQuery: 'Nhà+Hàng+Tiệc+Cưới,...',
}
```

### Đổi câu chuyện tình yêu

Mở file `src/components/Story.jsx`, chỉnh sửa mảng `milestones`:

```js
const milestones = [
  {
    date: 'Tháng 3, 2020',
    title: 'Lần đầu gặp nhau',
    description: 'Nội dung câu chuyện...',
    icon: '💫',
  },
  // thêm các mốc khác...
]
```

---

## 🛠️ Tech Stack

- **[React 18](https://react.dev/)** — UI framework
- **[Vite 5](https://vitejs.dev/)** — Build tool
- **[TailwindCSS 3](https://tailwindcss.com/)** — Styling
- **[React Router DOM 6](https://reactrouter.com/)** — Routing & query params
- **[qrcode.react](https://github.com/zpao/qrcode.react)** — QR Code generator
- **[Google Fonts](https://fonts.google.com/)** — Playfair Display, Great Vibes, Inter
- **[GitHub Pages](https://pages.github.com/)** — Hosting miễn phí

---

## 📄 License

MIT — Free to use & customize 💕