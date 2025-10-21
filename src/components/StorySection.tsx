export default function StorySection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-red-50 to-white" id="story">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-center mb-12 md:mb-16 lg:mb-20 font-oswald tracking-[0.2em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-yellow-600">
          CÂU CHUYỆN
        </h2>

        {/* Story Content */}
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-[#8B0000] leading-relaxed px-4">
              Trong thời đại mà các quốc gia đang bí mật tham gia cuộc chiến
              thông tin khốc liệt.
            </h3>
          </div>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl leading-relaxed text-gray-800 px-4">
            <p>
              Đông Quốc (Ostania) và Tây Quốc (Westalis) đã ở trong tình trạng
              chiến tranh lạnh kéo dài hơn mười năm.
            </p>

            <p>
              Điệp viên hàng đầu của Cục Tình báo Tây Quốc, được biết đến với
              mật danh 〈Hoàng Hôn〉, được giao một nhiệm vụ tối mật để theo dõi
              động thái của Donovan Desmond - nhân vật nguy hiểm đe dọa hòa bình
              Đông-Tây, Chủ tịch Đảng Thống nhất Quốc gia Đông Quốc.
            </p>

            <p className="text-xl md:text-2xl font-bold text-center my-6 md:my-8 text-[#8B0000]">
              Tên của nhiệm vụ là, Chiến dịch 〈Cú Mèo〉.
            </p>

            <p>
              Nội dung nhiệm vụ: &quot;Trong vòng một tuần, hãy lập gia đình và
              xâm nhập vào buổi gặp mặt phụ huynh của trường danh giá mà con
              trai Desmond đang theo học&quot;.
            </p>

            <p className="font-bold">
              〈Hoàng Hôn〉 đóng vai bác sĩ tâm thần Loid Forger và bắt đầu lập
              gia đình.
            </p>

            <p className="font-bold">
              Nhưng cô con gái mà anh gặp - Anya, lại là một siêu năng lực đọc
              được suy nghĩ, và người vợ - Yor, lại là một sát thủ!
            </p>

            <p className="text-center text-lg md:text-xl mt-8 md:mt-12">
              Một bộ phim hài gia đình về gia đình giả tạo che giấu thân phận
              thật,
              <br className="hidden md:block" />
              cùng nhau vượt qua khó khăn trong thi đầu vào, nấu ăn và mua sắm.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center my-12 md:my-16">
            <div className="h-1 w-full max-w-2xl bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
          </div>

          {/* Call to Action */}
          <div className="text-center px-4">
            <button className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-[#8B0000] to-yellow-600 text-white font-bold text-base md:text-lg tracking-wider hover:from-yellow-600 hover:to-[#8B0000] transition-all duration-300 rounded shadow-lg hover:shadow-xl">
              TÌM HIỂU THÊM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}