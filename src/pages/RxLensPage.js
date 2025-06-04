import React from "react";
import { useNavigate } from "react-router-dom";

export default function RxLensPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* 상단 뒤로가기 / 홈 버튼 */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate(-1)} className="text-blue-700 font-semibold">
          ← 뒤로가기
        </button>
        <button onClick={() => navigate("/")} className="text-blue-700 font-semibold">
          🏠 홈
        </button>
      </div>

      {/* 로고 (클릭 시 홈으로) */}
      <div
        className="bg-white rounded-xl shadow p-4 w-fit mx-auto mb-6 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/images/이노티로고.jpg" alt="이노티안경 로고" className="h-16" />
      </div>

      <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">RX LENS</h2>

      {/* 버튼 영역 */}
      <div className="flex justify-center gap-8 mb-8">
        {/* Progressive lens 버튼: 클릭 시 /Multifocal_CH 로 이동 */}
        <button
          className="aspect-square w-36 rounded-xl bg-gradient-to-br from-blue-200 to-blue-100/80 backdrop-blur-md 
                     border border-blue-300 shadow-xl text-center font-semibold text-blue-900 text-sm 
                     flex items-center justify-center"
          onClick={() => navigate("/Multifocal_CH")}
        >
          Progressive<br />lens
        </button>

        {/* Individual lens 버튼 (기존대로) */}
        <button
          className="aspect-square w-36 rounded-xl bg-gradient-to-br from-emerald-200 to-emerald-100/80 backdrop-blur-md 
                     border border-emerald-300 shadow-xl text-center font-semibold text-emerald-900 text-sm 
                     flex items-center justify-center"
        >
          Individual<br />lens
        </button>
      </div>
    </div>
  );
}
