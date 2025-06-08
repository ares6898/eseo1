import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LensPopup from "../components/LensPopup";

export default function RefractiveLensPage() {
  const navigate = useNavigate();
  const [popupBrand, setPopupBrand] = useState(null);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [nextBrand, setNextBrand] = useState(null);
  const [activeBrandLabel, setActiveBrandLabel] = useState(null);
  const [extraDiscount, setExtraDiscount] = useState(false);

  const handleBrandClick = (brandCode) => {
    if (popupBrand === brandCode) {
      setPopupBrand(null);
      setActiveBrandLabel(null);
    } else {
      setPopupBrand(brandCode);
      setActiveBrandLabel(brandCode);
    }
  };

  const handleRowSelect = (row) => {
    setSelectedRows((prev) =>
      prev.includes(row) ? prev.filter((r) => r !== row) : [...prev, row]
    );
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

  const discountButtonStyles = [
    "bg-blue-500 hover:bg-blue-600 text-white",
    "bg-green-500 hover:bg-green-600 text-white",
    "bg-orange-500 hover:bg-orange-600 text-white",
    "bg-purple-500 hover:bg-purple-600 text-white",
    "bg-red-500 hover:bg-red-600 text-white"
  ];

  const applyExtraDiscount = (price) => {
    const numberOnly = parseFloat(price.replace(/[^\d.]/g, ""));
    const value = numberOnly * 10000;
    return extraDiscount ? Math.round(value * 0.9) : value;
  };

  const formatPrice = (value) => value.toLocaleString() + "원";

  const priceData = [
    {
      brandCode: "chemi2",
      label: "케미 2세대",
      value: { "1.56": { regular: "6만원", discount: "3만원" }, "1.60": { regular: "10만원", discount: "5만원" }, "1.67": { regular: "16만원", discount: "8만원" }, "1.74": { regular: "20만원", discount: "10만원" } },
      icon: "👍",
      color: "green"
    },
    {
      brandCode: "chemi3",
      label: "케미 3세대 IR",
      value: { "1.56": { regular: "9만원", discount: "5만원" }, "1.60": { regular: "14만원", discount: "8만원" }, "1.67": { regular: "19만원", discount: "10만원" }, "1.74": { regular: "24만원", discount: "15만원" } },
      icon: "⭐",
      color: "purple"
    }
  ];

  const colorMap = {
    green: { bg: (active) => active ? "bg-green-200" : "bg-green-100", text: "text-green-800", badgeBg: "bg-green-500", badgeText: "text-white" },
    purple:{ bg: (active) => active ? "bg-purple-200" : "bg-purple-100", text: "text-purple-800", badgeBg: "bg-purple-500", badgeText: "text-white" }
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6">
      <div className="bg-white rounded-xl shadow p-4 w-fit mx-auto mb-6">
        <img src="/images/이노티로고.jpg" alt="로고" className="h-16 cursor-pointer" onClick={() => navigate("/")} />
      </div>

      <div className="flex gap-6">
        {/* Left Column */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4 text-center">굴절이상 교정렌즈 가격표</h2>
          <div className="text-sm text-blue-800 font-bold mb-4 text-center">
            어떤 렌즈가 좋을지 모르시겠다면 👉
            <button onClick={() => setShowRecommendation(true)} className="underline ml-1 hover:text-blue-500">
              전문 안경사의 굴절률 추천 보기
            </button>
          </div>
          <div className="mb-4 flex justify-center gap-4">
            <button onClick={() => setShowDiscountPopup(true)} className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600 text-lg font-extrabold">
              🔽 추가 할인 선택
            </button>
            <button onClick={() => setExtraDiscount(false)} className="bg-gray-400 text-white px-6 py-3 rounded-xl shadow hover:bg-gray-500 text-lg font-extrabold">
              ❌ 추가할인 초기화
            </button>
          </div>
          <div className="bg-blue-100 rounded-xl shadow p-4 mb-4">
            <div className="grid grid-cols-[1fr_2fr] gap-4 items-start">
              <div className="font-bold text-gray-600 text-sm pt-2">굴절률 ∖ 제품명</div>
              <div className="grid grid-cols-2 gap-3">
                {priceData.map(item => {
                  const active = activeBrandLabel === item.brandCode;
                  return (
                    <button key={item.brandCode} onClick={() => handleBrandClick(item.brandCode)} className={`flex items-center gap-1 px-3 py-1 rounded ${colorMap[item.color].bg(active)} ${colorMap[item.color].text} ${active ? `ring-2 ring-offset-1 ring-${item.color}-400 animate-pulse` : `shadow`}`}>                      
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${colorMap[item.color].badgeBg} ${colorMap[item.color].badgeText}`}>{item.icon}</span>
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {Object.keys(priceData[0].value).map(refIndex => {
              const rowActive = selectedRows.includes(refIndex);
              return (
                <div key={refIndex} className={`bg-white rounded-xl shadow p-4 grid grid-cols-[1fr_2fr] gap-4 items-center cursor-pointer ${rowActive ? `bg-yellow-100` : ``}`} onClick={() => handleRowSelect(refIndex)}>
                  <div className="font-semibold text-blue-800">{refIndex}</div>
                  <div className="grid grid-cols-2 gap-3">
                    {priceData.map(item => (
                      <div key={item.brandCode} className={`flex flex-col items-center ${activeBrandLabel===item.brandCode ? `opacity-100` : `opacity-50`}`}>
                        <div className="text-sm text-gray-400 line-through mb-0.5">{item.value[refIndex].regular}</div>
                        <div className="text-xl font-extrabold text-blue-900 flex items-center">
                          {formatPrice(applyExtraDiscount(item.value[refIndex].discount))}
                          {extraDiscount && <span className="ml-2 text-red-600 text-xs bg-red-100 px-2 py-0.5 rounded-full font-semibold animate-bounce">추가할인!</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="bg-red-600 text-white text-3xl font-bold px-6 py-3 rounded-2xl shadow-lg mb-4">
            “우리아이 눈이 1년만에 이렇게 나빠졌다고?”
          </div>
          <img src="/images/Stellest.jpg" alt="샘플 렌즈" className="max-w-lg w-full h-auto rounded-xl shadow" />
        </div>
      </div>

      {/* Popup Modals */}
      {popupBrand && <LensPopup brand={popupBrand} onClose={handleClosePopup} />}
      {showRecommendation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-11/12 max-w-md text-center space-y-4">
            <h3 className="text-xl font-bold text-blue-800">전문안경사의 굴절률 추천</h3>
            <p className="text-base text-gray-700 leading-relaxed font-medium whitespace-pre-line">안경테 사이즈와 PD (동공간거리)에 따라 추천되는 굴절률이 상이할 수 있으니 필히 안경사와 상의하세요.</p>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded hover:bg-blue-200 font-semibold" onClick={() => { setSelectedRows(["1.56","1.60"]); setShowRecommendation(false); }}>2디옵터 이하</button>
              <button className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded hover:bg-blue-200 font-semibold" onClick={() => { setSelectedRows(["1.60","1.67"]); setShowRecommendation(false); }}>4디옵터 이하</button>
              <button className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded hover:bg-blue-200 font-semibold" onClick={() => { setSelectedRows(["1.67","1.74"]); setShowRecommendation(false); }}>6디옵터 이하</button>
              <button className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded hover:bg-blue-200 font-semibold" onClick={() => { setSelectedRows(["1.74"]); setShowRecommendation(false); }}>6디옵터 초과</button>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setShowRecommendation(false)}>닫기</button>
          </div>
        </div>
      )}
      {showDiscountPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-11/12 max-w-lg text-center space-y-6 shadow-2xl">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-2">추가 할인 프로그램 선택</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                "가족묶음 할인",
                "기존구매고객 할인",
                "하이닉스·비테스코·공무원",
                "만 65세 이상 할인",
                "지인소개 방문 할인"
              ].map((text,i) => (
                <button key={i} onClick={() => { setExtraDiscount(true); setShowDiscountPopup(false); }} className={`w-full text-xl font-bold py-4 rounded-xl shadow transition ${discountButtonStyles[i%discountButtonStyles.length]}`}>{text}</button>
              ))}
            </div>
            <button className="mt-4 bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600 text-lg font-extrabold" onClick={() => setShowDiscountPopup(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}
