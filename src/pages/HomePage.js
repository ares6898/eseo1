import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6">
      <div className="bg-white rounded-xl shadow p-4 w-fit mx-auto mb-6">
        <img src="/images/이노티로고.jpg" alt="이노티안경 로고" className="h-16" />
      </div>
      <h1 className="text-2xl font-bold text-center mb-6">이노티안경 이천증포점</h1>

      <div className="flex justify-center gap-8 mb-8">
        <button
          className="rounded-xl bg-blue-100 px-10 py-10 shadow-md hover:shadow-lg text-center font-semibold text-blue-800 text-lg"
          onClick={() => navigate("/stock-lens")}
        >
          STOCK LENS<br />
        </button>
        <button
          className="rounded-xl bg-emerald-100 px-14 py-10 shadow-md hover:shadow-lg text-center font-semibold text-emerald-800 text-lg"
          onClick={() => navigate("/rx-lens")}
        >
          RX LENS<br />
        </button>
      </div>

      <div className="mx-auto max-w-xl px-4">
        <p className="rounded-xl bg-blue-500 p-4 text-white text-center shadow text-base font-semibold">
          고객님의 눈을 보호하고, 시력을 교정하는 안경렌즈는 <br /> [ 의료기기 1등급 ] 입니다️
        </p>
      </div>
	        {/* 우측 하단 관리자 임시 버튼 */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-black bg-opacity-80 text-white px-5 py-3 rounded-full shadow-xl text-xs font-semibold hover:bg-opacity-100 transition-all"
        onClick={() => navigate("/multifocal-lens")}
        style={{ letterSpacing: "0.08em" }}
      >
        🔒 관리자 (다초점 테스트)
      </button>

    </div>
  );
}
