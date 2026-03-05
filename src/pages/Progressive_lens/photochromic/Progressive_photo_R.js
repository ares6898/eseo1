import React from "react";
import { useNavigate } from "react-router-dom";

const lensTypes = [
  {
    type: "프리미엄 - 프랑스",
    name: "바리락스",
    color: "bg-gray-900 text-yellow-100 border-yellow-200",
    badge: "전문가 추천 🌟",
    badgeClasses: "bg-amber-300 text-slate-900 ring-amber-500", // 골드톤(프리미엄)
    path: "/Progressive_photo_4Supreme",
    viewImage: "/logos/VX.jpg",
    pros: [
      "세계 최초 다초점브랜드",
      "전세계 판매 1위",
      "한국인 전용 다초점 보유",
      "누진다초점의 세계표준"
    ]
  },
  {
    type: "고급형 - 일본",
    name: "니콘",
    color: "bg-blue-800 text-white ring-2 ring-yellow-300 shadow-xl border-blue-800",
    badge: "선호도 1위 👍",
    badgeClasses: "bg-sky-300 text-slate-900 ring-sky-700", // 프리미엄/신뢰 블루
    path: "/Progressive_photo_3Advanced",
    viewImage: "/logos/nikon.jpg",
    pros: [
      "세계 최고수준의 기술력",
      "수차제어 부드러운 설계",
      "비구면 설계 + NODE기술 "
    ]
  },
  {
    type: "보급형 - 프랑스",
    name: "에실로 PB",
    color: "bg-blue-50 text-blue-800 border-blue-200",
    badge: "균형 추천 ⭐",
    badgeClasses: "bg-gray-200 text-gray-800 ring-gray-300", // 중립/톤다운
    path: "/Progressive_photo_2Standard",
    viewImage: "/logos/essilor.jpg",
    pros: ["준수한 가격과 성능", "PB제품 최대할인"]
  },
  {
    type: "실속형 - 국산",
    name: "케미렌즈 PB",
    color: "bg-gray-100 text-gray-700 border-gray-200",
    badge: "가성비 추천 💰",
    badgeClasses: "bg-gray-100 text-gray-700 ring-gray-200", // 연한 그레이
    path: "/Progressive_photo_1Basic",
    viewImage: "/images/chemi-logo.jpg",
    pros: ["저렴한 가격대", "보조용, 빠른교체"]
  }
];

// 타입별 할인 안내 레이블
const discountLabel = (type) => {
  if (type === "실속형 - 국산" ) return "50% 할인";
  if (type === "보급형 - 프랑스") return "35%~50% 할인";
  if (type === "프리미엄 - 프랑스") return "30%~50%할인";
  return "";
};

export default function MultifocalLensPage() {
  const navigate = useNavigate();

  // 안내 버튼(역순: 안내3 → 안내2 → 안내1)
  const infoButtons = [
    {
      text: "성능과 품질이 중요한 고객님", // 안내3
      color:
        "bg-gradient-to-br from-green-100 to-green-50 text-green-900 border-green-200",
      icon: "🌟",
      width: "w-[260px]",
      animate: ""
    },
    {
      text: "가격과 성능, 품질이 모두 중요한 고객님", // 안내2
      color:
        "bg-gradient-to-br from-blue-100 to-blue-50 text-blue-900 border-blue-200",
      icon: "⚖️",
      width: "w-[544px]",
      animate: "animate-pulse" // 은은한 하이라이트
    },
    {
      text: "가격이 제일 중요한 고객님", // 안내1
      color:
        "bg-gradient-to-br from-yellow-100 to-yellow-50 text-yellow-900 border-yellow-200",
      icon: "💰",
      width: "w-[260px]",
      animate: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center pb-24">
      {/* 상단 안내 버튼 */}
      <div className="flex gap-6 mb-10 flex-wrap justify-center">
        {infoButtons.map((item, idx) => (
          <button
            key={`info-${idx}`}
            type="button"
            disabled
            aria-disabled="true"
            className={[
              item.width,
              "h-16 rounded-xl shadow border flex items-center justify-center gap-2",
              "cursor-default select-none",
              "px-4 text-base font-semibold text-center leading-snug",
              item.color,
              item.animate
            ].join(" ")}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="whitespace-nowrap">{item.text}</span>
          </button>
        ))}
      </div>

      {/* 렌즈 브랜드 카드들 (바리락스 → 니콘 → 에실로 → 케미) */}
      <div className="flex gap-6 mb-10 flex-wrap justify-center">
        {lensTypes.map((item) => {
          const isNikon = item.name === "니콘";
          const isVarilux = item.name === "바리락스";

          return (
            <button
              key={item.type}
              className={[
                "w-[260px] min-h-[540px] rounded-2xl border-2",
                "flex flex-col items-center justify-start p-5",
                "transition hover:scale-105 duration-200 relative",
                "shadow-lg", // 기본 그림자
                item.color,
                // 니콘만 은은한 강조(더 느린 펄스)
                isNikon ? "animate-[pulse_3s_ease-in-out_infinite]" : "",
                // 바리락스만 골드 링 글로우(고급감)
                isVarilux
                  ? "ring-2 ring-amber-400/60 ring-offset-2 ring-offset-gray-900"
                  : ""
              ].join(" ")}
              onClick={() => navigate(item.path)}
              aria-label={`${item.type} - ${item.name}로 이동`}
            >
              {/* 상단 추천 뱃지: 브랜드별 색상 차등 적용 */}
              {item.badge && (
                <span
                  className={[
                    "absolute -top-3 left-1/2 -translate-x-1/2",
                    "text-sm font-bold px-3 py-1 rounded-full shadow",
                    "ring-2 z-10",
                    item.badgeClasses
                  ].join(" ")}
                >
                  {item.badge}
                </span>
              )}

              <div className="text-xl font-extrabold mb-1">{item.type}</div>
              <div className="text-lg font-semibold mb-1 text-center">{item.name}</div>
              <div className="text-lg font-bold mb-2">{discountLabel(item.type)}</div>

              {/* 브랜드 이미지 */}
              <div
                className="w-full overflow-hidden rounded shadow border border-white/20"
                style={{ height: "200px" }}
              >
                <img
                  src={item.viewImage}
                  alt={`${item.name} 시야/브랜드 이미지`}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* 주요 장점 */}
              <div className="mt-4 w-full bg-white rounded-xl border px-4 py-3 text-sm text-gray-800 shadow">
                <div className="font-bold text-blue-900 mb-2">브랜드 설명</div>
                <ul className="list-disc ml-4 space-y-1 text-left">
                  {item.pros.map((p, i) => (
                    <li key={i} className="leading-snug">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto" />
            </button>
          );
        })}
      </div>

      {/* 하단 바 */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner flex justify-center gap-4 py-5 z-30">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-xl font-bold text-xl shadow border-2 bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
        >
          ← 뒤로가기
        </button>
        <button
          className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-purple-300 text-gray-700 border-gray-300 hover:bg-gray-200"
        >
          변색
        </button>
      </div>
    </div>
  );
}

