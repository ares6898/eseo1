import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const refractiveIndexes = ["1.50", "1.60", "1.67", "1.74"];

const lensTypes = [
  {
    type: "실속형",
    name: "이노티 X 케미렌즈 PB",
    color: "bg-gray-100 text-gray-700 border-gray-200",
    path: "/Progressive_photo_1Basic",
    priceTable: {
      "1.50": "149,000원 ~ 259,000원",
      "1.60": "149,000원 ~ 259,000원",
      "1.67": "199,000원 ~ 355,000원",
	  "1.74": "-"
    },
    viewImage: "/images/C1.jpg"
  },
  {
    type: "보급형",
    name: "펜탁스 다초점렌즈",
    color: "bg-blue-50 text-blue-800 border-blue-200",
    path: "/Progressive_photo_2P",
    priceTable: {
      "1.50": "185,000원 ~ 345,000원",
      "1.60": "215,000원 ~ 385,000원",
      "1.67": "250,000원 ~ 435,000원",
      "1.74": "-"
    },
    viewImage: "/images/E3.jpg"
  },
  {
    type: "고급형",
    name: "호야 다초점렌즈",
    color: "bg-blue-900 text-white ring-2 ring-yellow-300 shadow-2xl border-blue-900",
    badge: "🌟 베스트 추천",
    path: "/Progressive_photo_3Advanced",
    priceTable: {
      "1.50": "301,000원 ~ 490,000원",
      "1.60": "371,000원 ~ 560,000원",
      "1.67": "441,000원 ~ 630,000원",
      "1.74": "-"
    },
    viewImage: "/images/DP.jpg"
  },
  {
    type: "프리미엄",
    name: "호야, 니콘, 바리락스",
    color: "bg-gray-900 text-yellow-100 border-yellow-200",
    path: "/Progressive_photo_4Supreme",
    priceTable: {
      "1.50": "525,000원 ~ 750,000원",
      "1.60": "595,000원 ~ 850,000원",
      "1.67": "665,000원 ~ 950,000원",
      "1.74": "1,085,000원 ~ 1,150,000원"
    },
    viewImage: "/images/F.jpg"
  }
];

export default function Progressive_photo_S() {
  const navigate = useNavigate();
  const [selectedRef, setSelectedRef] = useState("1.50");

  const discountLabel = (type) => {
    if (type === "실속형" || type === "보급형") return "50% 할인";
    if (type === "고급형") return "20%~30% 할인";
    if (type === "프리미엄") return "-";
    return "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center pb-32">
      <h2 className="text-3xl font-bold mb-10 text-blue-900">변색 다초점렌즈 한눈에 비교</h2>

      <div className="flex gap-6 mb-10 flex-wrap justify-center">
        {lensTypes.map((item) => {
          const displayPrice = item.priceTable[selectedRef] || "-";

          return (
            <button
              key={item.type}
              className={
                "w-[250px] h-[520px] rounded-2xl shadow-lg border-2 flex flex-col items-center justify-start p-5 transition hover:scale-105 duration-200 relative " +
                item.color +
                (item.type === "고급형" ? " animate-pulse" : "")
              }
              onClick={() => navigate(item.path)}
              style={item.type === "고급형" ? { zIndex: 10 } : {}}
            >
              {item.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-blue-900 text-sm font-bold px-3 py-1 rounded-full shadow ring-2 ring-blue-900 z-10">
                  {item.badge}
                </span>
              )}
              <div className="text-xl font-extrabold mb-1">{item.type}</div>
              <div className="text-lg font-semibold mb-1">{item.name}</div>
              <div className="text-lg font-bold mb-2">{discountLabel(item.type)}</div>

              {/* 시야표 이미지 */}
              <div className="w-full overflow-hidden rounded shadow" style={{ height: "200px" }}>
                <img
                  src={item.viewImage}
                  alt="시야 예시"
                  className="object-contain w-full h-full"
                />
              </div>

              {/* 실제 구매가 문구 */}
              <div className="bg-white text-gray-800 text-base font-semibold px-3 py-1 rounded mt-2 shadow">
                실제 구매가
              </div>

              {/* 할인 강조 박스 */}
              <div className="bg-red-500 text-white rounded-xl px-4 py-2 mt-2 text-lg font-bold shadow-md whitespace-nowrap">
                {displayPrice}
              </div>
            </button>
          );
        })}
      </div>

      {/* 하단 굴절률 선택 바 */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner flex justify-center gap-4 py-5 z-30">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-xl font-bold text-xl shadow border-2 bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
        >
          ← 뒤로가기
        </button>

        {refractiveIndexes.map((idx) => (
          <button
            key={idx}
            className={
              "px-7 py-3 rounded-xl font-bold text-xl shadow border-2 transition " +
              (selectedRef === idx
                ? "bg-blue-900 text-white border-blue-900 scale-105"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-50")
            }
            onClick={() => setSelectedRef(idx)}
          >
            굴절률 {idx}
          </button>
        ))}
		<button
         
            className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-purple-300 text-gray-700 border-gray-300 hover:bg-gray-200"
          >
            변색
          </button>
      </div>
    </div>
  );
}
