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
      }, 300);
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
    <div className="bg-gray-50 text-gray-900 min-h-screen p-4">
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-2">이노티안경 이천증포점</h1>
        <p className="bg-white rounded-xl p-3 text-gray-600 shadow text-sm">
          고객님의 눈을 보호하고, 시력을 교정하는 안경렌즈는 의료기기 1등급 입니다
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => handleBrandClick("stock")}
          className="rounded-xl bg-blue-100 p-4 shadow hover:shadow-md transition text-center font-semibold text-blue-800"
        >
          여벌렌즈
        </button>
        <button
          onClick={() => handleBrandClick("order")}
          className="rounded-xl bg-emerald-100 p-4 shadow hover:shadow-md transition text-center font-semibold text-emerald-800"
        >
          주문렌즈
        </button>
      </div>

      <table className="w-full text-center border-collapse bg-white rounded-xl overflow-hidden shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">굴절률</th>
            <th className="p-3">케미 2세대 👍<div className="text-xs">가성비 추천</div></th>
            <th className="p-3">케미 3세대 IR ⭐<div className="text-xs">고기능 추천</div></th>
            <th className="p-3 text-yellow-500 font-bold">호야 뉴럭스 🌟<div className="text-xs">베스트 추천</div></th>
          </tr>
        </thead>
        <tbody>
          {["1.56", "1.60", "1.67", "1.74"].map((row) => (
            <tr key={row}>
              <td
                className="p-3 cursor-pointer text-sm font-medium text-blue-600"
                onClick={() => handleRowSelect(row)}
              >
                {row}
              </td>
              {["케미2", "케미3", "호야"].map((_, colIdx) => (
                <td
                  key={colIdx}
                  className={`p-3 text-sm transition-all duration-300 ${selectedRows.includes(row)
                    ? "bg-yellow-200 text-black font-bold shadow"
                    : selectedRows.length > 0 ? "opacity-30" : ""}`}
                >
                  {row === "1.56" ? ["3만원", "5만원", "7만원"][colIdx]
                    : row === "1.60" ? ["5만원", "8만원", "9만원"][colIdx]
                    : row === "1.67" ? ["8만원", "10만원", "12만원"][colIdx]
                    : ["10만원", "15만원", "19만원"][colIdx]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {popupBrand && popupBrand !== "stock" && popupBrand !== "order" && (
        <>
          <div className="fixed top-4 w-full z-50 text-center">
            {["hoya", "chemi3"].includes(popupBrand) && (
              <p className="text-2xl text-yellow-500 font-semibold animate-pulse mt-2 mb-1">
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
