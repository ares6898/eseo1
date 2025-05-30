import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const getRoundedRetail = (price) => Math.ceil((price * 2) / 10000) * 10000;

const basicLenses = [
  {
    productName: "ASIO",
    lensImage: "/images/ASIO.jpg",
    prices: [
      { refraction: "1.50", regular: getRoundedRetail(79000), sale: 79000 },
      { refraction: "1.60", regular: getRoundedRetail(119000), sale: 119000 },
      { refraction: "1.67", regular: getRoundedRetail(149000), sale: 149000 }
    ],
    recommend: ["가격중시형 누진다초점"],
    features: ["최저가 누진다초점", "근용안경 대용으로 추천"],
    options: ["기본코팅, 블루라이트 불가", "착색 옵션 2만원", "변색 옵션 10만원 (1.60,1.67만 가능)"]
  },
  {
    productName: "C1",
    brandLogo: "/images/chemi-logo.jpg",
    lensImage: "/images/C1.jpg",
    prices: [
      { refraction: "1.50", regular: getRoundedRetail(99000), sale: 99000 },
      { refraction: "1.60", regular: getRoundedRetail(129000), sale: 129000 },
      { refraction: "1.67", regular: getRoundedRetail(159000), sale: 159000 },
      { refraction: "1.74", regular: getRoundedRetail(219000), sale: 219000 }
    ],
    recommend: ["기본을 갖춘 실속형"],
    features: ["부담 없는 가격", "입문용 누진다초점렌즈"],
    options: ["블루라이트 기본", "착색 옵션 2만원", "변색 옵션 10만원 (1.60,1.67만 가능)"]
  },
  {
    productName: "C3",
    brandLogo: "/images/chemi-logo.jpg",
    lensImage: "/images/c3.jpg",
    prices: [
      { refraction: "1.50", regular: getRoundedRetail(129000), sale: 129000 },
      { refraction: "1.60", regular: getRoundedRetail(159000), sale: 159000 },
      { refraction: "1.67", regular: getRoundedRetail(199000), sale: 199000 },
      { refraction: "1.74", regular: getRoundedRetail(259000), sale: 259000 }
    ],
    recommend: ["소프트설계로 비교적 부드러움"],
    features: ["실속형 기준 적응도 높음", "기본 소프트설계"],
    options: ["블루라이트 기본", "착색 옵션 2만원", "변색 옵션 10만원 (1.60,1.67만 가능)"]
  },
  {
    productName: "C6",
    brandLogo: "/images/chemi-logo.jpg",
    lensImage: "/images/c6.jpg",
    prices: [
      { refraction: "1.50", regular: getRoundedRetail(179000), sale: 179000 },
      { refraction: "1.60", regular: getRoundedRetail(209000), sale: 209000 },
      { refraction: "1.67", regular: getRoundedRetail(279000), sale: 279000 },
      { refraction: "1.74", regular: getRoundedRetail(399000), sale: 399000 }
    ],
    recommend: ["실속형렌즈에서 가장 적응쉬움"],
    features: ["대중적인 설계", "수차제어 소프트설계"],
    options: ["블루라이트 기본", "착색 옵션 2만원", "변색 옵션 10만원 (1.60,1.67만 가능)"]
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67", "1.74"];

export default function MultifocalLensBasic() {
  const [selectedRef, setSelectedRef] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pb-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {basicLenses.map((lens, idx) => {
          const priceRow = selectedRef ? lens.prices.find(p => p.refraction === selectedRef) : null;
          const regular = priceRow ? priceRow.regular : null;
          const sale = priceRow ? priceRow.sale : null;
          const discountAmount = priceRow ? regular - sale : null;

          const isC1 = lens.productName === "C1";

          return (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-5 flex flex-col gap-4 border shadow hover:shadow-2xl transition ${isC1 ? 'ring-4 ring-emerald-300/80' : ''}`}
              style={{ zIndex: isC1 ? 5 : 1 }}
            >
              {isC1 && (
                <div className="absolute left-6 -top-4 bg-emerald-400 text-white font-extrabold px-5 py-1 rounded-full shadow-xl text-sm tracking-wide border-2 border-emerald-600 animate-bounce whitespace-nowrap z-20">
                  실속형 고객 선택 1위
                </div>
              )}

              <div className="flex items-center gap-2 mb-1 flex-nowrap">
                {lens.brandLogo && (
                  <img
                    src={lens.brandLogo}
                    alt="브랜드 로고"
                    className="h-10 w-10 object-contain rounded bg-white border p-1"
                  />
                )}
                <div className="flex flex-col">
                  <div className="text-lg font-bold text-blue-900 whitespace-nowrap">{lens.productName}</div>
                  <ul className="mt-2 text-gray-600 text-xs list-disc ml-4 space-y-1">
                    {lens.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 rounded-md px-3 py-2 text-[14px] leading-snug text-green-900 font-semibold shadow mb-1 flex flex-col gap-1">
                <div className="mb-1 font-bold text-green-800">제품 설명</div>
                {lens.recommend.map((r, i) => (
                  <div key={i}>⏩ {r}</div>
                ))}
              </div>

              <div className={`w-full aspect-[3/2] rounded-md overflow-hidden shadow border border-gray-200 my-1 ${isC1 ? "animate-pulse" : ""}`}>
                <img
                  src={lens.lensImage}
                  alt="렌즈 시야 예시"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className={`bg-gray-50 rounded-lg p-4 mb-1 shadow flex flex-col items-center ${isC1 ? "animate-pulse" : ""}`}>
                
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <span className={`mr-1 whitespace-nowrap ${regular ? "line-through text-gray-400 text-base" : "text-gray-300 text-base"}`} style={{ fontSize: "15px" }}>
                    {selectedRef ? (regular ? `${regular.toLocaleString()}원` : "–") : "–"}
                  </span>
                  <span className="text-2xl text-gray-400 mx-1 whitespace-nowrap">→</span>
                  <span className={`whitespace-nowrap ${sale ? "font-extrabold text-orange-600 text-xl" : "text-gray-300 text-xl"}`} style={{ fontSize: "20px" }}>
                    {selectedRef ? (sale ? `${sale.toLocaleString()}원` : "–") : "–"}
                  </span>
                </div>
                <div className="mt-2 text-xs text-blue-700 font-bold text-center">
                  {selectedRef && discountAmount !== null ? `할인 금액: ${discountAmount.toLocaleString()}원` : "–"}
                </div>
				<div className="font-bold text-base text-gray-800 mb-2">
                  굴절률 <span className="text-blue-800">{selectedRef || "-"}</span> 가격
                </div>
              </div>

              <div className="bg-blue-50 rounded p-3 text-xs text-blue-900 flex flex-col gap-1 shadow">
                <div className="font-bold mb-1 text-blue-800">옵션/추가 안내</div>
                {lens.options.map((opt, i) => (
                  <div key={i}>- {opt}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl border-t z-30 flex justify-center items-center gap-2 py-4">
  {refractiveIndexes.map((idx) => (
    <div key={idx} className="flex items-center gap-2">
      {idx === "1.50" && (
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-3 rounded-xl font-semibold text-sm bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
        >
          ← 뒤로가기
        </button>
      )}
      <button
        className={`px-8 py-3 rounded-xl font-bold text-lg shadow border-2 transition-all duration-100 ${selectedRef === idx ? "bg-orange-600 text-white border-orange-600 scale-110" : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-orange-50"}`}
        onClick={() => setSelectedRef(selectedRef === idx ? "" : idx)}
      >
        굴절률 {idx}
      </button>
    </div>
  ))}
</div>
</div>
  );
}
