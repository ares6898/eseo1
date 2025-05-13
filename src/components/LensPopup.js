// 📁 파일: src/components/LensPopup.js
import React, { useEffect, useState } from "react";
import { CheckCircle, Shield, Sparkles, Star, Gem } from "lucide-react";

const LensPopup = ({ brand, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [currentBrand, setCurrentBrand] = useState(brand);

  useEffect(() => {
    if (brand !== currentBrand) {
      setVisible(false);
      const timeout = setTimeout(() => {
        setCurrentBrand(brand);
        setVisible(true);
      }, 300); // 애니메이션 길이와 일치
      return () => clearTimeout(timeout);
    } else {
      setVisible(true);
    }
  }, [brand, currentBrand]);

  const brandData = {
    hoya: {
      name: "호야 뉴럭스 - 일본 호야",
      logo: "/images/hoya-logo.jpg",
      image: ["/images/hoya-1.jpg", "/images/hoya-2.jpg"],
      description: [
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-yellow-500" />, text: "정밀 가공으로 더 선명한 시야 (비구면 설계 포함)" },
        { icon: <Gem className="inline w-5 h-5 mr-1 text-purple-500" />, text: "전세계 1위 수준의 코팅 내구성" },
        { icon: <Shield className="inline w-5 h-5 mr-1 text-blue-500" />, text: "자외선·청색광 차단 + 항균코팅까지 완비" }
      ],
      bling: true
    },
    chemi2: {
      name: "케미 2세대 - 국산 케미",
      logo: "/images/chemi-logo.jpg",
      image: "/images/chemi-156.jpg",
      description: [
        { icon: <CheckCircle className="inline w-5 h-5 mr-1 text-green-500" />, text: "UV & 블루라이트 이중 차단 코팅 적용" },
        { icon: <Gem className="inline w-5 h-5 mr-1 text-pink-500" />, text: "실속 있는 가격 대비 우수한 품질" },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-indigo-500" />, text: "다양한 굴절률 옵션 제공" }
      ]
    },
    chemi3: {
      name: "케미 3세대 IR - 국산 케미",
      logo: "/images/chemi-logo.jpg",
      image: "/images/IR.jpg",
      description: [
        { icon: <Star className="inline w-5 h-5 mr-1 text-yellow-500" />, text: "근적외선(IR), 자외선, 청색광까지 3중 차단" },
        { icon: <Shield className="inline w-5 h-5 mr-1 text-blue-500" />, text: "고기능 렌즈로 눈 건강 보호" },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-indigo-500" />, text: "최신 코팅 기술 적용" }
      ]
    }
  };

  const data = brandData[currentBrand];
  if (!data) return null;

  const imageList = Array.isArray(data.image) ? data.image : [data.image];

  const isEmphasized = ["hoya", "chemi3"].includes(currentBrand);

  const headerBgClass = currentBrand === "hoya"
    ? "bg-yellow-50 text-yellow-800"
    : currentBrand === "chemi2"
    ? "bg-blue-50 text-blue-800"
    : "bg-purple-50 text-purple-800";

  return (
    <>
      {data.bling && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-yellow-100 via-white to-blue-100 opacity-20 blur-md"></div>
        </div>
      )}
      <div className={`fixed bottom-0 left-0 w-full bg-white p-4 md:p-6 rounded-t-2xl shadow-2xl z-50 max-h-[95vh] overflow-y-auto transition-opacity duration-500 ${visible ? "opacity-100 animate-fade-in" : "opacity-0"}`}>
        <div className={`text-center mb-6 p-4 rounded-xl ${headerBgClass}`}>
          <img src={data.logo} alt={`${data.name} 로고`} className={`h-16 mx-auto mb-3 ${isEmphasized ? "animate-zoom-in" : ""}`} />
          <h2 className={`text-2xl font-semibold ${isEmphasized ? "animate-zoom-in-delay" : ""}`}>{data.name}</h2>
        </div>
        <div className={`mb-6 ${currentBrand === "hoya" ? "flex justify-center gap-4 items-center" : "flex justify-center"}`}>
          {imageList.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`설명 이미지 ${idx + 1}`}
              className={`rounded-xl object-contain transition-transform duration-500 ease-in-out ${currentBrand === "hoya" ? "h-56 w-auto scale-100 animate-fade-in-slow" : "h-48 w-auto scale-100"}`}
            />
          ))}
        </div>
        <ul className="text-base leading-relaxed text-gray-700 text-left px-6 max-w-xl mx-auto">
          {data.description.map((line, idx) => (
            <li key={idx} className="mb-3 font-medium flex items-start">
              {line.icon}<span>{line.text}</span>
            </li>
          ))}
        </ul>
        <div className="text-center mt-8">
          <button
            onClick={onClose}
            className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-full text-base font-semibold shadow-md hover:scale-105 transition-transform"
          >
            닫기
          </button>
        </div>
      </div>
    </>
  );
};

export default LensPopup;
