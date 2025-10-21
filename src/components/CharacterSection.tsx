"use client";

import { useState } from "react";

interface Character {
  id: number;
  name: string;
  nameVi: string;
  nameEn: string;
  cv: string;
  description: string;
  image: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: "ABC",
    nameVi: "ABC",
    nameEn: "ABC",
    cv: "Takuya Eguchi",
    description:
      "Điệp viên hàng đầu của Tây Quốc với mật danh 〈Hoàng Hôn〉. Được cử đến Đông Quốc để thực hiện nhiệm vụ, tạo ra một gia đình giả. Đóng vai bác sĩ tâm thần Loid Forger và bắt đầu cuộc sống mới với Anya và Yor.",
    image: "/characters/chara_thumb1.png",
  },
  {
    id: 2,
    name: "DEF",
    nameVi: "DEF",
    nameEn: "DEF",
    cv: "Atsumi Tanezaki",
    description:
      "Cô con gái siêu năng lực của Loid. Được Loid nhận nuôi. Thực ra là người có khả năng đọc suy nghĩ. Cố gắng giúp đỡ nhiệm vụ của Loid.",
    image: "/characters/chara_thumb2.png",
  },
  {
    id: 3,
    name: "Raz",
    nameVi: "Raz",
    nameEn: "Raz",
    cv: "Saori Hayami",
    description:
      "Người vợ giả của Loid, một sát thủ. Làm việc tại văn phòng chính quyền. Thực ra là một sát thủ tài ba. Vì muốn có vẻ bề ngoài bình thường, đã kết hôn giả với Loid.",
    image: "/characters/chara_thumb3.png",
  },
];

export default function CharacterSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="character"
      className="min-h-screen bg-gradient-to-b from-[#8B0000] to-[#4A0000] text-white py-20 px-8"
    >
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-[80px] font-bold text-center mb-20 font-oswald tracking-[0.2em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
          NHÂN VẬT
        </h2>

        {/* Character Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {characters.map((char, index) => (
            <button
              key={char.id}
              onClick={() => setActiveTab(index)}
              className={`relative aspect-[3/4] overflow-hidden transition-all duration-300 rounded-lg ${
                activeTab === index
                  ? "opacity-100 ring-4 ring-yellow-500 shadow-2xl"
                  : "opacity-50 hover:opacity-75"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="text-white text-lg font-bold tracking-wider">
                  {char.nameVi}
                </p>
                <p className="text-yellow-400 text-sm mt-1">{char.nameEn}</p>
              </div>
              <img
                src={char.image}
                alt={char.nameEn}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Character Details */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-full max-w-md aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden relative shadow-2xl ring-2 ring-yellow-600/50">
              <img
                src={characters[activeTab].image}
                alt={characters[activeTab].nameEn}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-5xl font-bold mb-3 tracking-wide text-yellow-400">
                {characters[activeTab].nameVi}
              </h3>
              <p className="text-yellow-200 text-2xl tracking-wider">
                {characters[activeTab].nameEn}
              </p>
            </div>

            {characters[activeTab].cv && (
              <div className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 px-6 py-2 rounded shadow-lg">
                <p className="text-white text-lg font-medium">
                  Lồng tiếng: {characters[activeTab].cv}
                </p>
              </div>
            )}

            <div className="border-l-4 border-yellow-500 pl-8 bg-black/30 p-6 rounded-r-lg">
              <p className="text-white leading-relaxed text-xl tracking-wide whitespace-pre-line">
                {characters[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
