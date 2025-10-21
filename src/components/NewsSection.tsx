export default function NewsSection() {
  const newsItems = [
    {
      date: "15.10.2024",
      category: "PHIM BỘ",
      title: "Tập 40 'Chiến lược sinh tồn của Bond' - Tóm tắt và ảnh trước",
    },
    {
      date: "08.10.2024",
      category: "PHIM BỘ",
      title: "Tập 39 'Cuộc phiêu lưu của thủ lĩnh mới' - Tóm tắt và ảnh trước",
    },
    {
      date: "01.10.2024",
      category: "PHIM BỘ",
      title:
        "Tập 38 'Ngày nghỉ của Fiona / Khủng hoảng vào lúc hiểm nghèo' - Tóm tắt và ảnh trước",
    },
    {
      date: "24.09.2024",
      category: "SẢN PHẨM",
      title: "Thông tin sản phẩm mới đã được công bố",
    },
    {
      date: "17.09.2024",
      category: "HỢP TÁC",
      title: "Xác nhận tổ chức sự kiện hợp tác",
    },
  ];

  return (
    <section
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-red-50"
      id="news"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-center mb-12 md:mb-16 lg:mb-20 font-oswald tracking-[0.2em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-yellow-600">
          TIN TỨC
        </h2>

        {/* News List */}
        <div className="space-y-1">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white border-b border-red-100 hover:bg-red-50 transition-colors cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 py-4 md:py-6 px-4 md:px-6">
                <time className="text-sm md:text-base text-[#8B0000] font-medium md:min-w-[120px]">
                  {item.date}
                </time>
                <span className="inline-block px-3 md:px-4 py-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-xs font-bold tracking-wider uppercase self-start rounded">
                  {item.category}
                </span>
                <h3 className="text-base md:text-lg lg:text-xl text-gray-800 flex-1 font-medium leading-snug">
                  {item.title}
                </h3>
                <svg
                  className="hidden md:block w-6 h-6 text-[#8B0000] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <button className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 border-2 border-[#8B0000] text-[#8B0000] font-bold text-base md:text-lg tracking-wider hover:bg-[#8B0000] hover:text-white transition-all duration-300 rounded shadow-lg hover:shadow-xl">
            XEM THÊM
          </button>
        </div>
      </div>
    </section>
  );
}
