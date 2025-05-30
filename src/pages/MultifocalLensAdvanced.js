import React, { useState } from "react";

const sampleLenses = [
  {
    brandLogo: "/images/hoya-logo.jpg",
    productName: "호야 앰플리튜드 플러스",
	badge: { text: "균형잡힌 시생활", bg: "bg-ye-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["강한 내구성의 호야", "합리적인 호야 다초점렌즈"],
    recommend: ["스크라치에 강한 내구성", "맥스 부스터 플러스 기술", "원-근 밸런스 설계"],
    lensImage: "/images/E3.jpg",
    prices: [
      { refraction: "1.50", regular: 330000 },
	  { refraction: "1.60", regular: 430000 },
      { refraction: "1.67", regular: 530000 }
    ],
    discountRate: 0.8,
    options: ["메이리오코팅, 풀컨트롤코팅 선택", "착색 3만원 추가", "변색 옵션 15만원 추가"]
  },
  {
    brandLogo: "/images/hoya-logo.jpg",
    productName: "호야 다이나믹 써미트KR",
    badge: { text: "스테디셀러", bg: "bg-sky-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["강한 내구성의 호야", "한국인 전용 다초점렌즈"],
    recommend: ["스크라치에 강한 내구성", "퀵포커스+파워옵티마이저", "처방도수에 따른 최적화설계"],
    lensImage: "/images/E4.jpg",
    prices: [
      { refraction: "1.50", regular: 400000 },
      { refraction: "1.60", regular: 500000 },
      { refraction: "1.67", regular: 600000 }
    ],
    discountRate: 0.7,
    options: ["카카오 채널추가 이벤트 포함", "메이리오코팅, 풀컨트롤코팅 선택", "착색 3만원 추가", "변색 옵션 15만원 추가"]
  },
  {
    brandLogo: "/images/hoya-logo.jpg",
    productName: "호야 D-프리미엄KR-IND",
    badge: { text: "쾌적한시야+빠른적응", bg: "bg-lime-200", color: "text-lime-800", border: "border-lime-300" },
    features: ["경사각 안면각 정간거리 반영", "합리적인 가격의 인디비주얼렌즈"],
    recommend: ["스크라치에 강한 내구성", "자유롭게, 더 다이나믹하게", "개인맞춤설계 - 인디비주얼설계"],
    lensImage: "/images/DP.jpg",
    prices: [
      { refraction: "1.50", regular: 500000 },
      { refraction: "1.60", regular: 600000 },
      { refraction: "1.67", regular: 700000 }
    ],
    discountRate: 0.7,
    options: ["카카오 채널추가 이벤트 포함", "메이리오코팅, 풀컨트롤코팅 선택", "착색 3만원 추가", "변색 옵션 15만원 추가"]
  },
  {
    brandLogo: "/images/hoya-logo.jpg",
    productName: "호야 발란시스 KR",
    badge: { text: "한국 안경사 커뮤니티 추천1위", bg: "bg-orange-200", color: "text-orange-800", border: "border-orange-300" },
    features: ["가장빠른 적응 + 한국인전용설계", "양면복합누진렌즈"],
    recommend: ["스크라치에 강한 내구성", "원-근용 넓은 시야", "전문가 추천1위"],
    lensImage: "/images/BA.jpg",
    prices: [
      { refraction: "1.50", regular: 600000 },
      { refraction: "1.60", regular: 700000 },
      { refraction: "1.67", regular: 800000 },
	  { refraction: "1.74", regular: 950000 }
    ],
    discountRate: 0.7,
    options: ["메이리오코팅, 풀컨트롤코팅 선택", "착색 3만원 추가", "변색 옵션 15만원 추가"]
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67"];

export default function MultifocalLensStandard() {
  const [selectedRef, setSelectedRef] = useState("");

  return (
    <div className="relative min-h-screen pb-36 bg-blue-90">
      <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {sampleLenses.map((lens, idx) => {
          const priceRow = selectedRef ? lens.prices.find(p => p.refraction === selectedRef) : null;
          const regular = priceRow ? priceRow.regular : null;
          const sale = priceRow && priceRow.regular ? Math.round(priceRow.regular * lens.discountRate) : null;
          const discountAmount = priceRow && priceRow.regular ? priceRow.regular - sale : null;
          const isE3 = lens.productName === "호야 다이나믹 써미트KR";
		  const isE4 = lens.productName === "호야 발란시스 KR";

          return (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-5 flex flex-col gap-4 border shadow hover:shadow-2xl transition
			  ${isE3 ? 'ring-4 ring-sky-300/80' : ''}
			  ${isE4 ? 'ring-4 ring-pink-300/80' : ''}`}
              style={{ zIndex: isE3 || isE4 ? 5 : 1 }}
            >
			
              {isE3 && (
                <div className="absolute left-6 -top-4 bg-sky-400 text-white font-extrabold px-5 py-1 rounded-full shadow-xl text-sm tracking-wide border-2 border-sky-600 animate-bounce whitespace-nowrap z-20">
                  고급형 고객 선택 1위
                </div>
              )}
			  
			  {isE4 && (
				<div className="absolute right-6 -top-4 bg-pink-500 text-white font-extrabold px-4 py-1 rounded-full shadow-xl text-sm tracking-wide border-2 border-pink-600 animate-bounce whitespace-nowrap z-20">
				전문가 추천 1위
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

              <div className={`w-full aspect-[3/2] rounded-md overflow-hidden shadow border border-gray-200 my-1 
				${isE3 ? "animate-pulse" : ""}
				${isE4 ? "animate-pulse" : ""}`}>
                <img src={lens.lensImage} alt="렌즈 시야 예시" className="w-full h-full object-contain" />
              </div>

              <div className={`bg-gray-50 rounded-lg p-4 mb-1 shadow flex flex-col items-center 
				
				${isE3 ? "animate-pulse" : ""}
				${isE4 ? "animate-pulse" : ""}`}>
                <div className="font-bold text-base text-gray-800 mb-2">
                  굴절률 <span className="text-blue-800">{selectedRef || "-"}</span> 가격
                </div>
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
    </div>
  );
}
