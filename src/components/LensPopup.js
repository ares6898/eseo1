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
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      setVisible(true);
    }
  }, [brand, currentBrand]);

  const brandData = {
    hoya: {
      name: "니콘 씨맥스 INF - 일본 니콘",
      logo: "/logos/nikon.jpg",
      image: "/images/see1.jpg",
      description: [
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-yellow-500" />, text: "8개축 수차제어" },
        { icon: <Gem className="inline w-5 h-5 mr-1 text-purple-500" />, text: "세계최고 기술력으로 가장 선명한 안경렌즈" },
        { icon: <Shield className="inline w-5 h-5 mr-1 text-blue-500" />, text: "자세한 설명은 카달로그로 확인하세요." }
      ],
      recommendation: "어떤 도수에서도 가장 선명한 안경렌즈.",
      review: "“같은 도수인데도 더 선명하고 오래 가네요. 한 번 쓰면 다시 돌아가기 어렵습니다.”",
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
      ],
      recommendation: "안경 교체 주기가 짧거나, 하루 착용 시간이 짧은 고객님께 실속 있는 선택이 됩니다.",
      review: "“가성비 최고! 아이들안경, 그리고 예비용으로 딱 좋아요.”"
    },
    chemi3: {
      name: "니콘 BLUV - 일본 니콘",
      logo: "/logos/nikon.jpg",
      image: ["/images/bluv.jpg","/images/bluv2.jpg"],
      description: [
        { icon: <Star className="inline w-5 h-5 mr-1 text-yellow-500" />, text: "유해한 블루라이트만 선별적 차단" },
        { icon: <Shield className="inline w-5 h-5 mr-1 text-blue-500" />, text: "비구면설계의 고기능렌즈로 더욱 선명하게" },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-indigo-500" />, text: "최신 코팅 기술 적용" }
      ],
      recommendation: "눈 건강을 중시하신다면, 자외선과 블루라이트를 선별적으로 차단하는 BLUV를 추천드립니다.",
      review: "“눈 피로가 훨씬 줄었어요. 전보다 더 얇고 또렸해졌어요.”"
    },
    chemi11: {
      name: "케미 원앤원 - 국산 케미",
      logo: "/images/chemi-logo.jpg",
      image: "/photo/oneand.png",
      description: [
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "변색속도 : ⭐⭐ " },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "변색농도 : ⭐ " },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "색상 : 그레이🖤, 브라운🤎" }
      ],
      recommendation: "가장 기본적인 변색방식",
      review: "“저렴한 가격이 만족스러워요.”"
    },
    chemip: {
      name: "케미 포토에이드 - 국산 케미",
      logo: "/images/chemi-logo.jpg",
      image: "/photo/photoA.jpg",
      description: [
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "변색속도 : ⭐⭐⭐ " },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "변색농도 : ⭐⭐ " },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "색상 : 그레이🖤, 브라운🤎" }
      ],
      recommendation: "스핀코팅변색 + 블루라이트차단",
      review: "“가성비좋은 보안경으로 추천합니다.”"
    },
    sensity: {
      name: "호야 센서티2 - 일본 호야",
      logo: "/images/chemi-logo.jpg",
      image: "/photo/sensity.jpg",
      description: [
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "변색속도 : ⭐⭐⭐⭐ " },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "변색농도 : ⭐⭐⭐⭐ " },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "색상 : 그레이🖤 브라운🤎 그린💚 3~7일" }
      ],
      recommendation: "더 진하고 더 빠릅니다.",
      review: "“빠르고 진하게 변색되니 선글라스가 필요없어요.”"
    },
    gens: {
      name: "니콘 젠S 스타일컬러 - 일본 니콘",
      logo: "/logos/nikon.jpg",
      image: "/photo/gens.jpg",
      description: [
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "변색속도 : ⭐⭐⭐⭐⭐ - 전세계 제품중 가장 빠른 속도 " },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "변색농도 : ⭐⭐⭐⭐ " },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "색상 : 앰버,사파이어,루비 등 카달로그 확인👌 7~10일" }
      ],
      recommendation: "주문제작RX렌즈, 다양한 컬러",
      review: "“색 빠지는 속도가 기존렌즈와는 차원이 다르네요. 정말빨라요”"
    },
    ex: {
      name: "니콘 엑스트라액티브RX - 일본 니콘",
      logo: "/logos/nikon.jpg",
      image: "/photo/ex.jpg",
      description: [
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "변색속도 : ⭐⭐⭐⭐ " },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "변색농도 : ⭐⭐⭐⭐⭐ - 전세계 제품중 가장 진한 농도 " },
        { icon: <Sparkles className="inline w-5 h-5 mr-1 text-blue-500" />, text: "색상 : 그레이🖤 브라운🤎 그린💚 7~10일" }
      ],
      recommendation: "차 안에서도 변색. 세계에서 가장 진한 변색렌즈",
      review: "“다른 변색렌즈는 차안에서 변하지 않아요. 엑스트라액티브는 차안에서도 변색됩니다.”"
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

  return (<>
      {visible && <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"></div>}
      {data.bling && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-yellow-100 via-white to-blue-100 opacity-20 blur-md"></div>
        </div>
      )}
      <div className={`fixed bottom-0 left-0 w-full bg-white p-4 md:p-6 rounded-t-2xl shadow-2xl z-50 max-h-[95vh] overflow-y-auto transition-transform duration-500 ease-out transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className={`text-center mb-6 p-4 rounded-xl ${headerBgClass}`}>
          <img src={data.logo} alt={`${data.name} 로고`} className={`h-16 mx-auto mb-3 ${currentBrand === 'hoya' ? 'animate-bounce-slow' : currentBrand === 'chemi3' ? 'animate-zoom-in' : ''}`} onClick={onClose} style={{ cursor: 'pointer' }} />
          <h2 className={`text-2xl font-semibold ${currentBrand === 'hoya' ? 'animate-fade-in-slow' : currentBrand === 'chemi3' ? 'animate-fade-in' : ''}`}>{data.name}</h2>
{currentBrand === "chemi2" && <div className={`inline-block text-xs font-bold px-2 py-1 rounded-full mt-2 ${
        currentBrand === 'chemi2' ? 'bg-green-100 text-green-800 animate-fade-in' :
        currentBrand === 'chemi3' ? 'bg-purple-100 text-purple-800 animate-fade-in-slow' :
        'bg-yellow-100 text-yellow-800 animate-bounce-slow'
      }`}>👍 가성비 추천</div>}
{currentBrand === "chemi3" && <div className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded-full mt-2">⭐ 고기능 추천</div>}
{currentBrand === "hoya" && <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full mt-2">🌟 베스트 추천</div>}
        </div>

        {/* ✅ 추천 고객 문구 삽입 */}
        <div className="text-center text-sm italic text-gray-600 mb-4 px-4">
          📌 {data.recommendation}
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center px-4 mb-6">
  <div className="flex-shrink-0 flex gap-4">
  {imageList.map((src, idx) => (
    <img
      key={idx}
      src={src}
      alt={`설명 이미지 ${idx + 1}`}
      className={`rounded-xl object-contain transition-transform duration-500 ease-in-out ${currentBrand === "hoya" ? "h-56 w-auto animate-fade-in-slow" : "h-48 w-auto"}`}
    />
  ))}
</div>
  <ul className="text-base leading-relaxed text-gray-700 text-left max-w-md">
    {data.description.map((line, idx) => (
      <li key={idx} className="mb-3 font-medium flex items-start">
        {line.icon}<span>{line.text}</span>
      </li>
    ))}
  </ul>
</div>
<div className="text-center text-sm italic text-gray-500 mb-6 px-4 animate-fade-in-slow">
  <div className="text-xs text-blue-600 font-semibold mb-1">💬 실제 고객 리뷰</div>
  {data.review}
</div>
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
