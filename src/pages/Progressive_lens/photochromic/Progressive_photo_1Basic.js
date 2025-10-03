import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const getRoundedRetail = (price) => Math.ceil((price * 2) / 10000) * 10000;

const basicLenses = [
  {
    productName: "C1",
    brandLogo: "/images/chemi-logo.jpg",
    lensImage: "/images/C1.jpg",
    prices: [
      
      { refraction: "1.60", regular: 300000, sale: 149000 },
      { refraction: "1.67", regular: 400000, sale: 199000 }
      
    ],
    recommend: ["기본을 갖춘 실속형"],
    features: ["부담 없는 가격", "입문용 누진다초점렌즈"],
    options: ["블루라이트 기본"]
  },
  {
    productName: "C5 (C3 리뉴얼업)",
    brandLogo: "/images/chemi-logo.jpg",
    lensImage: "/images/c3.jpg",
    prices: [
      
      { refraction: "1.60", regular: 400000, sale: 199000 },
      { refraction: "1.67", regular: 520000, sale: 259000 }
      
    ],
    recommend: ["소프트설계로 비교적 부드러움"],
    features: ["실속형 기준 적응도 높음", "기본 소프트설계"],
    options: ["블루라이트 기본"]
  },
  {
    productName: "C6 (C4 리뉴얼업)",
    brandLogo: "/images/chemi-logo.jpg",
    lensImage: "/images/c6.jpg",
    prices: [
      
      { refraction: "1.60", regular: 520000, sale: 259000 },
      { refraction: "1.67", regular: 710000, sale: 355000 },
      
    ],
    recommend: ["실속형렌즈에서 가장 적응쉬움"],
    features: ["대중적인 설계", "수차제어 소프트설계"],
    options: ["블루라이트 기본"]
  }
];

const refractiveIndexes = ["1.60", "1.67"];

export default function MultifocalLensBasic() {
  // ✅ 기본 선택을 1.50으로
  const [selectedRef, setSelectedRef] = useState("1.60");
  const navigate = useNavigate();
  const [popupImage, setPopupImage] = useState(null);  // 팝업 이미지 상태

  return (
    <div className="relative min-h-screen pb-36 bg-gray-50">
      <div className="max-w-5xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {[...basicLenses].reverse().map((lens, idx) => {
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
                  전문가 추천
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
                  className="w-full h-full object-contain cursor-pointer hover:scale-105 transition"
                  onClick={() => setPopupImage(lens.lensImage)}
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
                  굴절률 <span className="text-blue-800">{selectedRef || "-"}</span> 
                </div>
              </div>

              <div className="bg-blue-50 rounded p-3 text-xs text-blue-900 flex flex-col gap-1 shadow">
                <div className="font-bold mb-1 text-blue-800">옵션/추가 안내</div>
                {lens.options.map((opt, i) => <div key={i}>- {opt}</div>)}
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl border-t z-30 flex justify-center items-center gap-2 py-4">
        {refractiveIndexes.map((idx) => (
          <div key={idx} className="flex items-center gap-2">
            {idx === "1.60" && (
              <button
                onClick={() => navigate(-1)}
                className="px-5 py-3 rounded-xl font-semibold text-sm bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
              >
                ← 뒤로가기
              </button>
            )}
            <button
              className={`px-8 py-3 rounded-xl font-bold text-lg shadow border-2 transition-all duration-100 ${
                selectedRef === idx
                  ? "bg-orange-600 text-white border-orange-600 scale-110"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-orange-50"
              }`}
              onClick={() => setSelectedRef(selectedRef === idx ? "" : idx)}
            >
              굴절률 {idx}
            </button>
          </div>
        ))}
        <button
            className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-purple-300 text-gray-700 border-gray-300 hover:bg-gray-200"
          >
          변색
        </button>
      </div>

      {/* 팝업은 화면 전체의 마지막에! */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={() => setPopupImage(null)} // 바깥 영역 클릭시 팝업 닫힘
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-5 max-w-lg w-[90vw] max-h-[85vh] flex flex-col items-center relative border-4 border-blue-500"
            onClick={e => e.stopPropagation()} // 카드 내부 클릭은 닫힘 막기
          >
            <button
              className="absolute top-3 right-4 px-4 py-2 rounded-lg font-bold text-lg bg-blue-600 text-white border-2 border-blue-800 shadow hover:bg-white hover:text-blue-700 hover:border-blue-800 transition"
              onClick={() => setPopupImage(null)}
              style={{ zIndex: 10 }}
            >
              닫기
            </button>
            <img
              src={popupImage}
              alt="시야표 확대"
              className="w-full h-auto max-h-[60vh] object-contain rounded-lg mb-3"
            />
            <div className="font-bold text-blue-900 text-base mt-2">시야 예시 (확대 보기)</div>
          </div>
        </div>
      )}
    </div>
  );
}
