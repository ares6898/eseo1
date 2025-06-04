import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Multifocal_CH() {
  const navigate = useNavigate();

  // 모달 표시 여부 상태
  const [showModal, setShowModal] = useState(false);
  // 어떤 버튼 문맥인지 (예: "clear", "kids", "photochromic", "tinted")
  const [modalContext, setModalContext] = useState("");

  // 버튼 클릭 시 모달 열기 (contextStr: "clear" / "kids" / ...)
  const handleOpenModal = (contextStr) => {
    setModalContext(contextStr);
    setShowModal(true);
  };

  // 모달 내부 선택지 클릭 시 페이지 이동
  const handleModalChoice = (choice) => {
    let targetPath = "/";
    switch (modalContext) {
      case "clear":
        if (choice === "A") {
          targetPath = "/multifocal-lens-11";
        } else {
          targetPath = "/multifocal-lens";
        }
        break;

      case "kids":
        if (choice === "A") {
          targetPath = "/Progressive_tinted_S";
        } else {
          targetPath = "/Progressive_tinted_R";
        }
        break;

      case "photochromic":
        if (choice === "A") {
          targetPath = "/Progressive_photo_S";
        } else {
          targetPath = "/Progressive_photo_R";
        }
        break;

      case "tinted":
        if (choice === "A") {
          targetPath = "/multifocal-lens-11";
        } else {
          targetPath = "/multifocal-lens";
        }
        break;

      default:
        targetPath = "/";
    }

    navigate(targetPath);
    setShowModal(false);
    setModalContext("");
  };

  // 모달 닫기 (X 버튼 또는 배경 클릭 시)
  const handleCloseModal = () => {
    setShowModal(false);
    setModalContext("");
  };

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

      {/* 버튼들: 클릭 시 모달 열기 */}
      <div className="flex flex-wrap justify-center gap-6 px-4 max-w-md mx-auto">
        <button
          className="aspect-square w-40 rounded-xl bg-gradient-to-br from-blue-200 to-blue-100/80 backdrop-blur-md
                     border border-blue-300 shadow-xl font-semibold text-blue-900 text-lg flex items-center justify-center"
          onClick={() => handleOpenModal("clear")}
        >
          클리어
        </button>

        <button
          className="aspect-square w-40 rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-100/80 backdrop-blur-md
                     border border-blue-300 shadow-xl font-semibold text-yellow-900 text-lg flex items-center justify-center"
          onClick={() => handleOpenModal("kids")}
        >
          착색 다초점
        </button>

        <button
          className="aspect-square w-40 rounded-xl bg-gradient-to-br from-purple-200 to-purple-100/80 backdrop-blur-md
                     border border-blue-300 shadow-xl font-semibold text-purple-900 text-lg flex items-center justify-center"
          onClick={() => handleOpenModal("photochromic")}
        >
          변색 다초점
        </button>

        <button
          className="aspect-square w-40 rounded-xl bg-gradient-to-br from-emerald-200 to-emerald-100/80 backdrop-blur-md
                     border border-blue-300 shadow-xl font-semibold text-emerald-900 text-lg flex items-center justify-center"
          onClick={() => handleOpenModal("tinted")}
        >
          관리자
        </button>
      </div>

      {/* 모달 표시 */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-center mb-4">
              {modalContext === "clear" && "누진대 길이를 선택하세요."}
              {modalContext === "kids" && "누진대 길이를 선택하세요."}
              {modalContext === "photochromic" && "누진대 길이를 선택하세요."}
              {modalContext === "tinted" && "누진대 길이를 선택하세요."}
            </h2>

            <div className="flex flex-col gap-3">
              <button
                className="w-full py-8 rounded-lg bg-blue-200 hover:bg-blue-300 text-blue-900 font-medium"
                onClick={() => handleModalChoice("A")}
              >
                S-11mm 타입
              </button>
              <button
                className="w-full py-8 rounded-lg bg-green-200 hover:bg-green-300 text-green-900 font-medium"
                onClick={() => handleModalChoice("B")}
              >
                R-12mm 타입
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
