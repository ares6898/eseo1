import React, { useState } from "react";

// 1. 각 제품 객체에 descImage(설명팝업 이미지), descText(설명팝업 텍스트) 추가!
const sampleLenses = [
  {
    brandLogo: "/images/hoya-logo.jpg",
    productName: "호야 앰플리튜드 플러스",
    badge: { text: "균형잡힌 시생활", bg: "bg-ye-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["합리적인 호야 다초점렌즈"],
    recommend: ["스크라치에 강한 내구성", "맥스 부스터 플러스 기술", "원-근 밸런스 설계"],
    lensImage: "/images/E3.jpg",
    descImage: "/images/ampop.png", // 설명팝업 이미지(제품별로 다르게)
    descText: "이 제품은 합리적 가격의 호야 앰플리튜드 플러스! 선명한 시야와 내구성 모두 잡은 균형잡힌 제품입니다.", // 설명팝업 텍스트(제품별로 다르게)
    prices: [
      { refraction: "1.50", regular: 310000 },
      { refraction: "1.60", regular: 410000 },
      { refraction: "1.67", regular: 510000 }
    ],
    discountRate: 0.8,
    options: ["메이리오코팅, 풀컨트롤코팅 선택"]
  },
  {
    brandLogo: "/images/hoya-logo.jpg",
    productName: "호야 다이나믹 써미트KR",
    badge: { text: "스테디셀러", bg: "bg-sky-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["한국인 전용 다초점렌즈"],
    recommend: ["스크라치에 강한 내구성", "퀵포커스+파워옵티마이저", "처방도수에 따른 최적화설계"],
    lensImage: "/images/E4.jpg",
    descImage: "/images/desc-e4.jpg",
    descText: "한국인 처방 데이터로 최적화된 호야 다이나믹 써미트KR. 선명하고 빠른 적응력, 높은 내구성이 특징!",
    prices: [
      { refraction: "1.50", regular: 380000, sale: 295000 },
      { refraction: "1.60", regular: 480000, sale: 362000 },
      { refraction: "1.67", regular: 580000, sale: 452000 }
    ],
    discountRate: 0.7,
    options: ["카카오 채널추가 이벤트 포함", "메이리오코팅, 풀컨트롤코팅 선택"]
  },
  {
    brandLogo: "/images/hoya-logo.jpg",
    productName: "호야 D-프리미엄KR-IND",
    badge: { text: "쾌적한시야+빠른적응", bg: "bg-lime-200", color: "text-lime-800", border: "border-lime-300" },
    features: ["합리적인 가격의 인디비주얼렌즈"],
    recommend: ["스크라치에 강한 내구성", "자유롭게, 더 다이나믹하게", "개인맞춤설계 - 인디비주얼설계"],
    lensImage: "/images/DP.jpg",
    descImage: "/images/desc-dp.jpg",
    descText: "누진 초보도 빠르게 적응! 개인맞춤 설계로 한 단계 높은 편안함을 느낄 수 있는 프리미엄KR-IND.",
    prices: [
      { refraction: "1.50", regular: 480000, sale: 335000 },
      { refraction: "1.60", regular: 580000, sale: 425000 },
      { refraction: "1.67", regular: 680000, sale: 515000 }
    ],
    discountRate: 0.7,
    options: ["카카오 채널추가 이벤트 포함", "메이리오코팅, 풀컨트롤코팅 선택"]
  },
  {
    brandLogo: "/images/hoya-logo.jpg",
    productName: "호야 발란시스 KR",
    badge: { text: "한국 안경사 커뮤니티 추천1위", bg: "bg-orange-200", color: "text-orange-800", border: "border-orange-300" },
    features: ["가장빠른 적응 + 한국인전용설계"],
    recommend: ["스크라치에 강한 내구성", "원-근용 넓은 시야", "전문가 추천1위"],
    lensImage: "/images/BA.jpg",
    descImage: "/images/desc-ba.jpg",
    descText: "업계 추천 1위! 한국인 시야에 최적화된 설계와 탁월한 적응력으로 많은 사랑을 받고 있는 발란시스 KR.",
    prices: [
      { refraction: "1.50", regular: 580000 },
      { refraction: "1.60", regular: 680000 },
      { refraction: "1.67", regular: 780000 },
      { refraction: "1.74", regular: 930000 }
    ],
    discountRate: 0.8,
    options: ["메이리오코팅, 풀컨트롤코팅 선택"]
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67", "1.74"];

export default function Progressive_tinted_3Advanced() {
  const [selectedRef, setSelectedRef] = useState("");
  const [imagePopup, setImagePopup] = useState(null); // 이미지 팝업
  const [descPopup, setDescPopup] = useState(null);   // 설명 팝업(객체 저장)

  return (
    <div className="relative min-h-screen pb-36 bg-blue-900">
      <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {sampleLenses.map((lens, idx) => {
          const priceRow = selectedRef ? lens.prices.find(p => p.refraction === selectedRef) : null;
          const regular = priceRow?.regular ?? null;
          const sale = priceRow ? priceRow.sale ?? Math.round(priceRow.regular * lens.discountRate) : null;
          const discountAmount = regular && sale ? regular - sale : null;

          const isE3 = lens.productName === "호야 다이나믹 써미트KR";
          const isE4 = lens.productName === "호야 발란시스 KR";

          return (
            <div key={idx} className={`relative bg-white rounded-2xl p-5 flex flex-col gap-4 border shadow hover:shadow-2xl transition ${isE3 ? 'ring-4 ring-sky-300/80' : ''} ${isE4 ? 'ring-4 ring-pink-300/80' : ''}`} style={{ zIndex: isE3 || isE4 ? 5 : 1 }}>
              {/* 카드 상단 고정 뱃지들 */}
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
                  <img src={lens.brandLogo} alt="브랜드 로고" className="h-10 w-10 object-contain rounded bg-white border p-1" />
                )}
                <div className="flex flex-col">
                  <div className="text-lg font-bold text-blue-900 whitespace-nowrap">{lens.productName}</div>
                  {lens.badge && (
                    <div className={`inline-block mt-1 px-3 py-1 text-xs font-bold rounded-full border ${lens.badge.bg} ${lens.badge.color} ${lens.badge.border} self-start`}>
                      {lens.badge.text}
                    </div>
                  )}
                  <ul className="mt-2 text-gray-600 text-xs list-disc ml-4 space-y-1">
                    {lens.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>

              {/* 제품설명카드 클릭 → 텍스트+이미지 팝업(제품별) */}
              <div
                className="bg-green-100 rounded-md px-3 py-2 text-[14px] leading-snug text-green-900 font-semibold shadow mb-1 flex flex-col gap-1 cursor-pointer hover:bg-green-200 transition"
                //onClick={() => setDescPopup(lens)} // ★ 렌즈 객체 통째로 저장
              >
                <div className="mb-1 font-bold text-green-800">제품 설명</div>
                {lens.recommend.map((r, i) => <div key={i}>⏩ {r}</div>)}
              </div>

              {/* 이미지 클릭 → 이미지 팝업 */}
              <div className="w-full aspect-[3/2] rounded-md overflow-hidden shadow border border-gray-200 my-1">
                <img src={lens.lensImage}
                  alt="렌즈 시야 예시"
                  className="w-full h-full object-contain cursor-pointer hover:scale-105 transition"
                  onClick={() => setImagePopup(lens.lensImage)}
                />
              </div>

              {/* 가격 카드 */}
              <div className={`relative bg-gray-50 rounded-lg p-4 mb-1 shadow flex flex-col items-center ${isE3 || isE4 ? "animate-pulse" : ""}`}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 text-xs font-bold rounded-full shadow 
                  bg-yellow-100 text-yellow-800 border border-yellow-300 whitespace-nowrap">
                  5만원 프리미엄코팅 무상지원
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
          <button onClick={() => window.history.back()} className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200">
            ← 뒤로가기
          </button>
          {refractiveIndexes.map((idx) => (
            <button key={idx} className={"px-8 py-3 rounded-xl font-bold text-lg shadow border-2 transition-all duration-100 " + (selectedRef === idx ? "bg-orange-600 text-white border-orange-600 scale-110" : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-orange-50")} onClick={() => setSelectedRef(selectedRef === idx ? "" : idx)}>
              굴절률 {idx}
            </button>
          ))}
		  
		  
		  <button        
            className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-yellow-100 
			text-gray-700 border-gray-300 hover:bg-gray-200">
            착색
          </button>
		  
		  
        </div>
      </div>

      {/* 이미지 팝업 */}
      {imagePopup && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={() => setImagePopup(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-5 max-w-lg w-[90vw] max-h-[85vh] flex flex-col items-center relative border-4 border-blue-500"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 px-4 py-2 rounded-lg font-bold text-lg bg-blue-600 text-white border-2 border-blue-800 shadow hover:bg-white hover:text-blue-700 hover:border-blue-800 transition"
              onClick={() => setImagePopup(null)}
              style={{ zIndex: 10 }}
            >
              닫기
            </button>
            <img
              src={imagePopup}
              alt="시야표 확대"
              className="w-full h-auto max-h-[60vh] object-contain rounded-lg mb-3"
            />
            <div className="font-bold text-blue-900 text-base mt-2">시야 예시 (확대 보기)</div>
          </div>
        </div>
      )}

      {/* 제품설명 팝업 (제품별 이미지/텍스트 다르게) */}
      {descPopup && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={() => setDescPopup(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-5 max-w-lg w-[90vw] max-h-[60vh] flex flex-col items-center justify-center relative border-4 border-emerald-400"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 px-4 py-2 rounded-lg font-bold text-lg bg-emerald-500 text-white border-2 border-emerald-800 shadow hover:bg-white hover:text-emerald-700 hover:border-emerald-800 transition"
              onClick={() => setDescPopup(null)}
              style={{ zIndex: 10 }}
            >
              닫기
            </button>
            <img
              src={descPopup.descImage} // 제품별 설명이미지
              alt="제품설명 이미지"
              className="w-full h-auto max-h-[30vh] object-contain rounded-lg mb-3"
            />
            <div className="font-bold text-emerald-700 text-lg mb-2 mt-6">제품 설명</div>
            <div className="text-gray-800 text-base text-center">
              {descPopup.descText} {/* 제품별 설명 텍스트 */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
