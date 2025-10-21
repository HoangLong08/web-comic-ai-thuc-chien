"use client";

import { useState } from "react";
import ComicReader from "./ComicReader";

export default function Hero() {
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/hero/hero-main-20f678.png",
      title: "Mùa 3",
      subtitle: "Phát sóng từ 23:00 thứ Bảy hàng tuần",
      description: "Mùa 1 & Mùa 2 đang có trên các nền tảng phát trực tuyến",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-gradient-to-b from-[#8B0000] to-black">
        <div className="max-w-[1920px] mx-auto">
          {/* Hero Main Visual */}
          <div className="relative w-full">
            {/* Hero Background Image */}
            <img
              src={slides[0].image}
              alt="Truyện Tranh AI Mùa 3"
              className="w-full h-auto"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/80 via-[#8B0000]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#8B0000] to-transparent"></div>

            {/* CTA Buttons Overlay */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-6 z-10">
              <button
                onClick={() => setIsReaderOpen(true)}
                className="group relative px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold text-lg tracking-wider rounded-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  ĐỌC TRUYỆN NGAY
                </span>
              </button>

              <a
                href="#story"
                className="px-10 py-4 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-[#8B0000] font-bold text-lg tracking-wider rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                TÌM HIỂU THÊM
              </a>
            </div>
          </div>

          {/* Important Notice Banner */}
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-5 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-sm md:text-base tracking-wider font-medium">
                ⚠ THÔNG BÁO: Tập 40 sẽ phát sóng muộn hơn 15 phút vào lúc 23:15
                - 23:45 ngày 11/10 (Thứ Bảy)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comic Reader Modal */}
      <ComicReader
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
      />
    </>
  );
}
