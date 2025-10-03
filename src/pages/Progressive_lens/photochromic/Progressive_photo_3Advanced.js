import React, { useState } from "react";

// 1. 각 제품 객체에 descImage(설명팝업 이미지), descText(설명팝업 텍스트), infoUrl(외부 링크) 추가!
const sampleLenses = [
  {
    brandLogo: "/logos/nikon.jpg",
    productName: "니콘 퍼스트",
    // ✅ Tailwind 오타 수정: bg-ye-200 → bg-yellow-200
    badge: { text: "초기노안", bg: "bg-yellow-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["수평방향 수차제어"],
    recommend: ["혁신적인 니콘의 비구면설계", "수평방향 수차제어", "합리적인 가격"],
    lensImage: "/images/E2.jpg",
    descImage: "/images/ampop.png",
    descText: ".",
    // 🔗 제품별 외부 설명 URL (원하는 주소로 교체)
    infoUrl: null, 
    prices: [
      { refraction: "1.50", regular: 450000 },
      { refraction: "1.60", regular: 530000 },
      { refraction: "1.67", regular: 630000 }
    ],
    discountRate: 0.8,
    options: ["엑스트라 엑티브 납기 10일", "스타일컬러 납기 10일" ]
  },
  {
    brandLogo: "/logos/nikon.jpg",
    productName: "니콘 어드밴스 Z",
    badge: { text: "디지털기기 전용", bg: "bg-lime-200", color: "text-lime-800", border: "border-lime-300" },
    features: ["모든 상황에서 진하고 또렷한 Z"],
    recommend: ["Z-저조도상황에서도 선명하게", "더욱 편안한 근거리시야", "디지털라이프 스타일"],
    lensImage: "/images/E4.jpg",
    descImage: "/images/desc-dp.jpg",
    descText: "누진 초보도 빠르게 적응! 개인맞춤 설계로 한 단계 높은 편안함을 느낄 수 있는 프리미엄KR-IND.",
    infoUrl: "https://nikonlenswear.com/ko-kr/our-lenses/vision-correction/z-series-progressives/presio-advance-z",
    prices: [
      { refraction: "1.50", regular: 600000 },
      { refraction: "1.60", regular: 700000 },
      { refraction: "1.67", regular: 800000 },
	  { refraction: "1.74-10일 기본컬러", regular: 950000}
    ],
    discountRate: 0.7,
    options: ["엑스트라 엑티브 납기 10일", "스타일컬러 납기 10일" ]
  },
  {
    brandLogo: "/logos/nikon.jpg",
    productName: "니콘 와이드 Z",
    badge: { text: "자연스러움과 편안함의 조화", bg: "bg-orange-200", color: "text-orange-800", border: "border-orange-300" },
    features: ["강력한 수차제어 디자인"],
    recommend: ["모든 거리의 주변부 수차제어", "울렁임없이 넓은 시야", "편안하고 빠른 적응"],
    lensImage: "/images/BIND.jpg",
    descImage: "/images/desc-ba.jpg",
    descText: "업계 추천 1위! 한국인 시야에 최적화된 설계와 탁월한 적응력으로 많은 사랑을 받고 있는 발란시스 KR.",
    infoUrl: "https://nikonlenswear.com/ko-kr/our-lenses/vision-correction/z-series-progressives/presio-wide-z",
    prices: [
      { refraction: "1.50", regular: 750000 },
      { refraction: "1.60", regular: 850000 },
      { refraction: "1.67", regular: 950000 },
      { refraction: "1.74-10일 기본컬러", regular: 1100000 }
    ],
    discountRate: 0.7,
    options: ["엑스트라 엑티브 납기 10일", "스타일컬러 납기 10일" ]
  },
  {
    brandLogo: "/logos/nikon.jpg",
    productName: "니콘 씨맥스 마스터Z",
    badge: { text: "적응실패 없는 다초점", bg: "bg-sky-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["40억개의 디자인"],
    recommend: ["40억개의 디자인 중에","나를 위한 단 하나의 설계", "세계 최고의 다초점렌즈"],
    lensImage: "/images/F.jpg",
    descImage: "/images/desc-e4.jpg",
    descText: "한국인 처방 데이터로 최적화된 호야 다이나믹 써미트KR. 선명하고 빠른 적응력, 높은 내구성이 특징!",
    infoUrl: "https://nikonlenswear.com/ko-kr/our-lenses/vision-correction/z-series-progressives/seemax-master-z",
    prices: [
      { refraction: "1.50", regular: 1100000 },
      { refraction: "1.60", regular: 1300000 },
      { refraction: "1.67", regular: 1500000 },
      { refraction: "1.74-10일 기본컬러", regular: 1800000 }
    ],
    discountRate: 0.5,
    options: ["엑스트라 엑티브 납기 10일", "스타일컬러 납기 10일" ]
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67", "1.74-10일 기본컬러"];

export default function MultifocalLensAdvanced() {
  // 기본 선택값 1.50
  const [selectedRef, setSelectedRef] = useState("1.50");
  const [popupImage, setPopupImage] = useState(null);

  // ✅ 항상 새 창으로만 열기
  const openInNewTab = (url) => {
    if (!url) return;
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      // 팝업 차단 등 예외 시 대체
      window.location.href = url;
    }
  };

  return (
    <div className="relative min-h-screen pb-36 bg-blue-900">
      <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {[...sampleLenses].reverse().map((lens, idx) => {
          const priceRow = selectedRef ? lens.prices.find(p => p.refraction === selectedRef) : null;
          const regular = priceRow ? priceRow.regular : null;
          const sale = priceRow
            ? priceRow.sale !== undefined
              ? priceRow.sale
              : priceRow.regular
              ? Math.round(priceRow.regular * lens.discountRate)
              : null
            : null;

          const discountAmount = regular && sale ? regular - sale : null;
          const isE3 = lens.productName === "니콘 와이드 Z";
          const isE4 = lens.productName === "니콘 씨맥스 마스터Z";
          const hasLink = Boolean(lens.infoUrl);

          return (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-5 flex flex-col gap-4 border shadow hover:shadow-2xl transition
                ${isE3 ? "ring-4 ring-yellow-100/80" : ""}
                ${isE4 ? "ring-4 ring-pink-300/80" : ""}`}
              style={{ zIndex: isE3 || isE4 ? 5 : 1 }}
            >
              {isE3 && (
                <div className="absolute left-6 -top-4 bg-blue-400 text-white font-extrabold px-5 py-1 rounded-full shadow-xl text-sm tracking-wide border-2 border-blue-600 animate-bounce whitespace-nowrap z-20">
                  전문가 추천
                </div>
              )}

              {isE4 && (
                <div className="absolute right-6 -top-4 bg-pink-500 text-white font-extrabold px-4 py-1 rounded-full shadow-xl text-sm tracking-wide border-2 border-pink-600 animate-bounce whitespace-nowrap z-20">
                  다초점안경의 마스터피스
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

              {/* ✅ 제품 설명: 새 창으로만 열기 / 링크 없으면 비활성 */}
              <div
                className={[
                  "bg-green-100 rounded-md px-3 py-2 text-[14px] leading-snug text-green-900 font-semibold shadow mb-1",
                  "flex flex-col gap-1 transition",
                  hasLink ? "cursor-pointer hover:bg-green-200" : "opacity-200 cursor-not-allowed"
                ].join(" ")}
                onClick={() => hasLink && openInNewTab(lens.infoUrl)}
                role="button"
                aria-disabled={!hasLink}
                tabIndex={hasLink ? 0 : -1}
                onKeyDown={(e) => {
                  if (hasLink && e.key === "Enter") openInNewTab(lens.infoUrl);
                }}
                title={hasLink ? "새 창으로 설명 페이지 열기" : "설명 링크 준비중"}
              >
                <div className="mb-1 font-bold text-green-800 flex items-center gap-2">
                  제품 설명
                  
                </div>
                {lens.recommend.map((r, i) => (
                  <div key={i}>⏩ {r}</div>
                ))}
              </div>

              <div
                className={`w-full aspect-[3/2] rounded-md overflow-hidden shadow border border-gray-200 my-1 
                  ${isE3 ? "animate-pulse" : ""} 
                  ${isE4 ? "animate-pulse" : ""}`}
              >
                <img
                  src={lens.lensImage}
                  alt="렌즈 시야 예시"
                  className="w-full h-full object-contain cursor-pointer hover:scale-105 transition"
                  onClick={() => setPopupImage(lens.lensImage)}
                />
              </div>

              <div
                className={`bg-gray-50 rounded-lg p-4 mb-1 shadow flex flex-col items-center 
                  ${isE3 ? "animate-pulse" : ""} 
                  ${isE4 ? "animate-pulse" : ""}`}
              >
                <div className="flex items-center gap-3 text-lg font-semibold whitespace-nowrap">
                  <span
                    className={`mr-1 ${regular ? "line-through text-gray-400" : "text-gray-300"}`}
                    style={{ fontSize: "15px" }}
                  >
                    {selectedRef ? (regular ? `${regular.toLocaleString()}원` : "–") : "–"}
                  </span>
                  <span className="text-2xl text-gray-400 mx-1">→</span>
                  <span
                    className={sale ? "font-extrabold text-orange-600 text-xl" : "text-gray-300 text-xl"}
                    style={{ fontSize: "20px" }}
                  >
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
                {lens.options.map((opt, i) => (
                  <div key={i}>- {opt}</div>
                ))}
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
            className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-purple-300 
			text-gray-700 border-gray-300 hover:bg-gray-200">
          
            변색
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
            <div className="font-bold text-blue-900 text-base mt-2">시야 예시 (확대 보기)</div>
          </div>
        </div>
      )}
    </div>
  );
}
