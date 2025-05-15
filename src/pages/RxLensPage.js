// src/pages/RxLensPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RxLensPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const images = [
    "/images/고급형.jpg",
    "/images/프리미엄.jpg",
    "/images/보급형.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate(-1)} className="text-blue-700 font-semibold">← 뒤로가기</button>
        <button onClick={() => navigate("/")} className="text-blue-700 font-semibold">🏠 홈</button>
      </div>

      <div className="bg-white rounded-xl shadow p-4 w-fit mx-auto mb-6 cursor-pointer" onClick={() => navigate("/")}>
        <img src="/images/이노티로고.jpg" alt="이노티안경 로고" className="h-16" />
      </div>

      <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">RX LENS</h2>

      <div className="flex justify-center gap-8 mb-8">
        <button
          className="aspect-square w-36 rounded-xl bg-gradient-to-br from-blue-200 to-blue-100/80 backdrop-blur-md border border-blue-300 shadow-xl text-center font-semibold text-blue-900 text-sm flex items-center justify-center text-center"
          onClick={() => setShowModal(true)}
        >
          Progressive<br />lens
        </button>
        <button
          className="aspect-square w-36 rounded-xl bg-gradient-to-br from-emerald-200 to-emerald-100/80 backdrop-blur-md border border-emerald-300 shadow-xl text-center font-semibold text-emerald-900 text-sm flex items-center justify-center text-center"
        >
          Individual<br />lens
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl p-4">
            <button
              className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow"
              onClick={() => setShowModal(false)}
            >
              닫기
            </button>
            <div className="flex items-center justify-between">
              <button onClick={prevSlide} className="text-gray-700 text-3xl px-4">‹</button>
              <img
                src={images[currentIndex]}
                alt="Progressive lens info"
                className="max-h-[80vh] max-w-full object-contain mx-auto"
              />
              <button onClick={nextSlide} className="text-gray-700 text-3xl px-4">›</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
