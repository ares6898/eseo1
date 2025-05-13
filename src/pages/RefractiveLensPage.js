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
    <div className="bg-slate-900 text-white min-h-screen p-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">이노티안경 이천증포점</h1>
        <div className="flex gap-2">
          <button className="text-sm underline" onClick={() => navigate(-1)}>← 뒤로</button>
          <button className="text-sm underline" onClick={() => navigate("/")}>🏠 홈</button>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">굴절이상교정렌즈 가격 비교</h2>

      <table className="w-full text-center border-collapse border border-gray-500">
        <thead className="bg-slate-700">
          <tr>
            <th className="border p-2">굴절률</th>
            <th className="border p-2 cursor-pointer" onClick={() => handleBrandClick("chemi2")}>케미 2세대 👍<div className="text-sm">가성비 추천</div></th>
            <th className="border p-2 cursor-pointer" onClick={() => handleBrandClick("chemi3")}>케미 3세대 IR ⭐<div className="text-sm">고기능 추천</div></th>
            <th className="border p-2 cursor-pointer text-yellow-300 font-bold" onClick={() => handleBrandClick("hoya")}>호야 뉴럭스 🌟<div className="text-sm">베스트 추천</div></th>
          </tr>
        </thead>
        <tbody>
          <tr>
  <td className="border p-2 cursor-pointer" onClick={() => handleRowSelect("1.56")}>1.56</td>
  <td className={`border p-2 ${selectedRows.includes("1.56") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>3만원</td>
  <td className={`border p-2 ${selectedRows.includes("1.56") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>5만원</td>
  <td className={`border p-2 ${selectedRows.includes("1.56") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>7만원</td>
</tr>
          <tr>
  <td className="border p-2 cursor-pointer" onClick={() => handleRowSelect("1.60")}>1.60</td>
  <td className={`border p-2 ${selectedRows.includes("1.60") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>5만원</td>
  <td className={`border p-2 ${selectedRows.includes("1.60") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>8만원</td>
  <td className={`border p-2 ${selectedRows.includes("1.60") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>9만원</td>
</tr>
          <tr>
  <td className="border p-2 cursor-pointer" onClick={() => handleRowSelect("1.67")}>1.67</td>
  <td className={`border p-2 ${selectedRows.includes("1.67") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>8만원</td>
  <td className={`border p-2 ${selectedRows.includes("1.67") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>10만원</td>
  <td className={`border p-2 ${selectedRows.includes("1.67") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>12만원</td>
</tr>
          <tr>
  <td className="border p-2 cursor-pointer" onClick={() => handleRowSelect("1.74")}>1.74</td>
  <td className={`border p-2 ${selectedRows.includes("1.74") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>10만원</td>
  <td className={`border p-2 ${selectedRows.includes("1.74") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>15만원</td>
  <td className={`border p-2 ${selectedRows.includes("1.74") ? 'bg-yellow-400 text-black font-bold shadow-md' : selectedRows.length > 0 ? 'opacity-30' : ''}`}>19만원</td>
</tr>
        </tbody>
      </table>

      {popupBrand && (
        <>
          <div className="fixed top-4 w-full z-50 text-center">{["hoya", "chemi3"].includes(popupBrand) && (
            <p className="text-2xl text-center text-yellow-400 font-semibold animate-pulse mt-2 mb-1">
              🌟 고객 선택률 상위 렌즈
            </p>)}</div>}
          <LensPopup brand={popupBrand} onClose={handleClosePopup} />
        </>
      )}
    </div>
  );
}
