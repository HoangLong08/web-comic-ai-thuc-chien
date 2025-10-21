"use client";

import { useState, useEffect } from "react";

interface ComicReaderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComicReader({ isOpen, onClose }: ComicReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const totalPages = 10;

  const comicPages = Array.from(
    { length: totalPages },
    (_, i) => `/comic/page${i + 1}.jpg`
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          prevPage();
          break;
        case "ArrowRight":
          nextPage();
          break;
        case "Escape":
          onClose();
          break;
        case "z":
        case "Z":
          setIsZoomed(!isZoomed);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, currentPage, isZoomed]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      setIsZoomed(false);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      setIsZoomed(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-2 md:p-4 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Page Counter */}
          <div className="bg-gradient-to-r from-[#8B0000] to-yellow-600 px-3 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
            <p className="text-white font-bold text-sm md:text-lg">
              Trang {currentPage + 1} / {totalPages}
            </p>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Zoom Toggle - Hidden on mobile */}
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className={`hidden md:flex w-10 h-10 md:w-12 md:h-12 ${
                isZoomed ? "bg-yellow-600" : "bg-white/20 hover:bg-white/30"
              } text-white rounded-full items-center justify-center transition-all duration-300 shadow-lg`}
              aria-label="Zoom"
              title="Phóng to (Z)"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                />
              </svg>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#8B0000] to-yellow-600 hover:from-yellow-600 hover:to-[#8B0000] text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Đóng"
              title="Đóng (ESC)"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Comic Container */}
      <div className="relative w-full max-w-6xl h-[70vh] md:h-[85vh] mx-2 md:mx-4">
        {/* Comic Page */}
        <div
          className={`w-full h-full flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ${
            isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-300 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center px-4">
                <p className="text-gray-400 text-4xl md:text-6xl mb-4 md:mb-6">
                  📖
                </p>
                <p className="text-gray-400 text-xl md:text-3xl font-bold mb-2 md:mb-4">
                  Trang {currentPage + 1}
                </p>
                <p className="text-gray-500 text-sm md:text-lg">
                  Thêm hình ảnh truyện vào thư mục
                </p>
                <p className="text-gray-600 text-xs md:text-sm mt-2">
                  /public/comic/page{currentPage + 1}.jpg
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons - Desktop */}
        {currentPage > 0 && (
          <button
            onClick={prevPage}
            className="hidden md:flex absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#8B0000] to-yellow-600 hover:from-yellow-600 hover:to-[#8B0000] text-white rounded-full items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Trang trước"
            title="Trang trước (←)"
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
        )}

        {currentPage < totalPages - 1 && (
          <button
            onClick={nextPage}
            className="hidden md:flex absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#8B0000] to-yellow-600 hover:from-yellow-600 hover:to-[#8B0000] text-white rounded-full items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Trang tiếp"
            title="Trang tiếp (→)"
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
        )}

        {/* Mobile Navigation Buttons */}
        <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
          {currentPage > 0 && (
            <button
              onClick={prevPage}
              className="w-14 h-14 bg-gradient-to-r from-[#8B0000] to-yellow-600 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
              aria-label="Trang trước"
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
          )}
          {currentPage < totalPages - 1 && (
            <button
              onClick={nextPage}
              className="w-14 h-14 bg-gradient-to-r from-[#8B0000] to-yellow-600 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
              aria-label="Trang tiếp"
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
          )}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-6 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 md:p-4 shadow-2xl">
            <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-gray-800 pb-2">
              {comicPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(index);
                    setIsZoomed(false);
                  }}
                  className={`flex-shrink-0 w-14 h-16 md:w-20 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentPage === index
                      ? "ring-2 md:ring-4 ring-yellow-500 shadow-xl scale-110"
                      : "opacity-50 hover:opacity-75 hover:scale-105"
                  }`}
                  title={`Trang ${index + 1}`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center">
                    <span className="text-white text-xs font-bold mb-1">
                      {index + 1}
                    </span>
                    <svg
                      className="w-4 h-4 md:w-6 md:h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts Info - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-24 left-6 bg-black/70 backdrop-blur-sm rounded-lg px-5 py-3 shadow-lg">
        <div className="text-gray-300 text-sm space-y-1">
          <p className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">←</kbd>
            <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">→</kbd>
            <span>Chuyển trang</span>
          </p>
          <p className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Z</kbd>
            <span>Phóng to/thu nhỏ</span>
          </p>
          <p className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">ESC</kbd>
            <span>Đóng</span>
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 z-20">
        <div
          className="h-full bg-gradient-to-r from-yellow-600 to-yellow-500 transition-all duration-300"
          style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
        />
      </div>
    </div>
  );
}
