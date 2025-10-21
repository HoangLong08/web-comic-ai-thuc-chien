"use client";

import { useState } from "react";

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 28;

  const images = Array.from(
    { length: totalSlides },
    (_, i) => `/gallery/image${i + 1}.jpg`
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section
      id="gallery"
      className="min-h-screen bg-gradient-to-b from-white to-red-50 text-gray-800 py-20"
    >
      <div className="max-w-[1600px] mx-auto px-8">
        <h2 className="text-[80px] font-bold text-center mb-20 font-oswald tracking-[0.2em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-yellow-600">
          THƯ VIỆN ẢNH
        </h2>

        <div className="relative">
          {/* Main Image */}
          <div className="aspect-[16/9] bg-gradient-to-br from-red-100 to-yellow-50 rounded-lg overflow-hidden mb-12 relative shadow-2xl">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400 text-3xl">
                Hình ảnh {currentSlide + 1}
              </p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-12 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#8B0000] to-yellow-600 hover:from-yellow-600 hover:to-[#8B0000] text-white w-14 h-14 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Ảnh trước"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-12 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#8B0000] to-yellow-600 hover:from-yellow-600 hover:to-[#8B0000] text-white w-14 h-14 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Ảnh tiếp theo"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-[22px] mt-10">
            {images.map((_, index) => (
              <button
                key={`slide-${index}`}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "bg-yellow-600 w-3 h-3 shadow-lg"
                    : "bg-gray-400 hover:bg-gray-500 w-2.5 h-2.5"
                }`}
                aria-label={`Đến slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
