import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const refractiveIndexes = ["1.50", "1.60", "1.67", "1.74"];

const lensTypes = [
  {
    type: "실속형",
    name: "에실로 이지핏",
    logo: "/logos/essilor.png",
    color: "bg-gray-100 text-gray-700 border-gray-200",
    path: "/multifocal-lens/basic",
    priceTable: {
      "1.50": "99,000~179,000",
      "1.60": "129,000~209,000",
      "1.67": "150,000",
      "1.74": "200,000"
    },
  },
  {
    type: "보급형",
    name: "바리락스 리버티",
    logo: "/logos/varilux.png",
    color: "bg-blue-50 text-blue-800 border-blue-200",
    path: "/multifocal-lens/standard",
    priceTable: {
      "1.50": "110,000",
      "1.60": "135,000",
      "1.67": "160,000",
      "1.74": "210,000"
    },
  },
  {
    type: "고급형",
    name: "호야 뉴럭스",
    logo: "/logos/hoya.png",
    color: "bg-blue-900 text-white ring-2 ring-yellow-300 shadow-2xl border-blue-900",
    badge: "🌟 베스트 추천",
    path: "/multifocal-lens/advanced",
    priceTable: {
      "1.50": "160,000",
      "1.60": "180,000",
      "1.67": "210,000",
      "1.74": "250,000"
    },
  },
  {
    type: "프리미엄",
    name: "바리락스 X 퍼포먼스",
    logo: "/logos/varilux-x.png",
    color: "bg-gray-900 text-yellow-100 border-yellow-200",
    path: "/multifocal-lens/supreme",
    priceTable: {
      "1.50": "200,000",
      "1.60": "250,000",
      "1.67": "300,000",
      "1.74": "400,000"
    },
  },
];

export default function MultifocalLensPage() {
  const navigate = useNavigate();
  const [selectedRef, setSelectedRef] = useState("1.50");

  const discountLabel = (type) => {
    if (type === "실속형" || type === "보급형") return "50% 할인";
    if (type === "고급형") return "10+10% 할인";
    if (type === "프리미엄") return "10% 할인";
    return "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center pb-32">
      <h2 className="text-2xl font-bold mb-8 text-blue-900">다초점렌즈 한눈에 비교</h2>
      <div className="flex gap-6 mb-10">
        {lensTypes.map((item) => {
          const displayPrice = item.priceTable[selectedRef] || "-";
          return (
            <button
              key={item.type}
              className={
                "w-56 h-72 rounded-2xl shadow-lg border-2 flex flex-col items-center justify-center p-5 transition hover:scale-105 duration-200 relative " +
                item.color +
                (item.type === "고급형" ? " animate-pulse" : "")
              }
              onClick={() => navigate(item.path)}
              style={item.type === "고급형" ? { zIndex: 10 } : {}}
            >
              {item.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow ring-2 ring-blue-900 z-10">
                  {item.badge}
                </span>
              )}
              <div className="w-16 h-16 flex items-center justify-center mb-3 mt-2">
                {item.logo ? (
                  <img src={item.logo} alt={item.name + " 로고"} className="object-contain h-16" />
                ) : (
                  <div className="w-16 h-16 bg-gray-200 rounded-full" />
                )}
              </div>
              <div className="text-lg font-extrabold mb-1">{item.type}</div>
              <div className="text-base font-semibold mb-1">{item.name}</div>
              <div className="text-md font-bold mb-1">{discountLabel(item.type)}</div>
              <div className="text-xl font-bold mt-2">실구매가 {displayPrice}원</div>
            </button>
          );
        })}
      </div>
      {/* 하단 굴절률 선택 바 */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner flex justify-center gap-4 py-5 z-30">
        {refractiveIndexes.map((idx) => (
          <button
            key={idx}
            className={
              "px-7 py-3 rounded-xl font-semibold text-lg shadow border-2 transition " +
              (selectedRef === idx
                ? "bg-blue-900 text-white border-blue-900 scale-105"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-50")
            }
            onClick={() => setSelectedRef(idx)}
          >
            굴절률 {idx}
          </button>
        ))}
      </div>
    </div>
  );
}
