import React, { useState } from "react";

const sampleLenses = [
  {
    brandLogo: "/logos/essilor.jpg",
    productName: "에실로 E1",
    badge: null,
    features: [
      "초기 노안용 기본내면누진",
      "합리적인 금액"
    ],
    recommend: [
      "가성비 높은 제품",
      "기본에 충실한 렌즈"
    ],
    lensImage: "/images/e1-demo.jpg",
    prices: [
      { refraction: "1.50", regular: 320000 },
      { refraction: "1.60", regular: 380000 }
    ],
    discountRate: 0.5,
    options: [
      "블루라이트 코팅 30,000원 추가",
      "착색 3만원 추가",
      "변색 옵션 불가"
    ]
  },
  {
    brandLogo: "/logos/essilor.jpg",
    productName: "에실로 E2",
    badge: { text: "스마트기기 특화", bg: "bg-sky-200", color: "text-sky-800", border: "border-sky-300" },
    features: [
      "부드러운 중간시야",
      "디지털 시생활 특화렌즈"
    ],
    recommend: [
      "디지털핏 옵티마이저 기능",
      "오랜 근업시 더 편안하게"
    ],
    lensImage: "/images/e2-demo.jpg",
    prices: [
      { refraction: "1.50", regular: 390000 },
      { refraction: "1.60", regular: 470000 },
      { refraction: "1.67", regular: 550000 }
    ],
    discountRate: 0.5,
    options: [
      "퓨어블루 5만원 추가(1.60이상)",
      "착색 3만원 추가",
      "변색 옵션 20만원 추가 (1.60이상)"
    ]
  },
  {
    brandLogo: "/logos/essilor.jpg",
    productName: "에실로 E3",
    badge: { text: "쉽고빠른적응", bg: "bg-lime-200", color: "text-lime-800", border: "border-lime-300" },
    features: [
      "부드러운 시선전환, 빠른적응",
      "일상생활을 편안하게"
    ],
    recommend: [
      "소프트 와이드 테크놀로지",
      "원시, 난시 복잡한 도수 특화"
    ],
    lensImage: "/images/e3-demo.jpg",
    prices: [
      { refraction: "1.50", regular: 480000 },
      { refraction: "1.60", regular: 570000 },
      { refraction: "1.67", regular: 710000 }
    ],
    discountRate: 0.5,
    options: [
      "퓨어블루 5만원 추가(1.60이상)",
      "착색 3만원 추가",
      "변색 옵션 20만원 추가 (1.60이상)"
    ]
  },
  {
    brandLogo: "/logos/essilor.jpg",
    productName: "에실로 E4",
    badge: { text: "양안 도수 다름", bg: "bg-orange-200", color: "text-orange-800", border: "border-orange-300" },
    features: [
      "양안시 기술력",
      "어떠한 도수도 빠르게 적응"
    ],
    recommend: [
      "비전스캔 테크놀로지 - 양안시",
      "복잡한 도수 + 부등시 특화"
    ],
    lensImage: "/images/e4-demo.jpg",
    prices: [
      { refraction: "1.50", regular: 620000 },
      { refraction: "1.60", regular: 750000 },
      { refraction: "1.67", regular: 860000 }
    ],
    discountRate: 0.5,
    options: [
      "퓨어블루 5만원 추가(1.60이상)",
      "착색 3만원 추가",
      "변색 옵션 20만원 추가 (1.60이상)"
    ]
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67"];

export default function MultifocalLensDetailAll() {
  const [selectedRef, setSelectedRef] = useState("");

  return (
    <div className="relative min-h-screen pb-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {sampleLenses.map((lens, idx) => {
          const priceRow = selectedRef
            ? lens.prices.find(p => p.refraction === selectedRef)
            : null;
          const regular = priceRow ? priceRow.regular : null;
          const sale = priceRow ? Math.round(priceRow.regular * lens.discountRate) : null;
          const discountAmount = priceRow ? priceRow.regular - sale : null;

          // E3 카드에만 특별효과
          const isE3 = lens.productName === "에실로 E3";

          return (
            <div
              key={idx}
              className={
                "relative bg-white rounded-2xl p-5 flex flex-col gap-4 border transition " +
                (isE3
                  ? "ring-4 ring-emerald-300/80 scale-105 shadow-2xl animate-pulse"
                  : "shadow-xl hover:shadow-2xl")
              }
              style={{ zIndex: isE3 ? 5 : 1 }}
            >
              {/* E3만 띠배너 (로고 바로 위, 카드 왼쪽 상단) */}
              {isE3 && (
                <div
                  className="
                    absolute
                    left-6
                    -top-4
                    bg-emerald-400
                    text-white
                    font-extrabold
                    px-5
                    py-1
                    rounded-full
                    shadow-xl
                    text-sm
                    tracking-wide
                    border-2
                    border-emerald-600
                    animate-bounce
                    whitespace-nowrap
                    z-20
                  "
                >
                  고객 선택 1위
                </div>
              )}

              {/* 브랜드/제품명+배너 */}
              <div className="flex items-center gap-2 mb-1 flex-nowrap">
                <img
                  src={lens.brandLogo}
                  alt="브랜드 로고"
                  className="h-14 w-14 object-contain rounded bg-gray-100 p-2"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 flex-nowrap">
                    <div className="text-lg font-bold text-blue-900 whitespace-nowrap">{lens.productName}</div>
                    {lens.badge && lens.badge.text && (
                      <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs font-bold ${lens.badge.bg} ${lens.badge.color} ${lens.badge.border} shadow flex-shrink-0 whitespace-nowrap`} style={{fontSize:"12px"}}>
                        {lens.badge.text}
                      </span>
                    )}
                  </div>
                  <ul className="mt-2 text-gray-600 text-xs list-disc ml-4 space-y-1">
                    {lens.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 제품 설명 */}
              <div className="bg-green-100 rounded-md px-3 py-2 text-[14px] leading-snug text-green-900 font-semibold shadow mb-1 flex flex-col gap-1">
                <div className="mb-1 font-bold text-green-800">제품 설명</div>
                {lens.recommend.map((r, i) => (
                  <div key={i}>⏩ {r}</div>
                ))}
              </div>

              {/* 렌즈 이미지 */}
              <div className="flex justify-center my-1">
                <img
                  src={lens.lensImage}
                  alt="렌즈 시야 예시"
                  className="h-24 rounded-md shadow border border-gray-200"
                />
              </div>

              {/* 선택된 굴절률의 가격만 한 줄 출력 */}
              <div className="bg-gray-50 rounded-lg p-4 mb-1 shadow flex flex-col items-center">
                <div className="font-bold text-base text-gray-800 mb-2">
                  굴절률{" "}
                  <span className="text-blue-800">
                    {selectedRef || "-"}
                  </span>{" "}
                  가격
                </div>
                <div className="flex items-center gap-3 text-lg font-semibold">
                  {/* 정가 */}
                  <span
                    className={
                      "mr-1 whitespace-nowrap " +
                      (regular
                        ? "line-through text-gray-400 text-base"
                        : "text-gray-300 text-base")
                    }
                    style={{ fontSize: "15px" }}
                  >
                    {selectedRef
                      ? regular
                        ? `${regular.toLocaleString()}원`
                        : "–"
                      : "–"}
                  </span>
                  {/* 화살표 */}
                  <span className="text-2xl text-gray-400 mx-1 whitespace-nowrap">{'→'}</span>
                  {/* 할인가 */}
                  <span
                    className={
                      "whitespace-nowrap " +
                      (sale
                        ? "font-extrabold text-orange-600 text-xl"
                        : "text-gray-300 text-xl")
                    }
                    style={{ fontSize: "20px" }}
                  >
                    {selectedRef
                      ? sale
                        ? `${sale.toLocaleString()}원`
                        : "–"
                      : "–"}
                  </span>
                </div>
                {/* 할인금액 */}
                <div className="mt-2 text-xs text-blue-700 font-bold text-center">
                  {selectedRef
                    ? discountAmount !== null
                      ? `할인 금액: ${discountAmount.toLocaleString()}원`
                      : "–"
                    : "–"}
                </div>
              </div>

              {/* 옵션 안내 */}
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

      {/* 하단 고정 사이드바: 굴절률 선택 */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl border-t z-30 flex justify-center items-center gap-4 py-4">
        <div className="flex gap-2">
          {refractiveIndexes.map((idx) => (
            <button
              key={idx}
              className={
                "px-8 py-3 rounded-xl font-bold text-lg shadow border-2 transition-all duration-100 " +
                (selectedRef === idx
                  ? "bg-orange-600 text-white border-orange-600 scale-110"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-orange-50")
              }
              onClick={() =>
                setSelectedRef(selectedRef === idx ? "" : idx)
              }
            >
              굴절률 {idx}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
