import React, { useState } from "react";

const sampleLenses = [
  {
    brandLogo: "/logos/hoya-logo.jpg",
    productName: "호야 발란시스 KR-IND",
	badge: { text: "한국인+개인맞춤", bg: "bg-ye-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["강한 내구성의 호야", "프리미엄다초점 합리적인 선택"],
    recommend: ["스크라치에 강한 내구성", "발란시스KR+인디비주얼설계", "양면복합+개인맞춤"],
    lensImage: "/images/BIND.jpg",
    prices: [
      { refraction: "1.50", regular: 630000, sale: 500000 },
	  { refraction: "1.60", regular: 730000, sale: 560000 },
      { refraction: "1.67", regular: 830000, sale: 650000 },
	  { refraction: "1.74", regular: 1030000, sale: 790000 }
    ],
    discountRate: 0.7,
    options: ["카카오 채널추가 이벤트 포함","메이리오코팅, 풀컨트롤코팅 선택"]
  },
  {
    brandLogo: "/logos/hoya-logo.jpg",
    productName: "호야 라이프스타일4",
    badge: { text: "양쪽 눈의 시력차", bg: "bg-sky-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["강한 내구성의 호야", "양안시 리더"],
    recommend: ["스크라치에 강한 내구성", "B.H.T기술 + 3D비전테크", "두 눈의 시력차이에도 편안함"],
    lensImage: "/images/L3.jpg",
    prices: [
      { refraction: "1.50", regular: 730000 },
      { refraction: "1.60", regular: 830000 },
      { refraction: "1.67", regular: 930000 },
	  { refraction: "1.74", regular: 1130000 }
    ],
    discountRate: 0.75,
    options: ["메이리오코팅, 풀컨트롤코팅 선택"]
  },
  {
    brandLogo: "/logos/essilor.jpg",
    productName: "바리락스 XR 디자인",
    badge: { text: "움직임에도 지속되는 선명함", bg: "bg-lime-200", color: "text-lime-800", border: "border-lime-300" },
    features: ["AI설계 최첨단 프리미엄 다초점", "움직임속에서도 선명함"],
    recommend: ["에실로의 프리미엄렌즈", "착용 첫날 적응", "움직임에도 선명한 넓은시야"],
    lensImage: "/images/F.jpg",
    prices: [
      { refraction: "1.50", regular: 880000 },
      { refraction: "1.60", regular: 1030000 },
      { refraction: "1.67", regular: 1130000 },
	  { refraction: "1.74", regular: 1380000 }
    ],
    discountRate: 0.8,
    options: ["1.50 - see+uv, 1.60 - PureBlue"]
  },
  {
    brandLogo: "/logos/nikon.jpg",
    productName: "씨맥스 얼티밋 Z",
    badge: { text: "40억개의 데이터매칭", bg: "bg-orange-200", color: "text-orange-800", border: "border-orange-300" },
    features: ["모든 상황에서 선명함", "대비 최적화 렌즈"],
    recommend: ["40억개의 설계데이터 매칭", "대비감도기술", "어떠한 변수에서도 최적설계"],
    lensImage: "/images/F.jpg",
    prices: [
      { refraction: "1.50", regular: 1330000 },
      { refraction: "1.60", regular: 1530000 },
      { refraction: "1.67", regular: 1730000 },
	  { refraction: "1.74", regular: 2130000 }
    ],
    discountRate: 0.7,
    options: ["1.50 - see+uv, 1.60 - PureBlue"]
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67", "1.74"];

export default function Progressive_tinted_4Supreme() {
	const [selectedRef, setSelectedRef] = useState("");
    const [popupImage, setPopupImage] = useState(null);  // 팝업 이미지 상태 추가


  return (
    <div className="relative min-h-screen pb-36 bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {sampleLenses.map((lens, idx) => {
          const priceRow = selectedRef ? lens.prices.find(p => p.refraction === selectedRef) : null;
          const regular = priceRow ? priceRow.regular : null;
          
		  // ✅ sale이 명시돼 있으면 그대로 사용, 없으면 계산
			const sale = priceRow
				? priceRow.sale !== undefined
				? priceRow.sale
				: priceRow.regular
				? Math.round(priceRow.regular * lens.discountRate)
				: null
			: null;

			const discountAmount = regular && sale ? regular - sale : null;
          const isE3 = lens.productName === "호야 발란시스 KR-IND";
		  const isE4 = lens.productName === "호야 발란시스 KR";

          return (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-5 flex flex-col gap-4 border shadow hover:shadow-2xl transition
			  ${isE3 ? 'ring-4 ring-yellow-100/80' : ''}
			  ${isE4 ? 'ring-4 ring-pink-300/80' : ''}`}
              style={{ zIndex: isE3 || isE4 ? 5 : 1 }}
            >
			
              {isE3 && (
                <div className="absolute left-6 -top-4 bg-yellow-400 text-white font-extrabold px-5 py-1 rounded-full shadow-xl text-sm tracking-wide border-2 border-yellow-600 animate-bounce whitespace-nowrap z-20">
                  프리미엄 고객 선택 1위
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
                    className="h-12 w-12 object-contain rounded bg-white border p-1"
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
                <img src={lens.lensImage} 
				alt="렌즈 시야 예시" 
				className="w-full h-full object-contain cursor-pointer hover:scale-105 transition"
				onClick={() => setPopupImage(lens.lensImage)}
				/>
				
              </div>

              <div className={`bg-gray-50 rounded-lg p-4 mb-1 shadow flex flex-col items-center 
				
				${isE3 ? "animate-pulse" : ""}
				${isE4 ? "animate-pulse" : ""}`}>
                
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
		  
		  
		  <button        
            className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-yellow-100 
			text-gray-700 border-gray-300 hover:bg-gray-200">
            착색
          </button>
		  
		  
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
