export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: "f", url: "#" },
    { name: "YouTube", icon: "▶", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "TikTok", icon: "♪", url: "#" },
  ];

  const banners = [
    { id: 1, image: "/footer/footer_bnr1.png", url: "#" },
    { id: 2, image: "/footer/footer_bnr2.png", url: "#" },
    { id: 3, image: "/footer/footer_bnr3.png", url: "#" },
    { id: 4, image: "/footer/footer_bnr4.png", url: "#" },
    { id: 5, image: "/footer/footer_bnr5.png", url: "#" },
    { id: 6, image: "/footer/footer_bnr6.png", url: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#8B0000] to-[#4A0000] text-white">
      {/* Banner Section */}
      <div className="max-w-[1600px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {banners.map((banner) => (
            <a
              key={banner.id}
              href={banner.url}
              className="block aspect-[4/3] bg-gray-800 rounded overflow-hidden hover:opacity-80 transition-opacity shadow-lg hover:shadow-xl ring-2 ring-yellow-600/30"
            >
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-yellow-600/30">
        <div className="max-w-[1600px] mx-auto px-8 py-12">
          {/* Logo */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold font-oswald tracking-[0.2em] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              TRUYỆN TRANH AI
            </h2>
            <p className="text-yellow-200 text-lg tracking-wider">
              Sáng tạo không giới hạn
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label={link.name}
              >
                <span className="text-xl font-bold">{link.icon}</span>
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex justify-center mb-8">
            <a
              href="#contact"
              className="inline-block border-2 border-yellow-500 hover:bg-yellow-500 hover:text-[#8B0000] px-8 py-3 rounded transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="text-sm tracking-wider font-semibold">
                【 LIÊN HỆ 】
              </span>
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <a
              href="#privacy"
              className="text-yellow-200 hover:text-yellow-400 transition-colors"
            >
              Chính sách bảo mật
            </a>
            <a
              href="#cookie"
              className="text-yellow-200 hover:text-yellow-400 transition-colors"
            >
              Chính sách Cookie
            </a>
            <a
              href="#terms"
              className="text-yellow-200 hover:text-yellow-400 transition-colors"
            >
              Điều khoản sử dụng
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-yellow-300 text-sm">
            <p className="tracking-wide">
              © 2024 Truyện Tranh AI - Sản phẩm Việt Nam
            </p>
            <p className="mt-2 text-yellow-400">
              Được phát triển với ❤️ tại Việt Nam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
