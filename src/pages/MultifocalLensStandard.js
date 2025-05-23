import React from "react";

// 4가지 브랜드 샘플 데이터 (필요시 내용 수정 가능)
const sampleLenses = [
  {
    brandLogo: "/logos/nikon.png",
    productName: "프레지오 퍼스트",
    features: [
      "일본 니콘의 선명한 기술력",
      "동급 제품 중 가장 탁월한 선명함",
      "노드기술로 부드러운 시야 확보"
    ],
    lensImage: "/images/nikon-lens-demo.jpg",
    prices: [
      { refraction: "1.50", regular: "250,000", discount: "225,000" },
      { refraction: "1.60", regular: "330,000", discount: "297,000" },
      { refraction: "1.67", regular: "430,000", discount: "387,000" }
    ],
    discountInfo: "특별 할인 대상 10% 할인",
    options: [
      "블루라이트 코팅 30,000원",
      "착색 20,000원 / 변색 150,000원 추가 (1.60, 1.67 가능)"
    ]
  },
  {
    brandLogo: "/logos/hoya.png",
    productName: "앰플리튜드 클래식",
    features: [
      "일본 호야의 강한 내구성",
      "스크래치에 강하며 준수한 시야 확보"
    ],
    lensImage: "/images/hoya-lens-demo.jpg",
    prices: [
      { refraction: "1.50", regular: "180,000", discount: "162,000" },
      { refraction: "1.60", regular: "280,000", discount: "252,000" },
      { refraction: "1.67", regular: "380,000", discount: "342,000" }
    ],
    discountInfo: "특별 할인 대상 10% 할인 · 호야 풀컨트롤 코팅 50,000원 무상지원",
    options: [
      "블루라이트 코팅 30,000원",
      "착색 20,000원 / 변색 불가"
    ]
  },
  {
    brandLogo: "/logos/pentax.png",
    productName: "퍼스트 어드밴스",
    features: [
      "시선연동 맞춤설계 <인텔리핏 기술 탑재>",
      "스탠다드 대비 확장된 시야, 준수한 적응"
    ],
    lensImage: "/images/pentax-advance-demo.jpg",
    prices: [
      { refraction: "1.50", regular: "250,000", discount: "125,000" },
      { refraction: "1.60", regular: "310,000", discount: "155,000" },
      { refraction: "1.67", regular: "380,000", discount: "190,000" }
    ],
    discountInfo: "50% 할인, 추가할인 불가",
    options: [
      "블루라이트 코팅 30,000원",
      "착색 20,000원 / 변색 120,000원 추가 (1.50, 1.60, 1.67 가능)"
    ]
  },
  {
    brandLogo: "/logos/pentax.png",
    productName: "퍼스트 스탠다드",
    features: [
      "합리적인 가격",
      "기본형 설계"
    ],
    lensImage: "/images/pentax-standard-demo.jpg",
    prices: [
      { refraction: "1.50", regular: "210,000", discount: "105,000" },
      { refraction: "1.60", regular: "270,000", discount: "135,000" },
      { refraction: "1.67", regular: "330,000", discount: "165,000" },
      { refraction: "1.74", regular: "460,000", discount: "230,000" }
    ],
    discountInfo: "50% 할인, 추가할인 불가",
    options: [
      "블루라이트 코팅 30,000원",
      "착색 20,000원 / 변색 120,000원 추가 (1.50, 1.60, 1.67 가능)"
    ]
  }
];

export default function MultifocalLensDetailAll() {
  return (
    <div className="max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {sampleLenses.map((lens, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-2 border hover:shadow-2xl transition"
        >
          {/* 상단 브랜드/제품/로고 */}
          <div className="flex items-center gap-3 mb-1">
            <img
              src={lens.brandLogo}
              alt="브랜드 로고"
              className="h-12 w-12 object-contain rounded bg-gray-100 p-2"
            />
            <div>
              <div className="text-base font-bold">{lens.productName}</div>
              <div className="flex flex-col mt-1 text-gray-600 text-xs">
                {lens.features.map((f, i) => (
                  <span key={i}>• {f}</span>
                ))}
              </div>
            </div>
          </div>
          {/* 렌즈 이미지 */}
          <div className="flex justify-center my-2">
            <img
              src={lens.lensImage}
              alt="렌즈 시야 예시"
              className="h-24 rounded-md shadow border border-gray-200"
            />
          </div>
          {/* 가격표 */}
          <div className="bg-gray-50 rounded-lg p-2 mb-1">
            <div className="flex justify-between text-xs font-semibold text-gray-600 border-b pb-1 mb-1">
              <span>굴절률</span>
              <span>정가</span>
              <span className="text-red-600">할인가</span>
            </div>
            {lens.prices.map((row) => (
              <div key={row.refraction} className="flex justify-between items-center py-0.5">
                <span className="font-bold">{row.refraction}</span>
                <span>{parseInt(row.regular).toLocaleString()}원</span>
                <span className="font-bold text-base text-red-600">{parseInt(row.discount).toLocaleString()}원</span>
              </div>
            ))}
            <div className="mt-1 text-xs text-red-500 font-bold">{lens.discountInfo}</div>
          </div>
          {/* 옵션 안내 */}
          <div className="bg-blue-50 rounded p-2 text-xs text-blue-900">
            {lens.options.map((opt, i) => (
              <div key={i}>- {opt}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
