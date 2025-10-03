import React from "react";
import { useNavigate } from "react-router-dom";

export default function Multifocal_CH() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6">
      {/* 로고 클릭 시 홈으로 이동 */}
      <div
        className="bg-white rounded-xl shadow p-4 w-fit mx-auto mb-6 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/images/이노티로고.jpg" alt="이노티안경 로고" className="h-16" />
      </div>

      <h1 className="text-2xl font-bold text-center mb-6">Progressive lens</h1>

      {/* 버튼: 모두 모달 없이 12mm(R) 경로로 바로 이동 */}
      <div className="flex flex-wrap justify-center gap-6 px-4 max-w-md mx-auto">
        {/* 클리어 → 12mm */}
        <button
          className="aspect-square w-40 rounded-xl bg-gradient-to-br from-blue-200 to-blue-100/80 backdrop-blur-md
                     border border-blue-300 shadow-xl font-semibold text-blue-900 text-lg flex items-center justify-center"
          onClick={() => navigate("/multifocal-lens")} // R-12mm
        >
          클리어
        </button>

        {/* 착색 다초점 → 12mm(R) */}
        <button
          className="aspect-square w-40 rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-100/80 backdrop-blur-md
                     border border-blue-300 shadow-xl font-semibold text-yellow-900 text-lg flex items-center justify-center"
          onClick={() => navigate("/Progressive_tinted_R")} // R-12mm
        >
          착색 다초점
        </button>

        {/* 변색 다초점 → 12mm(R) */}
        <button
          className="aspect-square w-40 rounded-xl bg-gradient-to-br from-purple-200 to-purple-100/80 backdrop-blur-md
                     border border-blue-300 shadow-xl font-semibold text-purple-900 text-lg flex items-center justify-center"
          onClick={() => navigate("/Progressive_photo_R")} // R-12mm
        >
          변색 다초점
        </button>

        {/* 관리자(기존 tinted 맵핑) → 12mm */}
        <button
          className="aspect-square w-40 rounded-xl bg-gradient-to-br from-emerald-200 to-emerald-100/80 backdrop-blur-md
                     border border-blue-300 shadow-xl font-semibold text-emerald-900 text-lg flex items-center justify-center"
          onClick={() => navigate("/multifocal-lens")} // R-12mm
        >
          관리자
        </button>
      </div>
    </div>
  );
}
