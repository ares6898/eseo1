
import React from "react";

const lensTypes = [
  {
    type: "실속형",
    name: "에실로 이지핏",
    logo: "/logos/essilor.png", // 임시 경로 (없으면 빈 div로)
    discount: "15%",
    color: "bg-gray-50 text-gray-900 border-gray-200",
  },
  {
    type: "보급형",
    name: "바리락스 리버티",
    logo: "/logos/varilux.png",
    discount: "20%",
    color: "bg-blue-50 text-blue-900 border-blue-200",
  },
  {
    type: "고급형",
    name: "호야 뉴럭스",
    logo: "/logos/hoya.png",
    discount: "25%",
    color: "bg-yellow-50 text-yellow-900 border-yellow-200",
  },
  {
    type: "프리미엄",
    name: "바리락스 X 퍼포먼스",
    logo: "/logos/varilux-x.png",
    discount: "30%",
    color: "bg-red-50 text-red-900 border-red-200",
  },
];

export default function MultifocalLensPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-8 text-blue-900">다초점렌즈 한눈에 비교</h2>
      <div className="flex gap-6">
        {lensTypes.map((item) => (
          <button
            key={item.type}
            className={
              "w-56 h-64 rounded-2xl shadow-lg border-2 flex flex-col items-center justify-center p-5 transition hover:scale-105 duration-200 " +
              item.color
            }
            // onClick={() => ...} // 추후 상세 팝업 연결
          >
            <div className="w-16 h-16 flex items-center justify-center mb-3">
              {item.logo ? (
                <img src={item.logo} alt={item.name + " 로고"} className="object-contain h-16" />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded-full" />
              )}
            </div>
            <div className="text-lg font-extrabold mb-1">{item.type}</div>
            <div className="text-base font-semibold mb-1">{item.name}</div>
            <div className="text-xl font-bold mt-2">{item.discount} 할인</div>
          </button>
        ))}
      </div>
    </div>
  );
}
