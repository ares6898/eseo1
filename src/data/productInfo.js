// src/data/productInfo.js

export const PRODUCT_INFO = {

    C시리즈: {
    manufacturer: "케미",
    desc: "가볍게 사용하는 실속형",
    grade: "합리적 선택",
    badge: "입문 추천",
    variants: {
      C6: {
        summary:
          "누진다초점 적응이 수월하고 사용량이 많지 않은 고객에게 부담 없이 권하기 좋은 제품입니다.",
        goodFor: ["가벼운 근거리 작업", "가격 부담이 큰 고객", "입문형 누진다초점"],
        points: ["실속형", "부담 적은 선택", "기본 기능 중심"],
        image: "/images/C6.jpg",
        url: null,

        regularPrices: {
          "1.50": "36.5만원",
          "1.60": "43.5만원",
          "1.67": "51만원",
          "1.74": "64만원",
        },
        salePrices: {
          "1.50": "17.9만원",
          "1.60": "20.9만원",
          "1.67": "27.9만원",
          "1.74": "39.9만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
          "1.74": "3만원",
        },
        tintSalePrices: {
          "1.50": "1.5만원",
          "1.60": "1.5만원",
          "1.67": "1.5만원",
          "1.74": "1.5만원",
        },

        photoRegularPrices: {
          "1.60": "10만원",
          "1.67": "10만원",
        },
        photoSalePrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },

        premiumCoatingRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
          "1.74": "3만원",
        },
        premiumCoatingSalePrices: {
          "1.50": "1만원",
          "1.60": "1만원",
          "1.67": "1만원",
          "1.74": "1만원",
        },
      },

      C4: {
        summary: "부담 없는 실속노멀버전.",
        goodFor: ["가벼운 근거리 작업", "가격 부담이 큰 고객", "입문형 누진다초점"],
        points: ["실속형", "부담 적은 선택", "기본 기능 중심"],
        image: "/images/C3.jpg",
        url: null,

        regularPrices: {
          "1.50": "32.5만원",
          "1.60": "38만원",
          "1.67": "44.5만원",
          "1.74": "59만원",
        },
        salePrices: {
          "1.50": "13.9만원",
          "1.60": "16.9만원",
          "1.67": "20.9만원",
          "1.74": "25.9만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
          "1.74": "3만원",
        },
        tintSalePrices: {
          "1.50": "1.5만원",
          "1.60": "1.5만원",
          "1.67": "1.5만원",
          "1.74": "1.5만원",
        },

        photoRegularPrices: {
          "1.60": "10만원",
          "1.67": "10만원",
        },
        photoSalePrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },

        premiumCoatingRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
          "1.74": "3만원",
        },
        premiumCoatingSalePrices: {
          "1.50": "1만원",
          "1.60": "1만원",
          "1.67": "1만원",
          "1.74": "1만원",
        },
      },

      C1: {
        summary: "부담 없는 실속형버전.",
        goodFor: ["가벼운 근거리 작업", "가격 부담이 큰 고객", "입문형 누진다초점"],
        points: ["실속형", "부담 적은 선택", "기본 기능 중심"],
        image: "/images/C1.jpg",
        url: null,

        regularPrices: {
          "1.50": "23.5만원",
          "1.60": "29.5만원",
          "1.67": "35.5만원",
          "1.74": "49만원",
        },
        salePrices: {
          "1.50": "9.9만원",
          "1.60": "12.9만원",
          "1.67": "15.9만원",
          "1.74": "21.9만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
          "1.74": "3만원",
        },
        tintSalePrices: {
          "1.50": "1.5만원",
          "1.60": "1.5만원",
          "1.67": "1.5만원",
          "1.74": "1.5만원",
        },

        photoRegularPrices: {
          "1.60": "10만원",
          "1.67": "10만원",
        },
        photoSalePrices: {
          "1.60": "2만원",
          "1.67": "4만원",
        },

        premiumCoatingRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
          "1.74": "3만원",
        },
        premiumCoatingSalePrices: {
          "1.50": "1만원",
          "1.60": "1만원",
          "1.67": "1만원",
          "1.74": "1만원",
        },
      },
    },
  },

  E에센셜: {
    manufacturer: "에실로",
    desc: "디지털 기기 특화 설계",
    grade: "스마트형",
    badge: "실내중심",
    variants: {
      E2: {
        summary: "기본형보다 디지털 디바이스 특화설계로 조금더 편안하게.",
        goodFor: ["디지털기기 특화", "근거리 시야 무난", "가성비좋은 제품"],
        points: ["실내 중심", "근용 특화", "합리적인 가격"],
        image: "/images/E22.jpg",
        url: null,

        regularPrices: {
          "1.50": "39만원",
          "1.60": "47만원",
          "1.67": "55만원",
        },
        salePrices: {
          "1.50": "24만원",
          "1.60": "28만원",
          "1.67": "34만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },
        tintSalePrices: {
          "1.50": "1.5만원",
          "1.60": "1.5만원",
          "1.67": "1.5만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
        },
        photoSalePrices: {
          "1.50": "6만원",
          "1.60": "7.8만원",
          "1.67": "7.8만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          "1.60": "3만원",
          "1.67": "3만원",
        },
      },

      E1: {
        summary:
          "누진다초점 적응이 수월하고 근거리도수가 높지 않은 고객님께 권하는 제품입니다.",
        goodFor: ["가벼운 근거리 작업", "가격 부담이 큰 고객", "예비용 안경"],
        points: ["실속형", "부담 적은 선택", "기본 기능 중심"],
        image: "/images/E12.jpg",
        url: null,

        regularPrices: {
          "1.50": "32만원",
          "1.60": "38만원",
        },
        salePrices: {
          "1.50": "18만원",
          "1.60": "24만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
        },
        tintSalePrices: {
          "1.50": "1.5만원",
          "1.60": "1.5만원",
        },

        photoRegularPrices: {},
        photoSalePrices: {},

        premiumCoatingRegularPrices: {},
        premiumCoatingSalePrices: {
          "1.50": "0만원",
          "1.60": "0만원",
          "1.67": "0만원",
        },
      },
    },
  },

  E3: {
    manufacturer: "에실로",
    desc: "무난하고 적응 쉬운 선택",
    grade: "밸런스형",
    badge: "적응 추천",
    variants: {
      기본: {
        summary:
          "너무 저가형보다는 편안함을 원하면서도 무난하게 적응하기 좋은 균형형 제품입니다.",
        goodFor: ["원시, 난시고객", "무난한 적응감 선호", "가성비와 편안함 동시 고려"],
        points: ["적응 무난", "균형 잡힌 선택", "합리적인 가성비"],
        image: "/images/E32.jpg",
        url: null,

        regularPrices: {
          "1.50": "48만원",
          "1.60": "57만원",
          "1.67": "71만원",
        },
        salePrices: {
          "1.50": "28만원",
          "1.60": "34만원",
          "1.67": "42만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },
        tintSalePrices: {
          "1.50": "1.5만원",
          "1.60": "1.5만원",
          "1.67": "1.5만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
        },
        photoSalePrices: {
          "1.50": "10만원",
          "1.60": "10만원",
          "1.67": "10만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          "1.60": "2.5만원",
          "1.67": "2.5만원",
        },
      },
    },
  },

  E4: {
    manufacturer: "에실로",
    desc: "안정적인 시야의 다초점렌즈",
    grade: "밸런스형",
    badge: "적응 추천",
    variants: {
      기본: {
        summary:
          "양안시, 복잡한 도수에서도 안정적인 시야와 빠른 적응을 제공하는 제품",
        goodFor: ["양안 도수차", "빠른 적응감", "합리적인 개인맞춤렌즈"],
        points: ["빠른 적응", "안정적인 선택", "편안한 착용감"],
        image: "/images/E44.jpg",
        url: null,

        regularPrices: {
          "1.50": "62만원",
          "1.60": "75만원",
          "1.67": "86만원",
        },
        salePrices: {
          "1.50": "31만원",
          "1.60": "37.5만원",
          "1.67": "43만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },
        tintSalePrices: {
          "1.50": "1.5만원",
          "1.60": "1.5만원",
          "1.67": "1.5만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
        },
        photoSalePrices: {
          "1.50": "10만원",
          "1.60": "10만원",
          "1.67": "10만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          "1.60": "2.5만원",
          "1.67": "2.5만원",
        },
      },
    },
  },

  컴포트맥스: {
    manufacturer: "바리락스",
    desc: "하루 종일 지속되는 편안함",
    grade: "프리미엄",
    badge: "편안함 추천",
    variants: {
      기본: {
        summary: "전세계 판매1위 브랜드. <바리락스>의 기술력을 확인하세요.",
        goodFor: ["첫 누진으로 빠른적응", "편안한 일상을 원하는 고객", "기존 안경의 자세가 불편한고객"],
        points: ["편안한 자세", "업무 활용도 우수", "프리미엄 입문"],
        image: "/images/BC.jpg",
        url: "https://www.essilor.com/kr-ko/products/varilux/varilux-comfort-max/",

        regularPrices: {
          "1.50": "38만원",
          "1.60": "48만원",
          "1.67": "58만원",
        },
        salePrices: {
          "1.50": "30.4만원",
          "1.60": "38.4만원",
          "1.67": "46.4만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },
        tintSalePrices: {
          "1.50": "2만원",
          "1.60": "2만원",
          "1.67": "2만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
        },
        photoSalePrices: {
          "1.50": "14만원",
          "1.60": "14만원",
          "1.67": "14만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          "1.50": "3.5만원",
          "1.60": "3.5만원",
          "1.67": "3.5만원",
        },
      },

      KAN: {
        summary:
          "전세계 판매1위 브랜드. <바리락스>의 기술력을 확인하세요. ((한국인 전용설계))",
        goodFor: ["첫 누진으로 빠른적응", "편안한 일상을 원하는 고객", "기존 안경의 자세가 불편한고객"],
        points: ["KAN 설계", "적응감 향상", "상위 업그레이드"],
        image: "/images/BC.jpg",
        url: "https://www.essilor.com/kr-ko/products/varilux/varilux-comfort-max/",

        regularPrices: {
          "1.50": "48만원",
          "1.60": "58만원",
          "1.67": "68만원",
        },
        salePrices: {
          "1.50": "33.6만원",
          "1.60": "40.6만원",
          "1.67": "47.6만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },
        tintSalePrices: {
          "1.50": "2만원",
          "1.60": "2만원",
          "1.67": "2만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
        },
        photoSalePrices: {
          "1.50": "14만원",
          "1.60": "14만원",
          "1.67": "14만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          "1.60": "3.5만원",
          "1.67": "3.5만원",
        },
      },
    },
  },

  피지오: {
    manufacturer: "바리락스",
    desc: "다양한 환경에서 깊이 있는 선명함",
    grade: "상위 프리미엄",
    badge: "상위 추천",
    variants: {
      기본: {
        summary: "전세계 판매1위 브랜드. <바리락스>의 기술력을 확인하세요.",
        goodFor: ["장시간 착용 고객", "활동적인 라이프스타일", "원근거리 초점이동이 늦는고객"],
        points: ["실제 동공변화 정밀예측", "장시간 사용 대응", "뛰어난 시각 성능", "야간운전"],
        image: "/images/BP.jpg",
        url: "https://www.essilor.com/kr-ko/products/varilux/varilux-physio-extensee/",

        regularPrices: {
          "1.50": "55만원",
          "1.60": "65만원",
          "1.67": "75만원",
          "1.74": "90만원",
        },
        salePrices: {
          "1.50": "44만원",
          "1.60": "56만원",
          "1.67": "64만원",
          "1.74": "72만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },
        tintSalePrices: {
          "1.50": "2만원",
          "1.60": "2만원",
          "1.67": "2만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
          "1.74": "20만원",
        },
        photoSalePrices: {
          "1.50": "14만원",
          "1.60": "14만원",
          "1.67": "14만원",
          "1.74": "14만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          "1.60": "3.5만원",
          "1.67": "3.5만원",
        },
      },

      Kan: {
        summary:
          "전세계 판매1위 브랜드. <바리락스>의 기술력을 확인하세요. ((한국인 전용설계))",
        goodFor: ["장시간 착용 고객", "활동적인 라이프스타일", "원근거리 초점이동이 늦는고객"],
        points: ["실제 동공변화 정밀예측", "장시간 사용 대응", "뛰어난 시각 성능", "야간운전"],
        image: "/images/BP.jpg",
        url: "https://www.essilor.com/kr-ko/products/varilux/varilux-physio-extensee/",

        regularPrices: {
          "1.50": "65만원",
          "1.60": "75만원",
          "1.67": "85만원",
          "1.74": "100만원",
        },
        salePrices: {
          "1.50": "52만원",
          "1.60": "64만원",
          "1.67": "72만원",
          "1.74": "84만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },
        tintSalePrices: {
          "1.50": "2만원",
          "1.60": "2만원",
          "1.67": "2만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
          "1.74": "20만원",
        },
        photoSalePrices: {
          "1.50": "14만원",
          "1.60": "14만원",
          "1.67": "14만원",
          "1.74": "14만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          "1.60": "3.5만원",
          "1.67": "3.5만원",
        },
      },
    },
  },

  XR: {
    manufacturer: "바리락스",
    desc: "세계최고 다초점렌즈",
    grade: "AI설계 다초점렌즈",
    badge: "모든상황에서 추천",
    variants: {
      기본: {
        summary: "세계판매 1위의 <바리락스>의 최첨단 성능의 누진다초점.",
        goodFor: ["최상위 제품 선호", "적응과 시야 모두 중요", "프리미엄 가치를 정확히 이해하는 고객"],
        points: ["착용 첫날 적응", "빠르고 정확한 시야전환", "AI설계", "언제나 지속되는 선명함"],
        image: "/images/BX.jpg",
        url: "https://www.essilor.com/kr-ko/products/varilux/varilux-xr-series/",

        regularPrices: {
          "1.50": "90만원",
          "1.60": "100만원",
          "1.67": "110만원",
          "1.74": "140만원",
        },
        salePrices: {
          "1.50": "63만원",
          "1.60": "73만원",
          "1.67": "77만원",
          "1.74": "98만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },
        tintSalePrices: {
          "1.50": "2만원",
          "1.60": "2만원",
          "1.67": "2만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
          "1.74": "20만원",
        },
        photoSalePrices: {
          "1.50": "14만원",
          "1.60": "14만원",
          "1.67": "14만원",
          "1.74": "14만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          "1.60": "3.5만원",
          "1.67": "3.5만원",
        },
      },
    },
  },
    로하스: {
    manufacturer: "니콘",
    desc: "첫 누진의 최적의 솔루션",
    grade: "프리미엄",
    badge: "적응감 추천",
    variants: {
      기본: {
        summary: "글로벌 누진브랜드 니콘의 누진 첫 사용자를 위한 최적의 솔루션",
        goodFor: ["첫 누진으로 빠른적응", "편안한 일상을 원하는 고객", "기존 안경의 자세가 불편한고객"],
        points: ["첫 누진 전용", "빠른 일상적응", "프리미엄 입문"],
        image: "/images/BC.jpg",
        url: "https://www.nikonlenswear.com/ko-kr/our-lenses/vision-correction/for-presbyopes/lohas-active",

        regularPrices: {
          "1.50": "40만원",
          "1.60": "55만원",
          "1.67": "65만원",
        },
        salePrices: {
          "1.50": "30만원",
          "1.60": "38.5만원",
          "1.67": "45.5만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },
        tintSalePrices: {
          "1.50": "2만원",
          "1.60": "2만원",
          "1.67": "2만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
        },
        photoSalePrices: {
          "1.50": "14만원",
          "1.60": "14만원",
          "1.67": "14만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          
          "1.60": "3.5만원",
          "1.67": "3.5만원",
        },
      },
    },
  },
  
  어드밴스Z: {
    manufacturer: "니콘",
    desc: "디지털 라이프",
    grade: "프리미엄",
    badge: "정적사용자 추천",
    variants: {
      기본: {
        summary: "글로벌 누진브랜드 니콘. 디지털 라이프 스타일의 합리적인 가격의 다초점렌즈",
        goodFor: ["정적사용자", "실내중심 업무용", "디지털기기 사용자"],
        points: ["스마트폰", "실내활동 중심", "프리미엄 입문"],
        image: "/images/BC.jpg",
        url: "https://www.nikonlenswear.com/ko-kr/our-lenses/vision-correction/z-series-progressives/presio-advance-z",

        regularPrices: {
          "1.50": "40만원",
          "1.60": "55만원",
          "1.67": "65만원",
		  "1.74": "75만원",
        },
        salePrices: {
          "1.50": "30만원",
          "1.60": "39만원",
          "1.67": "46만원",
		  "1.74": "53만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
		  "1.74": "3만원",
        },
        tintSalePrices: {
          "1.50": "2만원",
          "1.60": "2만원",
          "1.67": "2만원",
		  "1.74": "2만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
		  "1.74": "20만원",
        },
        photoSalePrices: {
          "1.50": "14만원",
          "1.60": "14만원",
          "1.67": "14만원",
		  "1.74": "14만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          
          "1.60": "3.5만원",
          "1.67": "3.5만원",
        },
      },
    },
  },
  
  
  와이드Z: {
    manufacturer: "니콘",
    desc: "울렁거림 없이 편안하게",
    grade: "프리미엄",
    badge: "편안함 추천",
    variants: {
      기본: {
        summary: "글로벌 누진브랜드 니콘의 베스트셀러 제품. 넓고 탁트인 시야를 경험하세요.",
        goodFor: ["난시가 있는고객", "울렁임에 민감한고객", "단독안경을 운용하는고객"],
        points: ["베스트셀러", "빠른적응속도", "합리적인프리미엄"],
        image: "/images/BP.jpg",
        url: "https://www.nikonlenswear.com/ko-kr/our-lenses/vision-correction/z-series-progressives/presio-wide-z",

        regularPrices: {
          "1.50": "55만원",
          "1.60": "70만원",
          "1.67": "80만원",
		  "1.74": "90만원",
        },
        salePrices: {
          "1.50": "39만원",
          "1.60": "49만원",
          "1.67": "56만원",
		  "1.74": "63만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
		  "1.74": "3만원",
        },
        tintSalePrices: {
          "1.50": "2만원",
          "1.60": "2만원",
          "1.67": "2만원",
		  "1.74": "2만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
		  "1.74": "20만원",
        },
        photoSalePrices: {
          "1.50": "14만원",
          "1.60": "14만원",
          "1.67": "14만원",
		  "1.74": "14만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          
          "1.60": "3.5만원",
          "1.67": "3.5만원",
        },
      },
    },
  },
  
  파워Z: {
    manufacturer: "니콘",
    desc: "완벽한 균형",
    grade: "프리미엄",
    badge: "최적의 편안함",
    variants: {
      기본: {
        summary: "글로벌 누진브랜드 니콘의 프리미엄. 높은 가입도에서도 편안함을 제공합니다.",
        goodFor: ["가입도가 높은고객", "울렁임에 민감한고객", "단독안경을 운용하는고객"],
        points: ["높은 가입도전용", "빠른적응속도", "최적의 편안함"],
        image: "/images/BP.jpg",
        url: "https://www.nikonlenswear.com/ko-kr/our-lenses/vision-correction/z-series-progressives/presio-power-z",

        regularPrices: {
          "1.50": "70만원",
          "1.60": "90만원",
          "1.67": "105만원",
		  "1.74": "140만원",
        },
        salePrices: {
          "1.50": "49만원",
          "1.60": "63만원",
          "1.67": "74만원",
		  "1.74": "98만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
		  "1.74": "3만원",
        },
        tintSalePrices: {
          "1.50": "2만원",
          "1.60": "2만원",
          "1.67": "2만원",
		  "1.74": "2만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
		  "1.74": "20만원",
        },
        photoSalePrices: {
          "1.50": "14만원",
          "1.60": "14만원",
          "1.67": "14만원",
		  "1.74": "14만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          
          "1.60": "3.5만원",
          "1.67": "3.5만원",
        },
      },
    },
  },
  
  
  씨맥스Z: {
    manufacturer: "니콘",
    desc: "40억개의 디자인",
    grade: "프리미엄",
    badge: "혁신적인 개인맞춤",
    variants: {
      기본: {
        summary: "글로벌 누진브랜드 니콘의 최고의 누진다초점. 어떠한 조건에서도 선명하고 자연스럽게.",
        goodFor: ["모든 고객", "프리미엄의 가치를 이해하는 고객", "시각적 피로를 줄이고 싶은 고객"],
        points: ["피로감없는 시야", "장시간착용자", "대비감도최적화"],
        image: "/images/BX.jpg",
        url: "https://www.nikonlenswear.com/ko-kr/our-lenses/vision-correction/z-series-progressives/seemax-master-z",

        regularPrices: {
          "1.50": "90만원",
          "1.60": "110만원",
          "1.67": "130만원",
		  "1.74": "160만원",
        },
        salePrices: {
          "1.50": "54만원",
          "1.60": "66만원",
          "1.67": "78만원",
		  "1.74": "96만원",
        },

        tintRegularPrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
		  "1.74": "3만원",
        },
        tintSalePrices: {
          "1.50": "2만원",
          "1.60": "2만원",
          "1.67": "2만원",
		  "1.74": "2만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
		  "1.74": "20만원",
        },
        photoSalePrices: {
          "1.50": "14만원",
          "1.60": "14만원",
          "1.67": "14만원",
		  "1.74": "14만원",
        },

        premiumCoatingRegularPrices: {
          "1.60": "5만원",
          "1.67": "5만원",
        },
        premiumCoatingSalePrices: {
          
          "1.60": "3.5만원",
          "1.67": "3.5만원",
        },
      },
    },
  },
  
  
  
};
