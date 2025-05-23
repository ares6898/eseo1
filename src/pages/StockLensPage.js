import React from "react";
import { useNavigate } from "react-router-dom";

export default function StockLensPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6">
      <div className="bg-white rounded-xl shadow p-4 w-fit mx-auto mb-6">
        <img src="/images/이노티로고.jpg" alt="이노티안경 로고" className="h-16 cursor-pointer" onClick={() => navigate("/")} />
      </div>
      <h1 className="text-2xl font-bold text-center mb-6">STOCK LENS </h1>

      <div className="flex flex-wrap justify-center gap-6 px-4 max-w-md mx-auto">
        <button
          className="rounded-xl bg-blue-100 aspect-square w-40 h-40 shadow-md hover:shadow-lg text-center font-semibold text-blue-800 text-lg flex items-center justify-center text-wrap p-4"
          onClick={() => navigate("/stock-lens/refractive")}
        >
		
          굴절이상<br />교정렌즈
        </button>

        <button
          className="rounded-xl bg-yellow-100 aspect-square w-40 h-40 shadow-md hover:shadow-lg text-center font-semibold text-yellow-900 text-lg flex items-center justify-center text-wrap p-4"
          onClick={() => navigate("/stock-lens/kids")}
        >
          소아&청소년
        </button>

        <button
          className="rounded-xl bg-purple-100 aspect-square w-40 h-40 shadow-md hover:shadow-lg text-center font-semibold text-purple-900 text-lg flex items-center justify-center text-wrap p-4"
          onClick={() => navigate("/stock-lens/photochromic")}
        >
          변색렌즈 
        </button>

        <button
          className="rounded-xl bg-emerald-100 aspect-square w-40 h-40 shadow-md hover:shadow-lg text-center font-semibold text-emerald-900 text-lg flex items-center justify-center text-wrap p-4"
          onClick={() => navigate("/stock-lens/tinted")}
        >
          착색렌즈
        </button>
      </div>
    </div>
  );
}
