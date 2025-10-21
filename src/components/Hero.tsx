"use client";

export default function Hero() {
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
        </div>

        {/* Important Notice Banner */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-5 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm md:text-base tracking-wider font-medium">
              ⚠ THÔNG BÁO: Tập 40 sẽ phát sóng muộn hơn 15 phút vào lúc 23:15 -
              23:45 ngày 11/10 (Thứ Bảy)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
