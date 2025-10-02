import React from "react";
import { useNavigate } from "react-router-dom";

const lensTypes = [
  {
    type: "실속형 - 국산",
    name: "케미렌즈 PB",
    color: "bg-gray-100 text-gray-700 border-gray-200",
    path: "/multifocal-lens/basic",
    viewImage: "/images/chemi-logo.jpg",
    pros: [
      "저렴한 가격대",
      "보조용, 빠른교체"
     
    ]
  },
  {
    type: "보급형 - 프랑스",
    name: "에실로 PB",
    color: "bg-blue-50 text-blue-800 border-blue-200",
    path: "/multifocal-lens/standard",
    viewImage: "/logos/essilor.jpg",
    pros: [
      "준수한 가격과 성능",
      "PB제품 최대할인"
    ]
  },
  {
    type: "고급형 - 일본",
    name: "니콘",
    color: "bg-blue-900 text-white ring-2 ring-yellow-300 shadow-2xl border-blue-900",
    badge: "고객 선호도 1위",
    path: "/multifocal-lens/advanced",
    viewImage: "/logos/nikon.jpg", // 보유 자산에 맞게 경로 교체 가능
    pros: [
      "세계 최고수준의 기술력",
	  "수차제어 부드러운 설계",
      "비구면 설계 + NODE기술 "
    ]
  },
  {
    type: "프리미엄 - 프랑스",
    name: "바리락스",
    color: "bg-gray-900 text-yellow-100 border-yellow-200",
	badge: "전문가 추천",
    path: "/multifocal-lens/supreme",
    viewImage: "/logos/VX.jpg",
    pros: [
      "세계 최초 다초점브랜드",
      "전세계 판매 1위",
      "한국인 전용 다초점 보유",
      "누진다초점의 세계표준"
    ]
  }
];

// (선택) 기존 문구 유지: 타입별 할인 안내 레이블
const discountLabel = (type) => {
  if (type === "실속형 - 국산" || type === "보급형 - 프랑스") return "50% 할인";
  if (type === "고급형 - 일본") return "20%~50% 할인";
  if (type === "프리미엄 - 프랑스") return "30%~50%할인";
  return "";
};

export default function MultifocalLensPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center pb-24">
      <h2 className="text-3xl font-bold mb-10 text-blue-900">다초점렌즈 한눈에 비교</h2>

      <div className="flex gap-6 mb-10 flex-wrap justify-center">
        {lensTypes.map((item) => {
          const isBest = item.type === "고급형 - 일본";

          return (
            <button
              key={item.type}
              className={
                "w-[260px] min-h-[540px] rounded-2xl shadow-lg border-2 flex flex-col items-center justify-start p-5 transition hover:scale-105 duration-200 relative " +
                item.color +
                (isBest ? " animate-pulse" : "")
              }
              onClick={() => navigate(item.path)}
              style={isBest ? { zIndex: 10 } : {}}
              aria-label={`${item.type} - ${item.name}로 이동`}
            >
              {item.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-blue-900 text-sm font-bold px-3 py-1 rounded-full shadow ring-2 ring-blue-900 z-10">
                  {item.badge}
                </span>
              )}

              <div className="text-xl font-extrabold mb-1">{item.type}</div>
              <div className="text-lg font-semibold mb-1 text-center">{item.name}</div>
              <div className="text-lg font-bold mb-2">{discountLabel(item.type)}</div>

              {/* 시야/브랜드 이미지 */}
              <div className="w-full overflow-hidden rounded shadow border border-white/20" style={{ height: "200px" }}>
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
                    <li key={i} className="leading-snug">{p}</li>
                  ))}
                </ul>
              </div>

              {/* 카드 하단 정렬 보정 */}
              <div className="mt-auto" />
            </button>
          );
        })}
      </div>

      {/* 하단 바: 뒤로가기만 유지 (가격/굴절률 선택 제거) */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner flex justify-center gap-4 py-5 z-30">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-xl font-bold text-xl shadow border-2 bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
        >
          ← 뒤로가기
        </button>
		<button
         
            className="px-6 py-3 rounded-xl font-bold text-lg shadow border-2 bg-yellow-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          >
            클리어
          </button>
      </div>
    </div>
  );
}
