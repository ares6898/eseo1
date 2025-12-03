import React, { useState } from "react";

const sampleLenses = [
  {
    brandLogo: "/logos/VX.jpg",
    productName: "컴포트맥스 KAN",
    badge: { text: "한국인 전용", bg: "bg-yellow-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["한국인 전용디자인", "하루종일 편안한 시야"],
    recommend: ["장시간 착용해도 편안한 자세", "어두운 환경 선명하고 또렷함", "원 근거리 정확한 시야"],
    lensImage: "/images/DP.jpg",
    infoUrl: "https://www.essilor.com/kr-ko/products/varilux/varilux-comfort-max/", // 원하는 링크로 교체
    prices: [
      { refraction: "1.50", regular: 680000 },
	  { refraction: "1.60", regular: 780000 },
      { refraction: "1.67", regular: 880000 }
    ],
    discountRate: 0.7,
    options: ["엑스트라 엑티브 납기 10일", "스타일컬러 납기 10일","엑티브, 스타일컬러  Crizal코팅"]
  },
  {
    brandLogo: "/logos/VX.jpg",
    productName: "피지오 KAN",
    badge: { text: "활동적인 시생활", bg: "bg-sky-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["한국인 전용디자인", "양안시 리더"],
    recommend: ["양안 균형 더욱 넓은 시야", "어두운 환경 선명하고 또렷함", "빠르고 정확한 시야전환"],
    lensImage: "/images/BIND.jpg",
    infoUrl: "https://www.essilor.com/kr-ko/products/varilux/varilux-physio/", // 교체 가능
    prices: [
      { refraction: "1.50", regular: 850000 },
      { refraction: "1.60", regular: 950000 },
      { refraction: "1.67", regular: 1050000 },
	  { refraction: "1.74-2주 기본컬러만 가능", regular: 1200000 }
    ],
    discountRate: 0.7,
    options: ["엑스트라 엑티브 납기 10일", "스타일컬러 납기 10일","엑티브, 스타일컬러  Crizal코팅"]
  },
  {
    brandLogo: "/logos/VX.jpg",
    productName: "바리락스 XR 디자인",
    badge: { text: "움직임에도 지속되는 선명함", bg: "bg-lime-200", color: "text-lime-800", border: "border-lime-300" },
    features: ["AI설계 최첨단 프리미엄 다초점", "움직임속에서도 선명함"],
    recommend: ["AI설계 즉각적인 선명함", "착용 첫날 적응", "움직임에도 선명한 넓은시야"],
    lensImage: "/images/F.jpg",
    infoUrl: "https://www.essilor.com/kr-ko/products/varilux/varilux-xr-series/", // 교체 가능
    prices: [
      { refraction: "1.50", regular: 1050000 },
      { refraction: "1.60", regular: 1150000 },
      { refraction: "1.67", regular: 1250000 },
	  { refraction: "1.74-2주 기본컬러만 가능", regular: 1550000 }
    ],
    discountRate: 0.6,
    options: ["엑스트라 엑티브 납기 10일", "스타일컬러 납기 10일","엑티브, 스타일컬러  Crizal코팅"]
  },
  {
    brandLogo: "/logos/VX.jpg",
    productName: "바리락스 XR PRO",
    badge: { text: "움직임에도 지속되는 선명함", bg: "bg-orange-200", color: "text-orange-800", border: "border-orange-300" },
    features: ["AI설계 최첨단 프리미엄 다초점", "움직임속에서도 선명함"],
    recommend: ["아이코드 적용모델", "4D 개인맞춤", "세계최고의 다초점렌즈"],
    lensImage: "/images/F.jpg",
    infoUrl: "https://www.essilor.com/kr-ko/products/varilux/varilux-xr-series/", // 교체 가능
    prices: [
      { refraction: "1.50", regular: 2000000 },
      { refraction: "1.60", regular: 2200000 },
      { refraction: "1.67", regular: 2400000 },
	  { refraction: "1.74-2주 기본컬러만 가능", regular: 2800000 }
    ],
    discountRate: 0.5,
    options: ["엑스트라 엑티브 납기 10일", "스타일컬러 납기 10일","엑티브, 스타일컬러  Crizal코팅"]
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67", "1.74 - 납기2주"];

export default function MultifocalLensSupreme() {
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
    <div className="relative min-h-screen pb-36 bg-gray-900">
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
          const isE3 = lens.productName === "피지오 KAN";
          const isE4 = lens.productName === "바리락스 XR 디자인";
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
                <div className="absolute left-6 -top-4 bg-yellow-400 text-white font-extrabold px-5 py-1 rounded-full shadow-xl text-sm tracking-wide border-2 border-yellow-600 animate-bounce whitespace-nowrap z-20">
                  전문가 추천
                </div>
              )}

              {isE4 && (
                <div className="absolute right-6 -top-4 bg-pink-500 text-white font-extrabold px-4 py-1 rounded-full shadow-xl text-sm tracking-wide border-2 border-pink-600 animate-bounce whitespace-nowrap z-20">
                  구매 만족도 1위
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
                  hasLink ? "cursor-pointer hover:bg-green-200" : "opacity-60 cursor-not-allowed"
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
                  {!hasLink && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">준비중</span>
                  )}
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

