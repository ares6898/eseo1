import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LensPopup from "../components/LensPopup";

export default function RefractiveLensPage() {
  const navigate = useNavigate();
  const [popupBrand, setPopupBrand] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [nextBrand, setNextBrand] = useState(null);
  const [activeBrandLabel, setActiveBrandLabel] = useState(null);

  const handleBrandClick = (brand) => {
    if (popupBrand === brand) {
      setPopupBrand(null);
    } else if (popupBrand) {
      setPopupBrand(null);
      setNextBrand(brand);
    } else {
      setPopupBrand(brand);
    }
  };

  const handleBrandLabelClick = (brandCode) => {
    setPopupBrand(brandCode);
    setActiveBrandLabel(brandCode);
  };

  useEffect(() => {
    if (!popupBrand && nextBrand) {
      const timer = setTimeout(() => {
        setPopupBrand(nextBrand);
        setNextBrand(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [popupBrand, nextBrand]);

  const handleClosePopup = () => {
    setPopupBrand(null);
    setActiveBrandLabel(null);
  };

  const handleRowSelect = (row) => {
    setSelectedRows((prev) =>
      prev.includes(row) ? prev.filter((r) => r !== row) : [...prev, row]
    );
  };

  const priceData = [
    {
      brand: "케미 2세대",
      value: {
        "1.56": { regular: "6만원", discount: "3만원" },
        "1.60": { regular: "10만원", discount: "5만원" },
        "1.67": { regular: "16만원", discount: "8만원" },
        "1.74": { regular: "20만원", discount: "10만원" }
      },
      label: "케미 2세대",
      brandCode: "chemi2",
      icon: "👍 가성비",
      color: "green"
    },
    {
      brand: "케미 3세대 IR",
      value: {
        "1.56": { regular: "9만원", discount: "5만원" },
        "1.60": { regular: "14만원", discount: "8만원" },
        "1.67": { regular: "19만원", discount: "10만원" },
        "1.74": { regular: "24만원", discount: "15만원" }
      },
      label: "케미 3세대 IR",
      brandCode: "chemi3",
      icon: "⭐ 고기능",
      color: "purple"
    },
    {
      brand: "호야 뉴럭스 FC",
      value: {
        "1.56": { regular: "11만원", discount: "7만원" },
        "1.60": { regular: "16만원", discount: "9만원" },
        "1.67": { regular: "23만원", discount: "12만원" },
        "1.74": { regular: "43만원", discount: "19만원" }
      },
      label: "호야 뉴럭스 FC",
      brandCode: "hoya",
      icon: "🌟 베스트",
      color: "yellow"
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6">
      <div className="bg-white rounded-xl shadow p-4 w-fit mx-auto mb-6">
        <img src="/images/이노티로고.jpg" alt="이노티안경 로고" className="h-16 cursor-pointer" onClick={() => navigate("/")} />
      </div>

      <h2 className="text-xl font-semibold text-center mb-4">Refractive lens</h2>

      <div className="bg-white rounded-xl shadow p-4 mb-6 text-sm text-center text-gray-700 leading-relaxed font-semibold">
        💡 렌즈 가격은 기능, 두께와 무게, 차단 성능, 브랜드에 따라 달라집니다. 💡
      </div>

      <div className="bg-blue-100 rounded-xl shadow p-4 mb-2">
        <div className="grid grid-cols-[1fr_3fr] items-center gap-4">
          <div className="font-bold text-gray-600 text-sm">굴절률∖제품명</div>
          <div className="grid grid-cols-3 gap-2">
            {priceData.map((item, idx) => (
              <div
                key={idx}
                className={`text-sm font-bold text-center flex items-center justify-center gap-1 cursor-pointer rounded px-2 py-1 transition ${
                  activeBrandLabel === item.brandCode ? `animate-pulse bg-${item.color}-50` : "text-gray-600"
                }`}
                onClick={() => handleBrandLabelClick(item.brandCode)}
              >
                <span className={`bg-${item.color}-100 text-${item.color}-800 px-2 py-0.5 rounded-full text-xs font-semibold`}>
                  {item.icon}
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {["1.56", "1.60", "1.67", "1.74"].map((row) => (
          <div key={row} className="bg-white rounded-xl shadow p-4">
            <div className="grid grid-cols-[1fr_3fr] items-center gap-4 mb-2">
              <div className="font-semibold text-blue-800 cursor-pointer text-left" onClick={() => handleRowSelect(row)}>
                {row}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {priceData.map((cell, idx) => (
                  <div
                    key={idx}
                    className={`w-full text-center py-2 px-3 rounded cursor-pointer transition text-base border border-gray-300 ${
                      selectedRows.includes(row) ? "bg-yellow-200 text-black font-bold shadow" : "opacity-50"
                    }`}
                    onClick={() => handleBrandClick(cell.brandCode)}
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-400 line-through">{cell.value[row].regular}</div>
                      <div className="text-base font-bold text-blue-800">{cell.value[row].discount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {popupBrand && (
        <>
          <div className="fixed top-2 w-full z-50 text-center">
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
