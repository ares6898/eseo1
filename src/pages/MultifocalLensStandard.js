import React, { useState } from "react";

const sampleLenses = [
  {
    brandLogo: "/logos/essilor.png",
    productName: "에실로 E1",
    features: [
      "기본형 내면설계",
      "가성비 추천",
      "기본 코팅"
    ],
    recommend: [
      "경제적인 가격을 찾는 고객",
      "기본 시력교정만 원하는 분"
    ],
    lensImage: "/images/e1-demo.jpg",
    prices: [
      { refraction: "1.50", regular: 320000 },
      { refraction: "1.60", regular: 380000 }
    ],
    discountRate: 0.5,
    discountInfo: "전 제품 50% 일괄 할인",
    options: [
      "블루라이트 코팅 30,000원 추가",
      "착색 20,000원 추가",
      "변색 옵션 불가"
    ]
  },
  {
    brandLogo: "/logos/essilor.png",
    productName: "에실로 E2",
    features: [
      "중급형 내면설계, 난시 교정 강화",
      "이중 코팅, 내구성 보강"
    ],
    recommend: [
      "난시가 있거나 야간 운전이 잦은 분",
      "한 단계 더 나은 내구성과 품질을 원하는 고객"
    ],
    lensImage: "/images/e2-demo.jpg",
    prices: [
      { refraction: "1.50", regular: 390000 },
      { refraction: "1.60", regular: 470000 },
      { refraction: "1.67", regular: 550000 }
    ],
    discountRate: 0.5,
    discountInfo: "전 제품 50% 일괄 할인",
    options: [
      "블루라이트 코팅 30,000원 추가",
      "착색 20,000원 추가",
      "변색 옵션 1.60/1.67만 가능 (추가 200,000원)"
    ]
  },
  {
    brandLogo: "/logos/essilor.png",
    productName: "에실로 E3",
    features: [
      "프리미엄 내면설계, 넓은 시야",
      "왜곡 최소화, 고강도 코팅"
    ],
    recommend: [
      "선명한 시야와 넓은 시야폭이 중요한 고객",
      "최적의 적응감과 내구성 모두 원하는 분"
    ],
    lensImage: "/images/e3-demo.jpg",
    prices: [
      { refraction: "1.50", regular: 480000 },
      { refraction: "1.60", regular: 570000 },
      { refraction: "1.67", regular: 710000 }
    ],
    discountRate: 0.5,
    discountInfo: "전 제품 50% 일괄 할인",
    options: [
      "블루라이트 코팅 30,000원 추가",
      "착색 20,000원 추가",
      "변색 옵션 1.60/1.67만 가능 (추가 200,000원)"
    ]
  },
  {
    brandLogo: "/logos/essilor.png",
    productName: "에실로 E4",
    features: [
      "최상급 내면설계, 맞춤형 도수보정",
      "최고급 수퍼코팅, 내구성 극대화"
    ],
    recommend: [
      "장시간 착용하는 고객",
      "최고 성능과 내구성을 동시에 원하는 분"
    ],
    lensImage: "/images/e4-demo.jpg",
    prices: [
      { refraction: "1.50", regular: 620000 },
      { refraction: "1.60", regular: 750000 },
      { refraction: "1.67", regular: 860000 }
    ],
    discountRate: 0.5,
    discountInfo: "전 제품 50% 일괄 할인",
    options: [
      "블루라이트 코팅 30,000원 추가",
      "착색 20,000원 추가",
      "변색 옵션 1.60/1.67만 가능 (추가 200,000원)"
    ]
  }
];

const refractiveIndexes = ["1.50", "1.60", "1.67"];

export default function MultifocalLensDetailAll() {
  const [selectedRef, setSelectedRef] = useState("1.50");

  return (
    <div className="relative min-h-screen pb-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {sampleLenses.map((lens, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-5 flex flex-col gap-4 border hover:shadow-2xl transition"
          >
            {/* 브랜드/제품명 */}
            <div className="flex items-center gap-3 mb-1">
              <img
                src={lens.brandLogo}
                alt="브랜드 로고"
                className="h-14 w-14 object-contain rounded bg-gray-100 p-2"
              />
              <div>
                <div className="text-lg font-bold">{lens.productName}</div>
                <ul className="mt-2 text-gray-600 text-xs list-disc ml-4 space-y-1">
                  {lens.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 추천고객 */}
            <div className="bg-green-100 rounded-md px-3 py-2 text-[15px] leading-snug text-green-900 font-semibold shadow mb-1 flex flex-col gap-1">
              <div className="mb-1 font-bold text-green-800">추천 고객</div>
              {lens.recommend.map((r, i) => (
                <div key={i}>👤 {r}</div>
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

            {/* 가격표 */}
            <div className="bg-gray-50 rounded-lg p-3 mb-1 shadow">
              <div className="flex justify-between text-xs font-semibold text-gray-600 border-b pb-2 mb-2">
                <span>굴절률</span>
                <span>정가</span>
                <span className="text-red-600">할인가</span>
              </div>
              <div className="space-y-1">
                {lens.prices.map((row) => {
                  const isActive = row.refraction === selectedRef;
                  const sale = Math.round(row.regular * lens.discountRate);
                  return (
                    <div
                      key={row.refraction}
                      className={
                        "flex justify-between items-center py-1 px-2 rounded transition-all duration-100 " +
                        (isActive
                          ? "bg-yellow-100 font-bold text-orange-900 shadow"
                          : "")
                      }
                    >
                      <span>{row.refraction}</span>
                      <span>{row.regular.toLocaleString()}원</span>
                      <span className={
                        "text-base " +
                        (isActive ? "text-orange-600" : "text-red-600")
                      }>
                        {sale.toLocaleString()}원
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 text-xs text-red-500 font-bold text-center">
                {lens.discountInfo}
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
        ))}
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
              onClick={() => setSelectedRef(idx)}
            >
              굴절률 {idx}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
