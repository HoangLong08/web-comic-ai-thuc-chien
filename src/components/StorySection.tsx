export default function StorySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white" id="story">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Section Header */}
        <h2 className="text-[80px] font-bold text-center mb-20 font-oswald tracking-[0.2em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-yellow-600">
          CÂU CHUYỆN
        </h2>

        {/* Story Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#8B0000] leading-relaxed">
              Trong thời đại mà các quốc gia đang bí mật tham gia cuộc chiến thông tin khốc liệt.
            </h3>
          </div>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800">
            <p>
              Đông Quốc (Ostania) và Tây Quốc (Westalis) đã ở trong tình trạng chiến tranh lạnh kéo dài hơn mười năm.
            </p>

            <p>
              Điệp viên hàng đầu của Cục Tình báo Tây Quốc, được biết đến với mật danh 〈Hoàng Hôn〉,
              được giao một nhiệm vụ tối mật để theo dõi động thái của Donovan Desmond - nhân vật nguy hiểm đe dọa hòa bình Đông-Tây,
              Chủ tịch Đảng Thống nhất Quốc gia Đông Quốc.
            </p>

            <p className="text-2xl font-bold text-center my-8 text-[#8B0000]">
              Tên của nhiệm vụ là, Chiến dịch 〈Cú Mèo〉.
            </p>

            <p>
              Nội dung nhiệm vụ: "Trong vòng một tuần, hãy lập gia đình và xâm nhập vào buổi gặp mặt phụ huynh của trường danh giá mà con trai Desmond đang theo học".
            </p>

            <p className="font-bold">
              〈Hoàng Hôn〉 đóng vai bác sĩ tâm thần Loid Forger và bắt đầu lập gia đình.
            </p>

            <p className="font-bold">
              Nhưng cô con gái mà anh gặp - Anya, lại là một siêu năng lực đọc được suy nghĩ,
              và người vợ - Yor, lại là một sát thủ!
            </p>

            <p className="text-center text-xl mt-12">
              Một bộ phim hài gia đình về gia đình giả tạo che giấu thân phận thật,
              <br />
              cùng nhau vượt qua khó khăn trong thi đầu vào, nấu ăn và mua sắm.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center my-16">
            <div className="h-1 w-full max-w-2xl bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="px-12 py-4 bg-gradient-to-r from-[#8B0000] to-yellow-600 text-white font-bold text-lg tracking-wider hover:from-yellow-600 hover:to-[#8B0000] transition-all duration-300 rounded shadow-lg hover:shadow-xl">
              TÌM HIỂU THÊM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}