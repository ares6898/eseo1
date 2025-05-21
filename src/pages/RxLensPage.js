import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  { src: "/images/고급형.jpg", label: "고급형" },
  { src: "/images/프리미엄.jpg", label: "프리미엄" },
  { src: "/images/보급형.jpg", label: "보급형" }
];

export default function RxLensPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animDir, setAnimDir] = useState("");
  const touchStartX = useRef(0);

  // 슬라이드 이동 함수
  const changeSlide = (dir) => {
    setAnimDir(dir);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (dir === "left") return (prev + 1) % images.length;
        else return (prev - 1 + images.length) % images.length;
      });
      setAnimDir("");
    }, 200);
  };

  // 점프 버튼 (인디케이터)용 함수
  const jumpTo = (idx) => setCurrentIndex(idx);

  // 터치 이벤트
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) changeSlide("right");
    else if (delta < -50) changeSlide("left");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* ... 네비, 로고, 타이틀 ... */}
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
      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-[95vw] bg-white rounded-xl shadow-2xl p-2 overflow-hidden">
            <button
              className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow"
              onClick={() => setShowModal(false)}
            >
              닫기
            </button>
            <div className="flex items-center justify-between">
              <button onClick={() => changeSlide("right")} className="text-gray-700 text-3xl px-4">‹</button>
              <div
                className={`
                  transition-all duration-200 ease-in-out w-full
                  ${animDir === "left" ? "animate-slide-left" : ""}
                  ${animDir === "right" ? "animate-slide-right" : ""}
                `}
                style={{ touchAction: "pan-y" }}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].label}
                  className="h-[70vh] w-full object-contain px-2 select-none"
                  draggable={false}
                />
                {/* 점프버튼 영역 (이미지 하단에 딱 붙게) */}
                <div className="flex justify-center gap-4 mt-2 mb-2">
                  {images.map((img, idx) => (
                    <button
                      key={img.label}
                      onClick={() => jumpTo(idx)}
                      className={`px-4 py-2 rounded-full font-bold text-base transition border-2 ${
                        idx === currentIndex
                          ? "bg-blue-500 text-white border-blue-700 shadow-lg scale-110"
                          : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-blue-100"
                      }`}
                    >
                      {img.label}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => changeSlide("left")} className="text-gray-700 text-3xl px-4">›</button>
            </div>
          </div>
        </div>
      )}
      {/* 커스텀 슬라이드 애니메이션 Tailwind 추가 필요 */}
      <style>{`
        .animate-slide-left { transform: translateX(-100%); opacity: 0; }
        .animate-slide-right { transform: translateX(100%); opacity: 0; }
        .transition-all { transition: transform 0.2s, opacity 0.2s; }
      `}</style>
    </div>
  );
}
