"use client";

import { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const tvSeriesMenu = [
    "TRANG CHỦ",
    "TIN TỨC",
    "SỰ KIỆN",
    "ĐANG CHIẾU",
    "GIỚI THIỆU",
    "CÂU CHUYỆN",
    "TẬP PHIM",
    "EKIP & DIỄN VIÊN",
    "NHÂN VẬT",
    "TRAILER",
    "THƯ VIỆN ẢNH",
    "ÂM NHẠC",
    "Blu-ray & DVD",
    "ĐẶC BIỆT",
    "PODCAST",
  ];

  const portalMenu = [
    "TRANG CHỦ",
    "PHIM ĐIỆN ẢNH",
    "PHIM BỘ",
    "TIN TỨC",
    "SẢN PHẨM",
    "HỢP TÁC",
    "TRUYỆN TRANH",
    "Facebook",
    "Zalo",
    "Instagram",
    "TikTok",
  ];

  return (
    <header className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#8B0000] to-[#4A0000] text-white z-50 flex flex-col shadow-2xl">
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Logo Section */}
        <div className="p-6 border-b border-yellow-600/30">
          <h1 className="text-2xl font-bold tracking-wider text-yellow-400">
            TRUYỆN TRANH AI
          </h1>
          <p className="text-sm mt-2 tracking-widest text-yellow-200">
            Sáng tạo không giới hạn
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6">
          {/* TV Series Section */}
          <div className="mb-6">
            <button
              onClick={() => setActiveMenu(activeMenu === "tv" ? null : "tv")}
              className="w-full px-6 py-3 text-left hover:bg-yellow-600/20 transition-colors text-sm tracking-widest font-semibold border-l-4 border-transparent hover:border-yellow-500"
            >
              MENU PHIM BỘ
            </button>
            {activeMenu === "tv" && (
              <div className="mt-2 space-y-1 bg-black/20">
                {tvSeriesMenu.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item
                      .toLowerCase()
                      .replace(/&/g, "-")
                      .replace(/ /g, "-")}`}
                    className="block px-8 py-2 text-xs hover:bg-yellow-600/30 transition-colors tracking-wider text-yellow-100 hover:text-yellow-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Portal Menu Section */}
          <div>
            <button
              onClick={() =>
                setActiveMenu(activeMenu === "portal" ? null : "portal")
              }
              className="w-full px-6 py-3 text-left hover:bg-yellow-600/20 transition-colors text-sm tracking-widest font-semibold border-l-4 border-transparent hover:border-yellow-500"
            >
              MENU CỔNG THÔNG TIN
            </button>
            {activeMenu === "portal" && (
              <div className="mt-2 space-y-1 bg-black/20">
                {portalMenu.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-8 py-2 text-xs hover:bg-yellow-600/30 transition-colors tracking-wider text-yellow-100 hover:text-yellow-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Footer Section */}
        <div className="p-6 border-t border-yellow-600/30 bg-black/20">
          <div className="text-xs text-yellow-200 space-y-2">
            <p>© 2024 Truyện Tranh AI</p>
            <p className="text-yellow-400">Sản phẩm Việt Nam</p>
          </div>
        </div>
      </div>
    </header>
  );
}
