import React, { useState } from "react";

// 1. 각 제품 객체에 descImage(설명팝업 이미지), descText(설명팝업 텍스트), infoUrl(외부 링크) 추가!
const sampleLenses = [
  {
    brandLogo: "/images/chemi-logo.jpg",
    productName: "Ino C0",
    // ✅ Tailwind 오타 수정: bg-ye-200 → bg-yellow-200
    badge: { text: "최저가", bg: "bg-yellow-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["최저가"],
    recommend: ["부담없는 가격", "저가입도"],
    lensImage: "/images/C1.jpg",
    descImage: "/images/ampop.png",
    descText: ".",
    // 🔗 제품별 외부 설명 URL (원하는 주소로 교체)
    infoUrl: null, 
    prices: [
      { refraction: "1.50", regular: 140000, sale: 79000 },
      { refraction: "1.60", regular: 190000, sale: 99000 },
      { refraction: "1.67", regular: 255000, sale: 129000 },
      { refraction: "1.74", regular: 320000, sale: 159000 }
    ],
    discountRate: 0.8,
    options: ["블루라이트코팅 2만원추가"]
  },
  {
    brandLogo: "/images/chemi-logo.jpg",
    productName: "Ino C1",
    badge: { text: "실속형", bg: "bg-lime-200", color: "text-lime-800", border: "border-lime-300" },
    features: ["실속누진다초점"],
    recommend: ["부담없는 가격", "가성비"],
    lensImage: "/images/E2.jpg",
    descImage: "/images/desc-dp.jpg",
    descText: "누진 초보도 빠르게 적응! 개인맞춤 설계로 한 단계 높은 편안함을 느낄 수 있는 프리미엄KR-IND.",
    
    prices: [
      { refraction: "1.50", regular: 255000, sale: 119000 },
      { refraction: "1.60", regular: 315000, sale: 159000 },
      { refraction: "1.67", regular: 355000, sale: 179000 },
      { refraction: "1.74", regular: 510000, sale: 239000 }
    ],
    discountRate: 0.7,
    options: ["블루라이트코팅 2만원추가"]
  },
  {
    brandLogo: "/images/chemi-logo.jpg",
    productName: "Ino C4",
    badge: { text: "고급형", bg: "bg-orange-200", color: "text-orange-800", border: "border-orange-300" },
    features: ["올라운드"],
    recommend: ["실내외 모든활동", "안정적인 성능"],
    lensImage: "/images/DP.jpg",
    descImage: "/images/desc-ba.jpg",
    descText: "업계 추천 1위! 한국인 시야에 최적화된 설계와 탁월한 적응력으로 많은 사랑을 받고 있는 발란시스 KR.",
    
    prices: [
      { refraction: "1.50", regular: 325000, sale: 149000 },
      { refraction: "1.60", regular: 380000, sale: 179000 },
      { refraction: "1.67", regular: 465000, sale: 239000 },
      { refraction: "1.74", regular: 610000, sale: 289000 }
    ],
    discountRate: 0.7,
    options: ["블루라이트코팅 2만원추가"]
  },
  {
    brandLogo: "/images/chemi-logo.jpg",
    productName: "Ino C6",
    badge: { text: "개인맞춤 정밀광학", bg: "bg-sky-200", color: "text-sky-800", border: "border-sky-300" },
    features: ["최고의 성능"],
    recommend: ["뛰어난 적응성능","광대역 넓은시야"],
    lensImage: "/images/BIND.jpg",
    descImage: "/images/desc-e4.jpg",
    descText: "한국인 처방 데이터로 최적화된 호야 다이나믹 써미트KR. 선명하고 빠른 적응력, 높은 내구성이 특징!",
    
    prices: [
      { refraction: "1.50", regular: 385000, sale: 199000},
      { refraction: "1.60", regular: 455000, sale: 229000},
      { refraction: "1.67", regular: 530000, sale: 299000},
      { refraction: "1.74", regular: 660000, sale: 419000}
    ],
    discountRate: 0.5,
    options: ["블루라이트코팅 2만원추가"]
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67", "1.74"];

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
    <div className="relative min-h-screen pb-36 bg-green-200">
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
          const isE4 = lens.productName === "Ino C6";
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
                  C시리즈 최고급렌즈
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
            className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-blue-100 
            text-gray-700 border-gray-300 hover:bg-gray-200"
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


