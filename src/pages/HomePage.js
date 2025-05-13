import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">이노티안경 이천증포점</h1>
      <div className="flex gap-6 mb-6">
        <button
          className="px-10 py-6 rounded-full bg-blue-500 text-white text-xl shadow-md hover:bg-blue-600"
          onClick={() => navigate("/stock-lens")}
        >
          STOCK LENS<br /><span className="text-sm">여벌렌즈</span>
        </button>
        <button
          className="px-10 py-6 rounded-full bg-green-500 text-white text-xl shadow-md hover:bg-green-600"
        >
          RX LENS<br /><span className="text-sm">주문렌즈</span>
        </button>
      </div>
      <p className="text-lg font-semibold text-center text-yellow-300">
        고객님의 눈을 보호하고, 시력을 교정하는 안경렌즈는 의료기기 1등급 입니다
      </p>
    </div>
  );
}
