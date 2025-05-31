import React, { useState } from "react";

const sampleLenses = [
  {
    brandLogo: "/logos/essilor.jpg",
    productName: "이노티X에실로 E1",
	badge: { text: "가성비", bg: "bg-ye-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["초기 노안용 기본내면누진", "합리적인 금액"],
    recommend: ["가성비 높은 제품", "기본에 충실한 렌즈"],
    lensImage: "/images/E1.jpg",
    prices: [
      { refraction: "1.50", regular: 320000 },
      { refraction: "1.60", regular: 380000 }
    ],
    discountRate: 0.5,
    options: ["블루라이트 코팅 30,000원 추가", "착색 3만원 추가", "변색 옵션 불가"]
  },
  {
    brandLogo: "/logos/essilor.jpg",
    productName: "이노티X에실로 E2",
    badge: { text: "디지털기기 특화", bg: "bg-sky-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["부드러운 중간시야", "디지털 시생활 특화렌즈"],
    recommend: ["디지털핏 옵티마이저 기능", "오랜 근업시 더 편안하게"],
    lensImage: "/images/E2.jpg",
    prices: [
      { refraction: "1.50", regular: 390000 },
      { refraction: "1.60", regular: 470000 },
      { refraction: "1.67", regular: 550000 }
    ],
    discountRate: 0.5,
    options: ["퓨어블루 5만원 추가(1.60이상)", "착색 3만원 추가", "변색 옵션 20만원 추가 (1.60이상)"]
  },
  {
    brandLogo: "/logos/essilor.jpg",
    productName: "이노티X에실로 E3",
    badge: { text: "쉽고빠른 적응", bg: "bg-lime-200", color: "text-lime-800", border: "border-lime-300" },
    features: ["부드러운 시선전환, 빠른적응", "일상생활을 편안하게"],
    recommend: ["소프트 와이드 테크놀로지", "원시, 난시 복잡한 도수 특화"],
    lensImage: "/images/E3.jpg",
    prices: [
      { refraction: "1.50", regular: 480000 },
      { refraction: "1.60", regular: 570000 },
      { refraction: "1.67", regular: 710000 }
    ],
    discountRate: 0.5,
    options: ["퓨어블루 5만원 추가(1.60이상)", "착색 3만원 추가", "변색 옵션 20만원 추가 (1.60이상)"]
  },
  {
    brandLogo: "/logos/essilor.jpg",
    productName: "이노티X에실로 E4",
    badge: { text: "좌우 도수 다름", bg: "bg-orange-200", color: "text-orange-800", border: "border-orange-300" },
    features: ["양안시 기술력", "어떠한 도수도 빠르게 적응"],
    recommend: ["비전스캔 테크놀로지 - 양안시", "복잡한 도수 + 부등시 특화"],
    lensImage: "/images/E4.jpg",
    prices: [
      { refraction: "1.50", regular: 620000 },
      { refraction: "1.60", regular: 750000 },
      { refraction: "1.67", regular: 860000 }
    ],
    discountRate: 0.5,
    options: ["퓨어블루 5만원 추가(1.60이상)", "착색 3만원 추가", "변색 옵션 20만원 추가 (1.60이상)"]
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67"];

export default function MultifocalLensStandard() {
  const [selectedRef, setSelectedRef] = useState("");
  const [popupImage, setPopupImage] = useState(null);  // 팝업 이미지 상태 추가

  return (
    <div className="relative min-h-screen pb-36 bg-blue-50">
      <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {sampleLenses.map((lens, idx) => {
          const priceRow = selectedRef ? lens.prices.find(p => p.refraction === selectedRef) : null;
          const regular = priceRow ? priceRow.regular : null;
          const sale = priceRow && priceRow.regular ? Math.round(priceRow.regular * lens.discountRate) : null;
          const discountAmount = priceRow && priceRow.regular ? priceRow.regular - sale : null;
          const isE3 = lens.productName === "이노티X에실로 E3";

          return (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-5 flex flex-col gap-4 border shadow hover:shadow-2xl transition ${isE3 ? 'ring-4 ring-sky-300/80' : ''}`}
              style={{ zIndex: isE3 ? 5 : 1 }}
            >
              {isE3 && (
                <div className="absolute left-6 -top-4 bg-sky-400 text-white font-extrabold px-5 py-1 rounded-full shadow-xl text-sm tracking-wide border-2 border-sky-600 animate-bounce whitespace-nowrap z-20">
                  보급형 고객 선택 1위
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

                  {/* ✅ 제품 뱃지 표시 */}
                  {lens.badge && (
                    <div
                      className={`inline-block mt-1 px-3 py-1 text-xs font-bold rounded-full border ${lens.badge.bg} ${lens.badge.color} ${lens.badge.border} self-start`}
                    >
                      {lens.badge.text}
                    </div>
                  )}

                  <ul className="mt-2 text-gray-600 text-xs list-disc ml-4 space-y-1">
                    {lens.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 rounded-md px-3 py-2 text-[14px] leading-snug text-green-900 font-semibold shadow mb-1 flex flex-col gap-1">
                <div className="mb-1 font-bold text-green-800">제품 설명</div>
                {lens.recommend.map((r, i) => <div key={i}>⏩ {r}</div>)}
              </div>

              <div className={`w-full aspect-[3/2] rounded-md overflow-hidden shadow border border-gray-200 my-1 ${isE3 ? "animate-pulse" : ""}`}>
                <img src={lens.lensImage} 
				alt="렌즈 시야 예시" 
				className="w-full h-full object-contain cursor-pointer hover:scale-105 transition"
				onClick={() => setPopupImage(lens.lensImage)}
				/>
			
              </div>

              <div className={`bg-gray-50 rounded-lg p-4 mb-1 shadow flex flex-col items-center ${isE3 ? "animate-pulse" : ""}`}>
                
                <div className="flex items-center gap-3 text-lg font-semibold whitespace-nowrap">
                  <span className={`mr-1 ${regular ? "line-through text-gray-400" : "text-gray-300"}`} style={{ fontSize: "15px" }}>
                    {selectedRef ? (regular ? `${regular.toLocaleString()}원` : "–") : "–"}
                  </span>
                  <span className="text-2xl text-gray-400 mx-1">→</span>
                  <span className={sale ? "font-extrabold text-orange-600 text-xl" : "text-gray-300 text-xl"} style={{ fontSize: "20px" }}>
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
                {lens.options.map((opt, i) => <div key={i}>- {opt}</div>)}
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl border-t z-30 flex justify-center items-center gap-4 py-4">
        <div className="flex gap-2">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          >
            ← 뒤로가기
          </button>
          {refractiveIndexes.map((idx) => (
            <button
              key={idx}
              className={
                "px-8 py-3 rounded-xl font-bold text-lg shadow border-2 transition-all duration-100 " +
                (selectedRef === idx
                  ? "bg-orange-600 text-white border-orange-600 scale-110"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-orange-50")
              }
              onClick={() => setSelectedRef(selectedRef === idx ? "" : idx)}
            >
              굴절률 {idx}
            </button>
          ))}
        </div>
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