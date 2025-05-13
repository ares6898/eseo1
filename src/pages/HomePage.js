import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-6">이노티안경 이천증포점</h1>

      <div className="grid grid-cols-2 gap-4 mb-8 px-4">
        <button
          className="rounded-xl bg-blue-100 aspect-square shadow-md hover:shadow-lg text-center font-semibold text-blue-800 text-lg flex items-center justify-center flex-col"
          onClick={() => navigate("/stock-lens")}
        >
          STOCK LENS<br /><span className="text-sm">여벌렌즈</span>
        </button>
        <button
          className="rounded-xl bg-emerald-100 aspect-square shadow-md hover:shadow-lg text-center font-semibold text-emerald-800 text-lg flex items-center justify-center flex-col"
        >
          RX LENS<br /><span className="text-sm">주문렌즈</span>
        </button>
      </div>

      <div className="mx-auto max-w-xl px-4">
        <p className="rounded-xl bg-white p-4 text-gray-600 text-center shadow text-sm">
          고객님의 눈을 보호하고, 시력을 교정하는 안경렌즈는 의료기기 1등급 입니다
        </p>
      </div>
    </div>
  );
}
