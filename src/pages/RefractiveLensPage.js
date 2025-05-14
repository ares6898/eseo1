import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LensPopup from "../components/LensPopup";

export default function RefractiveLensPage() {
  const navigate = useNavigate();
  const [popupBrand, setPopupBrand] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [nextBrand, setNextBrand] = useState(null);

  const handleBrandClick = (brand) => {
    if (popupBrand === brand) {
      setPopupBrand(null); // 닫기
    } else if (popupBrand) {
      // 다른 팝업이 열려있으면 먼저 닫고 일정 시간 뒤에 전환
      setPopupBrand(null);
      setNextBrand(brand);
    } else {
      setPopupBrand(brand);
    }
  };

  useEffect(() => {
    if (!popupBrand && nextBrand) {
      const timer = setTimeout(() => {
        setPopupBrand(nextBrand);
        setNextBrand(null);
      }, 300); // fade-out 예상 시간
      return () => clearTimeout(timer);
    }
  }, [popupBrand, nextBrand]);

  const handleClosePopup = () => {
    setPopupBrand(null);
  };

  const handleRowSelect = (row) => {
    setSelectedRows((prev) =>
      prev.includes(row) ? prev.filter(r => r !== row) : [...prev, row]
    );
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6">
      <div className="bg-white rounded-xl shadow p-4 w-fit mx-auto mb-6">
  <img src="/images/이노티로고.jpg" alt="이노티안경 로고" className="h-16 cursor-pointer" onClick={() => navigate("/")} />
</div>
<div className="flex justify-between items-center text-center mb-4">

        <h1 className="text-xl font-bold">이노티안경 이천증포점</h1>
        <div className="grid grid-cols-3 gap-2 text-xs text-center text-gray-500 mb-1">
  
</div>
<div className="grid grid-cols-3 gap-2">
  {[
    
    
  ].map((cell, idx) => (
    <div
      key={`label-${idx}`}
      className="text-xs text-center w-full text-gray-500"
    >
      {cell.label}
    </div>
  ))}
</div>
      </div>
      <h2 className="text-xl font-semibold text-center mb-4">Refractive lens</h2>

      <div className="grid gap-4">
	  <div className="bg-blue-100 rounded-xl shadow p-4 mb-2">
  <div className="grid grid-cols-[1fr_3fr] items-center gap-4">
    <div className="font-bold text-gray-600 text-sm">굴절률∖제품명</div>
    <div className="grid grid-cols-3 gap-2">
      <div className="text-sm font-bold text-gray-600 text-center">케미 2세대</div>
      <div className="text-sm font-bold text-gray-600 text-center">케미 3세대 IR</div>
      <div className="text-sm font-bold text-gray-600 text-center">호야 뉴럭스 FC</div>
    </div>
  </div>
</div>

  {["1.56", "1.60", "1.67", "1.74"].map((row) => (
  
    <div key={row} className="bg-white rounded-xl shadow p-4">
      <div className="grid grid-cols-[1fr_3fr] items-center gap-4 mb-2">
        <div className="font-semibold text-blue-800 cursor-pointer text-left" onClick={() => handleRowSelect(row)}>
           {row}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { brand: "케미 2세대", value: { "1.56": "3만원", "1.60": "5만원", "1.67": "8만원", "1.74": "10만원" }[row], label: "케미 2세대", brand: "chemi2" },
            { brand: "케미 3세대 IR", value: { "1.56": "5만원", "1.60": "8만원", "1.67": "10만원", "1.74": "15만원" }[row], label: "케미 3세대 IR", brand: "chemi3" },
            { brand: "호야 뉴럭스", value: { "1.56": "7만원", "1.60": "9만원", "1.67": "12만원", "1.74": "19만원" }[row], label: "호야 뉴럭스", brand: "hoya" }
          ].map((cell, idx) => (
            <div
              key={idx}
              className={`w-full text-center py-2 px-3 rounded cursor-pointer transition text-base ${
        selectedRows.includes(row)
          ? 'bg-yellow-200 text-black font-bold shadow'
          : 'opacity-50'
      }`}
              onClick={() => handleBrandClick(idx === 0 ? "chemi2" : idx === 1 ? "chemi3" : "hoya")}
            >
              {cell.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

      {popupBrand && (
        <>
          <div className="fixed top-4 w-full z-50 text-center">
            {["hoya", "chemi3"].includes(popupBrand) && (
              <p className="text-2xl text-center text-yellow-400 font-semibold animate-pulse mt-2 mb-1">
                🌟 고객 선택률 상위 렌즈
              </p>
            )}
          </div>
          <LensPopup brand={popupBrand} onClose={handleClosePopup} />
        </>
      )}
    </div>
  );
}
