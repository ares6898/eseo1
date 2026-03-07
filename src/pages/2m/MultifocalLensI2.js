import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const getRoundedRetail = (price) => Math.ceil((price * 2) / 10000) * 10000;

const basicLenses = [
  {
    productName: "C6",
    brandLogo: "/images/chemi-logo.jpg",
    lensImage: "/images/E2.jpg",
    prices: [
      { refraction: "1.50", regular: getRoundedRetail(179000), sale: 179000 },
      { refraction: "1.60", regular: getRoundedRetail(209000), sale: 209000 },
      { refraction: "1.67", regular: getRoundedRetail(279000), sale: 279000 },
      { refraction: "1.74", regular: getRoundedRetail(399000), sale: 399000 }
    ],
    summary: "처음 쓰는 분도 비교적 적응이 편한 추천형",
    badge: "가장 많이 추천",
    highlight: true
  },
  {
    productName: "C1",
    brandLogo: "/images/chemi-logo.jpg",
    lensImage: "/images/c3.jpg",
    prices: [
      { refraction: "1.50", regular: getRoundedRetail(99000), sale: 99000 },
      { refraction: "1.60", regular: getRoundedRetail(129000), sale: 129000 },
      { refraction: "1.67", regular: getRoundedRetail(159000), sale: 159000 },
      { refraction: "1.74", regular: getRoundedRetail(219000), sale: 219000 }
    ],
    summary: "가볍게 시작하는 입문형",
    badge: "가격 부담 낮음",
    highlight: false
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67", "1.74"];

export default function MultifocalLensBasic() {
  const [selectedRef, setSelectedRef] = useState("1.50");
  const [popupImage, setPopupImage] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-100 flex flex-col">
      {/* 상단 헤더 */}
      <div className="px-6 pt-4 pb-2 shrink-0">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl border shadow px-6 py-3 text-center">
          <h1 className="text-2xl font-extrabold text-blue-900 tracking-tight">
            베이직케어 누진다초점
          </h1>
          <p className="mt-1 text-base font-semibold text-gray-700">
            처음 시작하는 입문형과 더 편한 추천형을 비교해보세요
          </p>
        </div>
      </div>

      {/* 중앙 카드 영역 */}
      <div className="flex-1 min-h-0 px-6 pb-24">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-2 gap-6">
          {basicLenses.map((lens, idx) => {
            const priceRow = lens.prices.find((p) => p.refraction === selectedRef);
            const regular = priceRow?.regular ?? null;
            const sale = priceRow?.sale ?? null;

            return (
              <div
                key={idx}
                className={`relative h-full bg-white rounded-3xl border shadow-lg overflow-hidden flex flex-col ${
                  lens.highlight ? "ring-4 ring-emerald-300/80" : ""
                }`}
              >
                {lens.badge && (
                  <div
                    className={`absolute left-6 top-4 z-20 px-4 py-1 rounded-full text-sm font-extrabold shadow border-2 whitespace-nowrap ${
                      lens.highlight
                        ? "bg-emerald-400 text-white border-emerald-600 animate-pulse"
                        : "bg-blue-100 text-blue-900 border-blue-300"
                    }`}
                  >
                    {lens.badge}
                  </div>
                )}

                {/* 상단 정보 */}
                <div className="px-6 pt-16 pb-3 shrink-0">
                  <div className="flex items-center gap-3">
                    {lens.brandLogo && (
                      <img
                        src={lens.brandLogo}
                        alt="브랜드 로고"
                        className="h-12 w-12 object-contain rounded bg-white border p-1"
                      />
                    )}
                    <div>
                      <div className="text-3xl font-extrabold text-blue-900 leading-none">
                        {lens.productName}
                      </div>
                      <div className="mt-2 text-base font-semibold text-gray-700 leading-snug">
                        {lens.summary}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 이미지 */}
                <div className="flex-1 min-h-0 px-6">
                  <div
                    className={`w-full h-full rounded-2xl overflow-hidden border border-gray-200 shadow bg-white ${
                      lens.highlight ? "animate-pulse" : ""
                    }`}
                  >
                    <img
                      src={lens.lensImage}
                      alt="렌즈 시야 예시"
                      className="w-full h-full object-contain cursor-pointer hover:scale-105 transition"
                      onClick={() => setPopupImage(lens.lensImage)}
                    />
                  </div>
                </div>

                {/* 가격 */}
                <div className="px-6 pt-3 pb-5 shrink-0">
                  <div
                    className={`rounded-2xl p-4 shadow text-center ${
                      lens.highlight ? "bg-emerald-50" : "bg-slate-50"
                    }`}
                  >
                    <div className="text-sm font-bold text-gray-700 mb-1">
                      굴절률 <span className="text-blue-800">{selectedRef}</span>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <span className="text-lg text-gray-400 line-through font-bold">
                        {regular ? `${regular.toLocaleString()}원` : "–"}
                      </span>
                      <span className="text-2xl text-gray-400">→</span>
                      <span className="text-3xl font-extrabold text-orange-600">
                        {sale ? `${sale.toLocaleString()}원` : "–"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 하단 고정 바 */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-2xl z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-xl font-bold text-sm bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 shrink-0"
          >
            ← 뒤로가기
          </button>

          {refractiveIndexes.map((idx) => (
            <button
              key={idx}
              className={`px-7 py-2 rounded-xl font-bold text-base shadow border-2 transition-all duration-100 ${
                selectedRef === idx
                  ? "bg-orange-600 text-white border-orange-600 scale-105"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-orange-50"
              }`}
              onClick={() => setSelectedRef(idx)}
            >
              굴절률 {idx}
            </button>
          ))}

          <button
            onClick={() => setSelectedRef("1.50")}
            className="px-5 py-2 rounded-xl font-bold text-base shadow border-2 bg-blue-100 text-gray-700 border-gray-300 hover:bg-gray-200 shrink-0"
          >
            클리어
          </button>
        </div>
      </div>

      {/* 이미지 팝업 */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={() => setPopupImage(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-5 max-w-4xl w-[88vw] max-h-[88vh] flex flex-col items-center relative border-4 border-blue-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 px-4 py-2 rounded-lg font-bold text-lg bg-blue-600 text-white border-2 border-blue-800 shadow hover:bg-white hover:text-blue-700 hover:border-blue-800 transition"
              onClick={() => setPopupImage(null)}
            >
              닫기
            </button>
            <img
              src={popupImage}
              alt="시야표 확대"
              className="w-full h-auto max-h-[72vh] object-contain rounded-lg"
            />
            <div className="font-bold text-blue-900 text-base mt-3">
              시야 예시 (확대 보기)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
