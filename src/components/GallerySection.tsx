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
      className="min-h-screen bg-gradient-to-b from-white to-red-50 text-gray-800 py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-center mb-12 md:mb-16 lg:mb-20 font-oswald tracking-[0.2em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-yellow-600">
          THƯ VIỆN ẢNH
        </h2>

        <div className="relative">
          {/* Main Image */}
          <div className="aspect-video bg-gradient-to-br from-red-100 to-yellow-50 rounded-lg overflow-hidden mb-8 md:mb-12 relative shadow-2xl">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400 text-xl md:text-2xl lg:text-3xl">
                Hình ảnh {currentSlide + 1}
              </p>
            </div>

            {/* Navigation Buttons - Desktop */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#8B0000] to-yellow-600 hover:from-yellow-600 hover:to-[#8B0000] text-white w-12 h-12 lg:w-14 lg:h-14 rounded-full transition-all duration-300 items-center justify-center shadow-lg hover:scale-110"
              aria-label="Ảnh trước"
            >
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8"
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
              className="hidden md:flex absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#8B0000] to-yellow-600 hover:from-yellow-600 hover:to-[#8B0000] text-white w-12 h-12 lg:w-14 lg:h-14 rounded-full transition-all duration-300 items-center justify-center shadow-lg hover:scale-110"
              aria-label="Ảnh tiếp theo"
            >
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8"
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

            {/* Mobile Navigation Buttons */}
            <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-4">
              <button
                onClick={prevSlide}
                className="bg-gradient-to-r from-[#8B0000] to-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                aria-label="Ảnh trước"
              >
                <svg
                  className="w-6 h-6"
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
                className="bg-gradient-to-r from-[#8B0000] to-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                aria-label="Ảnh tiếp theo"
              >
                <svg
                  className="w-6 h-6"
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
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 md:gap-4 lg:gap-[22px] mt-6 md:mt-8 lg:mt-10 overflow-x-auto pb-2 px-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`flex-shrink-0 transition-all duration-300 rounded-full ${
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
