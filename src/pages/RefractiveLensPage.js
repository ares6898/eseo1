import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LensPopup from "../components/LensPopup";

export default function RefractiveLensPage() {
  const navigate = useNavigate();
  const [popupBrand, setPopupBrand] = useState(null);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [nextBrand, setNextBrand] = useState(null);
  const [activeBrandLabel, setActiveBrandLabel] = useState(null);
  const [extraDiscount, setExtraDiscount] = useState(false);
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);

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

  // 문자열 가격(만원 단위) → 숫자 원 단위, 추가할인 적용
  const applyExtraDiscount = (price) => {
    const numberOnly = parseFloat(String(price).replace(/[^\d.]/g, ""));
    const value = isNaN(numberOnly) ? 0 : numberOnly * 10000;
    return extraDiscount ? Math.round(value * 0.9) : value;
  };

  // 천단위 표시
  const formatPrice = (value) => (isNaN(value) ? "-" : value.toLocaleString() + "원");

  // "—" 처리( "-", "---", 공백 포함 )
  const isDash = (v) =>
    typeof v === "string" && v.replace(/\s/g, "").includes("-");

  const priceData = [
    {
      brand: "케미 2세대",
      value: {
        "1.56": { regular: "6만원", discount: "3만원" },
        "1.60": { regular: "10만원", discount: "4만원" },
        "1.67": { regular: "16만원", discount: "6만원" },
        "1.74": { regular: "20만원", discount: "9만원" }
      },
      label: "케미 2세대",
      brandCode: "chemi2",
      icon: "👍 가성비",
      color: "green",
      tagline: "가성비 최고, 자외선 차단"
    },
    {
      brand: "니콘 BLUV",
      value: {
        "1.56": { regular: "10만원", discount: "5.5만원" },
        "1.60": { regular: "16.5만원", discount: "6.5만원" },
        "1.67": { regular: "25만원", discount: "10만원" },
        "1.74": { regular: "---", discount: "0" } // 정가 대시 처리
      },
      label: "니콘 BLUV",
      brandCode: "chemi3",
      icon: "⭐ 고기능",
      color: "purple",
      tagline: "유해한 블루라이트만 차단, 비구면으로 왜곡제거"
    },
    {
      brand: "니콘 씨맥스 INF",
      value: {
        "1.56": { regular: "40만원", discount: "13.5만원" },
        "1.60": { regular: "50만원", discount: "19만원" },
        "1.67": { regular: "60만원", discount: "28만원" },
        "1.74": { regular: "85만원", discount: "35만원" }
      },
      label: "니콘 씨맥스 INF",
      brandCode: "hoya",
      icon: "🌟 베스트",
      color: "yellow",
      tagline: "세계최고의 개인맞춤 안경렌즈"
    }
  ];

  const colorMap = {
    green: {
      bg: (active) => (active ? "bg-green-300" : "bg-green-100"),
      text: "text-green-900",
      badgeBg: "bg-green-500",
      badgeText: "text-white"
    },
    purple: {
      bg: (active) => (active ? "bg-purple-300" : "bg-purple-100"),
      text: "text-purple-900",
      badgeBg: "bg-purple-500",
      badgeText: "text-white"
    },
    yellow: {
      bg: (active) => (active ? "bg-yellow-300" : "bg-yellow-100"),
      text: "text-yellow-900",
      badgeBg: "bg-yellow-500",
      badgeText: "text-white"
    }
  };

  const discountButtonStyles = [
    "bg-blue-500 hover:bg-blue-600 text-white",
    "bg-green-500 hover:bg-green-600 text-white",
    "bg-orange-500 hover:bg-orange-600 text-white",
    "bg-purple-500 hover:bg-purple-600 text-white",
    "bg-red-500 hover:bg-red-600 text-white"
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6">
      <div className="bg-white rounded-xl shadow p-4 w-fit mx-auto mb-6">
        <img
          src="/images/이노티로고.jpg"
          alt="이노티안경 로고"
          className="h-16 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <h2 className="text-xl font-semibold text-center mb-2">Refractive lens</h2>

      <div className="text-center text-sm text-blue-800 font-bold mb-4">
        어떤 렌즈가 좋을지 모르시겠다면 👉
        <span
          className="underline cursor-pointer hover:text-blue-500 ml-1"
          onClick={() => setShowRecommendation(true)}
        >
          전문 안경사의 굴절률 추천 보기
        </span>
      </div>

      <div className="bg-white rounded-xl shadow p-4 mb-6 text-sm text-center text-gray-700 leading-relaxed font-semibold">
        💡 렌즈 가격은 기능, 두께와 무게, 차단 성능, 브랜드에 따라 달라집니다. 💡
      </div>

      {/* 추가 할인, 초기화 버튼 Row */}
      <div className="text-center mb-4 flex flex-row justify-center gap-4">
        <button
          onClick={() => setShowDiscountPopup(true)}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600 text-lg font-extrabold transition"
        >
          🔽 추가 할인 선택
        </button>
        <button
          onClick={() => setExtraDiscount(false)}
          className="bg-gray-400 text-white px-6 py-3 rounded-xl shadow hover:bg-gray-500 text-lg font-extrabold transition"
        >
          ❌ 추가할인 초기화
        </button>
      </div>

      <div className="bg-blue-100 rounded-xl shadow p-4 mb-2">
        <div className="grid grid-cols-[1fr_3fr] items-start gap-4">
          <div className="font-bold text-gray-600 text-sm pt-2">굴절률∖제품명</div>
          <div className="grid grid-cols-3 gap-2">
            {priceData.map((item, idx) => {
              const isActive = activeBrandLabel === item.brandCode;
              const color = colorMap[item.color];

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center bg-white rounded-xl shadow p-4 transition cursor-pointer w-full hover:shadow-lg ${
                    isActive ? "ring-2 ring-offset-1 ring-" + item.color + "-400" : ""
                  }`}
                >
                  <div
                    className={`text-sm font-bold flex items-center justify-center gap-1 cursor-pointer rounded px-2 py-1 transition ${color.bg(
                      isActive
                    )} ${color.text} ${isActive ? "shadow-md scale-105 animate-pulse" : ""}`}
                    onClick={() => handleBrandClick(item.brandCode)}
                  >
                    <span
                      className={`${color.badgeBg} ${color.badgeText} px-2 py-0.5 rounded-full text-xs font-semibold`}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                  <div className="text-xs mt-1 text-gray-600">{item.tagline}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {["1.56", "1.60", "1.67", "1.74"].map((row) => (
          <div key={row} className="bg-white rounded-xl shadow p-4">
            <div className="grid grid-cols-[1fr_3fr] items-center gap-4 mb-2">
              <div
                className="font-semibold text-blue-800 cursor-pointer text-left"
                onClick={() => handleRowSelect(row)}
              >
                {row}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {priceData.map((cell, idx) => (
                  <div
                    key={idx}
                    className={`w-full text-center py-2 px-3 rounded cursor-pointer transition border border-gray-300 ${
                      selectedRows.includes(row)
                        ? "bg-yellow-200 text-black font-bold shadow"
                        : "opacity-50"
                    }`}
                    onClick={() => handleBrandClick(cell.brandCode)}
                  >
                    <div className="flex flex-col items-center">
                      {isDash(cell.value[row].regular) ? (
                        // 정가가 대시(미공급/미제공)인 경우
                        <div className="text-lg text-gray-400 font-medium">-</div>
                      ) : (
                        <>
                          <div className="text-sm text-gray-400 line-through mb-0.5">
                            {cell.value[row].regular}
                          </div>

                          <div className="text-xl font-extrabold text-blue-900 flex items-center">
                            {formatPrice(applyExtraDiscount(cell.value[row].discount))}
                            {extraDiscount && (
                              <span className="ml-2 text-red-600 text-xs bg-red-100 px-2 py-0.5 rounded-full font-semibold animate-bounce">
                                추가할인!
                              </span>
                            )}
                            {cell.brandCode === "chemi3" && (
                              <span className="ml-2 text-red-600 text-xs bg-red-100 px-2 py-0.5 rounded-full font-semibold animate-bounce">
                                전국최저가
                              </span>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showRecommendation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center space-y-4">
            <h3 className="text-xl font-bold text-blue-800">전문안경사의 굴절률 추천</h3>
            <p className="text-base text-gray-700 leading-relaxed font-medium whitespace-pre-line">
              안경테 사이즈와 PD (동공간거리)에 따라
              추천되는 굴절률이 상이할 수 있으니
              반드시 안경사와 상의하세요.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded hover:bg-blue-200 font-semibold"
                onClick={() => {
                  setSelectedRows(["1.56", "1.60"]);
                  setShowRecommendation(false);
                }}
              >
                2디옵터 이하
              </button>
              <button
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded hover:bg-blue-200 font-semibold"
                onClick={() => {
                  setSelectedRows(["1.60", "1.67"]);
                  setShowRecommendation(false);
                }}
              >
                4디옵터 이하
              </button>
              <button
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded hover:bg-blue-200 font-semibold"
                onClick={() => {
                  setSelectedRows(["1.67", "1.74"]);
                  setShowRecommendation(false);
                }}
              >
                6디옵터 이하
              </button>
              <button
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded hover:bg-blue-200 font-semibold"
                onClick={() => {
                  setSelectedRows(["1.74"]);
                  setShowRecommendation(false);
                }}
              >
                6디옵터 초과
              </button>
            </div>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setShowRecommendation(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* 할인 프로그램 팝업 */}
      {showDiscountPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 w-[95%] max-w-lg text-center space-y-6 shadow-2xl">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-2">추가 할인 프로그램 선택</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                "1. 가족묶음 할인",
                "2. 기존구매고객 할인",
                "3. 하이닉스·비테스코·공무원",
                "4. 만 65세 이상 할인",
                "5. 지인소개 방문 할인"
              ].map((text, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setExtraDiscount(true);
                    setShowDiscountPopup(false);
                  }}
                  className={`w-full text-xl font-bold py-4 rounded-xl shadow transition ${
                    discountButtonStyles[i % discountButtonStyles.length]
                  }`}
                >
                  {text}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowDiscountPopup(false)}
              className="mt-4 bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600 text-lg font-extrabold shadow transition"
            >
              닫기
            </button>
          </div>
        </div>
      )}

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
