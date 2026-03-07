import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const getRoundedRetail = (price) => Math.ceil((price * 2) / 10000) * 10000;

const basicLenses = [
  {
    productName: "C6 (추천)",
    brandLogo: "/images/chemi-logo.jpg",
    lensImage: "/images/E2.jpg",
    prices: [
      { refraction: "1.50", regular: getRoundedRetail(179000), sale: 179000 },
      { refraction: "1.60", regular: getRoundedRetail(209000), sale: 209000 },
      { refraction: "1.67", regular: getRoundedRetail(279000), sale: 279000 },
      { refraction: "1.74", regular: getRoundedRetail(399000), sale: 399000 }
    ],
    recommend: ["처음 쓰는 분도 비교적 적응이 편한 추천형"],
    features: ["실속형 중 추천도 높음", "수차제어 소프트설계"],
    options: ["블루라이트 기본", "베이직케어 추천모델"],
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
    recommend: ["가격 부담을 줄인 입문형"],
    features: ["부담 없는 가격", "입문용 누진다초점"],
    options: ["블루라이트 기본"],
    highlight: false
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67", "1.74"];

export default function MultifocalLensBasic() {
  const [selectedRef, setSelectedRef] = useState("1.50");
  const [popupImage, setPopupImage] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pb-36 bg-gray-50">
      {/* 상단 안내문구 */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="bg-white rounded-2xl shadow border px-6 py-5 text-center">
          <h1 className="text-2xl font-extrabold text-blue-900">
            베이직케어 누진다초점
          </h1>
          <p className="mt-2 text-base text-gray-700 font-semibold">
            가격을 우선할지, 처음부터 더 편한 적응형을 선택할지 비교해보세요
          </p>
        </div>
      </div>

      {/* 카드 영역 */}
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {basicLenses.map((lens, idx) => {
          const priceRow = lens.prices.find((p) => p.refraction === selectedRef);
          const regular = priceRow?.regular ?? null;
          const sale = priceRow?.sale ?? null;
          const discountAmount = regular !== null && sale !== null ? regular - sale : null;

          return (
            <div
              key={idx}
              className={`relative bg-white rounded-3xl p-6 flex flex-col gap-4 border shadow-lg transition hover:shadow-2xl ${
                lens.highlight ? "ring-4 ring-emerald-300/80 scale-[1.02]" : ""
              }`}
            >
              {lens.highlight && (
                <div className="absolute left-6 -top-4 bg-emerald-400 text-white font-extrabold px-5 py-1 rounded-full shadow-xl text-sm tracking-wide border-2 border-emerald-600 whitespace-nowrap z-20 animate-pulse">
                  가장 많이 추천
                </div>
              )}

              <div className="flex items-start gap-3">
                {lens.brandLogo && (
                  <img
                    src={lens.brandLogo}
                    alt="브랜드 로고"
                    className="h-12 w-12 object-contain rounded bg-white border p-1"
                  />
                )}
                <div className="flex-1">
                  <div className="text-2xl font-extrabold text-blue-900 whitespace-nowrap">
                    {lens.productName}
                  </div>
                  <ul className="mt-3 text-gray-700 text-sm list-disc ml-5 space-y-1">
                    {lens.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className={`rounded-xl px-4 py-3 text-[15px] leading-snug font-semibold shadow ${
                  lens.highlight
                    ? "bg-emerald-50 text-emerald-900"
                    : "bg-blue-50 text-blue-900"
                }`}
              >
                <div className="mb-1 font-bold">
                  {lens.highlight ? "추천 포인트" : "제품 설명"}
                </div>
                {lens.recommend.map((r, i) => (
                  <div key={i}>⏩ {r}</div>
                ))}
              </div>

              <div
                className={`w-full aspect-[3/2] rounded-xl overflow-hidden shadow border border-gray-200 ${
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

              <div
                className={`rounded-2xl p-5 shadow flex flex-col items-center ${
                  lens.highlight ? "bg-emerald-50" : "bg-gray-50"
                }`}
              >
                <div className="text-sm font-bold text-gray-700 mb-2">
                  굴절률 <span className="text-blue-800">{selectedRef}</span>
                </div>

                <div className="flex items-center gap-3 text-lg font-semibold">
                  <span
                    className={`mr-1 whitespace-nowrap ${
                      regular
                        ? "line-through text-gray-400 text-base"
                        : "text-gray-300 text-base"
                    }`}
                  >
                    {regular ? `${regular.toLocaleString()}원` : "–"}
                  </span>
                  <span className="text-2xl text-gray-400 mx-1 whitespace-nowrap">→</span>
                  <span
                    className={`whitespace-nowrap ${
                      sale
                        ? "font-extrabold text-orange-600 text-2xl"
                        : "text-gray-300 text-xl"
                    }`}
                  >
                    {sale ? `${sale.toLocaleString()}원` : "–"}
                  </span>
                </div>

                <div className="mt-3 text-xs text-blue-700 font-bold text-center">
                  {discountAmount !== null
                    ? `할인 금액: ${discountAmount.toLocaleString()}원`
                    : "–"}
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-800 flex flex-col gap-1 shadow">
                <div className="font-bold mb-1 text-slate-900">옵션/추가 안내</div>
                {lens.options.map((opt, i) => (
                  <div key={i}>- {opt}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 하단 버튼 */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl border-t z-30 flex justify-center items-center gap-2 py-4 flex-wrap">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-3 rounded-xl font-semibold text-sm bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
        >
          ← 뒤로가기
        </button>

        {refractiveIndexes.map((idx) => (
          <button
            key={idx}
            className={`px-8 py-3 rounded-xl font-bold text-lg shadow border-2 transition-all duration-100 ${
              selectedRef === idx
                ? "bg-orange-600 text-white border-orange-600 scale-110"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-orange-50"
            }`}
            onClick={() => setSelectedRef(idx)}
          >
            굴절률 {idx}
          </button>
        ))}

        <button
          onClick={() => setSelectedRef("1.50")}
          className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-blue-100 text-gray-700 border-gray-300 hover:bg-gray-200"
        >
          클리어
        </button>
      </div>

      {/* 이미지 팝업 */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={() => setPopupImage(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-5 max-w-lg w-[90vw] max-h-[85vh] flex flex-col items-center relative border-4 border-blue-500"
            onClick={(e) => e.stopPropagation()}
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
            <div className="font-bold text-blue-900 text-base mt-2">
              시야 예시 (확대 보기)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
