import React, { useMemo, useState } from "react";

const REFRACTIVE_OPTIONS = ["1.50", "1.60", "1.67", "1.74"];

const PRODUCT_INFO = {
  C6: {
    desc: "가볍게 사용하는 실속형",
    grade: "합리적 선택",
    badge: "입문 추천",
    variants: {
      기본: {
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

  E1: {
    desc: "가볍게 사용하는 실속형",
    grade: "실속형 선택",
    badge: "서브 추천",
    variants: {
      기본: {
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
          "1.60": "23.5만원",
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

  E2: {
    desc: "디지털 기기 특화 설계",
    grade: "스마트형",
    badge: "실내중심",
    variants: {
      기본: {
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
          "1.50": "23.4만원",
          "1.60": "28.2만원",
          "1.67": "33만원",
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
          "1.50": "6.6만원",
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
    },
  },

  E3: {
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
          "1.50": "24만원",
          "1.60": "31만원",
          "1.67": "38만원",
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
          "1.50": "38.5만원",
          "1.60": "45.5만원",
          "1.67": "52.5만원",
          "1.74": "60만원",
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
          "1.50": "45.5만원",
          "1.60": "52.5만원",
          "1.67": "59.5만원",
          "1.74": "70만원",
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
    desc: "세계최고 다초점렌즈",
    grade: "AI설계 다초점렌즈",
    badge: "모든상황에서 추천",
    variants: {
      기본: {
        summary: "세계판매 1위의 <바리락스>의 최첨단 성능의 누진다초점.",
        goodFor: ["최상위 제품 선호", "적응과 시야 모두 중요", "프리미엄 가치 설명이 잘 먹히는 고객"],
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
          "1.50": "49만원",
          "1.60": "54만원",
          "1.67": "58만원",
          "1.74": "68만원",
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
};

function getCurrentVariantInfo(product, selectedVariant) {
  const variantNames = Object.keys(product?.variants || {});
  return (
    product?.variants?.[selectedVariant] || product?.variants?.[variantNames[0]]
  );
}

function getSphereOptions(refractiveType) {
  if (refractiveType === "근시") {
    return ["LOW", "-1.00", "-2.00", "-4.00", "-6.00", "HIGH"];
  }
  if (refractiveType === "원시") {
    return ["LOW", "+1.00", "+2.00", "+4.00", "+6.00", "HIGH"];
  }
  return [];
}

function getRecommendedIndexBySphere(refractiveType, sphereLevel) {
  if (!refractiveType || !sphereLevel) return "1.50";

  const normalized = String(sphereLevel).toUpperCase();

  if (normalized === "LOW") return "1.50";
  if (normalized === "HIGH") return "1.74";

  const numeric = Math.abs(
    parseFloat(normalized.replace("+", "").replace("-", ""))
  );

  if (numeric <= 2.0) return "1.50";
  if (numeric <= 4.0) return "1.60";
  if (numeric <= 6.0) return "1.67";

  return "1.74";
}

function canUsePremiumCoating(variantInfo, selectedIndex) {
  return Boolean(
    variantInfo?.premiumCoatingRegularPrices?.[selectedIndex] &&
      variantInfo?.premiumCoatingSalePrices?.[selectedIndex]
  );
}

function canUseTint(variantInfo, selectedIndex) {
  return Boolean(
    variantInfo?.tintRegularPrices?.[selectedIndex] &&
      variantInfo?.tintSalePrices?.[selectedIndex]
  );
}

function canUsePhoto(variantInfo, selectedIndex) {
  return Boolean(
    variantInfo?.photoRegularPrices?.[selectedIndex] &&
      variantInfo?.photoSalePrices?.[selectedIndex]
  );
}

function getPreferredVariant(productName, preferredVariant = null) {
  const product = PRODUCT_INFO[productName];
  if (!product?.variants) return "기본";

  const variantNames = Object.keys(product.variants);

  if (preferredVariant && product.variants[preferredVariant]) {
    return preferredVariant;
  }

  if (product.variants.KAN) return "KAN";
  if (product.variants.기본) return "기본";
  return variantNames[0];
}

function getPreferredCoatingMode(
  variantInfo,
  selectedIndex,
  selectedLensMode = "clear"
) {
  if (selectedLensMode !== "clear") return "basic";
  return canUsePremiumCoating(variantInfo, selectedIndex) ? "premium" : "basic";
}

function getPreferredSelection(
  productName,
  selectedIndex,
  preferredVariant = null,
  selectedLensMode = "clear"
) {
  const product = PRODUCT_INFO[productName];

  if (!product?.variants) {
    return {
      variant: "기본",
      coatingMode: "basic",
    };
  }

  const variant = getPreferredVariant(productName, preferredVariant);
  const variantInfo = product.variants[variant];
  const coatingMode = getPreferredCoatingMode(
    variantInfo,
    selectedIndex,
    selectedLensMode
  );

  return {
    variant,
    coatingMode,
  };
}

function parseKoreanPriceToNumber(priceText) {
  if (priceText === null || priceText === undefined) return 0;

  const text = String(priceText).trim();
  if (!text) return 0;

  if (text.includes("만원")) {
    const value = Number(text.replace(/만원/g, "").replace(/,/g, "").trim());
    return Number.isNaN(value) ? 0 : Math.round(value * 10000);
  }

  if (text.includes("원")) {
    const value = Number(text.replace(/원/g, "").replace(/,/g, "").trim());
    return Number.isNaN(value) ? 0 : Math.round(value);
  }

  const value = Number(text.replace(/,/g, "").trim());
  return Number.isNaN(value) ? 0 : Math.round(value);
}

function getPriceBreakdown(
  variantInfo,
  selectedIndex,
  selectedLensMode,
  selectedCoatingMode
) {
  if (!variantInfo) return null;

  const baseRegularText = variantInfo?.regularPrices?.[selectedIndex] || null;
  const baseSaleText = variantInfo?.salePrices?.[selectedIndex] || null;

  if (!baseRegularText || !baseSaleText) return null;

  let regular = parseKoreanPriceToNumber(baseRegularText);
  let sale = parseKoreanPriceToNumber(baseSaleText);

  if (selectedLensMode === "tint") {
    const tintRegularText =
      variantInfo?.tintRegularPrices?.[selectedIndex] || null;
    const tintSaleText = variantInfo?.tintSalePrices?.[selectedIndex] || null;

    if (!tintRegularText || !tintSaleText) return null;

    regular += parseKoreanPriceToNumber(tintRegularText);
    sale += parseKoreanPriceToNumber(tintSaleText);
  }

  if (selectedLensMode === "photo") {
    const photoRegularText =
      variantInfo?.photoRegularPrices?.[selectedIndex] || null;
    const photoSaleText =
      variantInfo?.photoSalePrices?.[selectedIndex] || null;

    if (!photoRegularText || !photoSaleText) return null;

    regular += parseKoreanPriceToNumber(photoRegularText);
    sale += parseKoreanPriceToNumber(photoSaleText);
  }

  if (selectedCoatingMode === "premium") {
    const premiumRegularText =
      variantInfo?.premiumCoatingRegularPrices?.[selectedIndex] || null;
    const premiumSaleText =
      variantInfo?.premiumCoatingSalePrices?.[selectedIndex] || null;

    if (!premiumRegularText || !premiumSaleText) return null;

    regular += parseKoreanPriceToNumber(premiumRegularText);
    sale += parseKoreanPriceToNumber(premiumSaleText);
  }

  return { regular, sale };
}

export default function Ina2Flow() {
  const [step, setStep] = useState("intro");

  const [refractiveType, setRefractiveType] = useState(null);
  const [sphereLevel, setSphereLevel] = useState(null);
  const [astigmatismType, setAstigmatismType] = useState(null);
  const [addLevel, setAddLevel] = useState(null);
  const [usage, setUsage] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState("기본");
  const [selectedIndex, setSelectedIndex] = useState("1.50");
  const [selectedLensMode, setSelectedLensMode] = useState("clear");
  const [selectedCoatingMode, setSelectedCoatingMode] = useState("basic");

  const canNextDistance = refractiveType && sphereLevel && astigmatismType;
  const mainRecommended = useMemo(
    () => recommended?.[0]?.name || null,
    [recommended]
  );
  const leftProduct = selectedProduct || mainRecommended;
  const sphereOptions = useMemo(
    () => getSphereOptions(refractiveType),
    [refractiveType]
  );

  const applyPreferredSelection = (
    productName,
    nextIndex,
    lensMode = "clear",
    preferredVariant = null
  ) => {
    const next = getPreferredSelection(
      productName,
      nextIndex,
      preferredVariant,
      lensMode
    );

    setSelectedProduct(productName);
    setSelectedVariant(next.variant);
    setSelectedIndex(nextIndex);
    setSelectedLensMode(lensMode);
    setSelectedCoatingMode(next.coatingMode);
  };

  const handleSelectProduct = (productName, preferredVariant = null) => {
    applyPreferredSelection(
      productName,
      selectedIndex,
      "clear",
      preferredVariant
    );
  };

  const handleSelectIndex = (idx) => {
    if (!leftProduct) {
      setSelectedIndex(idx);
      return;
    }

    const nextPreferredVariant =
      selectedVariant === "기본"
        ? getPreferredVariant(leftProduct)
        : getPreferredVariant(leftProduct, selectedVariant);

    const next = getPreferredSelection(
      leftProduct,
      idx,
      nextPreferredVariant,
      selectedLensMode
    );

    setSelectedIndex(idx);
    setSelectedVariant(next.variant);
    setSelectedCoatingMode(next.coatingMode);
  };

  const handleSelectLensModeForProduct = (
    productName,
    lensMode,
    preferredVariant = null
  ) => {
    applyPreferredSelection(
      productName,
      selectedIndex,
      lensMode,
      preferredVariant
    );
  };

  const handleSelectRefractiveType = (type) => {
    setRefractiveType(type);
    setSphereLevel(null);
    setSelectedIndex("1.50");
  };

  const handleSelectSphereLevel = (value) => {
    setSphereLevel(value);
    setSelectedIndex(getRecommendedIndexBySphere(refractiveType, value));
  };

  const resetToHome = () => {
    setStep("intro");
    setRefractiveType(null);
    setSphereLevel(null);
    setAstigmatismType(null);
    setAddLevel(null);
    setUsage(null);
    setRecommended([]);
    setSelectedProduct(null);
    setSelectedVariant("기본");
    setSelectedIndex("1.50");
    setSelectedLensMode("clear");
    setSelectedCoatingMode("basic");
  };

  const handleFinish = (level, use) => {
    let result = [];

    if (level === "low") {
      if (use === "light") {
        result = [
          { name: "C6", variant: "기본" },
          { name: "E1", variant: "기본" },
        ];
      } else {
        result = [
          { name: "E3", variant: "기본" },
          { name: "컴포트맥스", variant: "기본" },
        ];
      }
    }

    if (level === "mid") {
      if (use === "heavy") {
        result = [
          { name: "컴포트맥스", variant: "KAN" },
          { name: "피지오", variant: "Kan" },
        ];
      } else {
        result = [
          { name: "E3", variant: "기본" },
          { name: "컴포트맥스", variant: "기본" },
        ];
      }
    }

    if (level === "high") {
      if (use === "heavy") {
        result = [
          { name: "피지오", variant: "Kan" },
          { name: "XR", variant: "기본" },
        ];
      } else {
        result = [
          { name: "컴포트맥스", variant: "KAN" },
          { name: "피지오", variant: "기본" },
        ];
      }
    }

    const firstItem = result[0] || null;
    const firstProduct = firstItem?.name || null;
    const firstVariant = firstItem?.variant || null;

    const defaultIndex = selectedIndex || "1.50";
    const next = firstProduct
      ? getPreferredSelection(firstProduct, defaultIndex, firstVariant, "clear")
      : { variant: "기본", coatingMode: "basic" };

    setUsage(use);
    setRecommended(result);
    setSelectedProduct(firstProduct);
    setSelectedVariant(next.variant);
    setSelectedIndex(defaultIndex);
    setSelectedLensMode("clear");
    setSelectedCoatingMode(next.coatingMode);
    setStep("analyzing");

    setTimeout(() => {
      setStep("result");
    }, 1050);
  };

  const priceResult = useMemo(() => {
    if (!leftProduct) return null;

    const product = PRODUCT_INFO[leftProduct];
    const variantInfo = getCurrentVariantInfo(product, selectedVariant);

    return getPriceBreakdown(
      variantInfo,
      selectedIndex,
      selectedLensMode,
      selectedCoatingMode
    );
  }, [
    leftProduct,
    selectedVariant,
    selectedIndex,
    selectedLensMode,
    selectedCoatingMode,
  ]);

  const summaryText = useMemo(() => {
    if (!leftProduct) return "";

    const lensModeLabel =
      selectedLensMode === "clear"
        ? "클리어"
        : selectedLensMode === "tint"
        ? "착색"
        : "변색";

    const coatingLabel =
      selectedCoatingMode === "premium" ? "프리미엄코팅" : "기본코팅";

    return `${leftProduct} / ${selectedVariant} / ${selectedIndex} / ${lensModeLabel} / ${coatingLabel}`;
  }, [
    leftProduct,
    selectedVariant,
    selectedIndex,
    selectedLensMode,
    selectedCoatingMode,
  ]);

  return (
    <div className="w-screen h-screen bg-slate-50 overflow-hidden">
      <div className="w-full h-full px-6 py-5">
        <div className="relative w-full h-full bg-white rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden">
          <div className="w-full h-full flex">
            <div className="relative w-[64%] h-full border-r border-slate-200">
              {step === "result" && leftProduct ? (
                <>
                  <div className="h-full pb-[92px] overflow-hidden">
                    <ProductPreviewPanel
                      productName={leftProduct}
                      product={PRODUCT_INFO[leftProduct]}
                      selectedVariant={selectedVariant}
                      setSelectedVariant={setSelectedVariant}
                      selectedIndex={selectedIndex}
                      selectedLensMode={selectedLensMode}
                      selectedCoatingMode={selectedCoatingMode}
                      setSelectedCoatingMode={setSelectedCoatingMode}
                      setSelectedLensMode={setSelectedLensMode}
                      isMain={leftProduct === mainRecommended}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[92px] border-t border-slate-700 bg-slate-900 px-8 flex items-center justify-between z-20">
                    <div className="min-w-0 pr-6">
                      <div className="text-[13px] font-bold text-slate-400 mb-1">
                        현재 구성
                      </div>
                      <div className="text-[20px] font-extrabold text-white truncate break-keep">
                        {summaryText}
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      {priceResult ? (
                        <>
                          <div className="text-[14px] text-slate-400 line-through">
                            정상가 {priceResult.regular.toLocaleString()}원
                          </div>
                          <div className="text-[28px] font-extrabold text-cyan-300">
                            {priceResult.sale.toLocaleString()}원
                          </div>
                        </>
                      ) : (
                        <div className="text-[22px] font-bold text-red-300">
                          생산불가
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-full overflow-hidden">
                  <IntroPanel />
                </div>
              )}
            </div>

            <div className="relative w-[36%] h-full bg-gradient-to-b from-slate-50 to-slate-100 px-8 py-6 overflow-y-auto">
              <button
                onClick={resetToHome}
                className="absolute top-5 right-5 z-30 h-[48px] px-5 rounded-2xl bg-white border border-slate-300 text-slate-700 text-[16px] font-bold shadow-sm hover:bg-slate-50 transition"
              >
                홈
              </button>

              <div className="absolute top-5 left-5 right-24 flex flex-wrap gap-2 z-20">
                {refractiveType && <Chip text={refractiveType} />}
                {sphereLevel && <Chip text={`도수 ${sphereLevel}`} />}
                {astigmatismType && <Chip text={astigmatismType} />}
                {addLevel && (
                  <Chip
                    text={`ADD ${
                      addLevel === "low"
                        ? "낮음"
                        : addLevel === "mid"
                        ? "중간"
                        : "높음"
                    }`}
                  />
                )}
                {usage && (
                  <Chip
                    text={
                      usage === "light"
                        ? "가볍게 사용"
                        : usage === "normal"
                        ? "보통 사용"
                        : "많이 사용"
                    }
                  />
                )}
              </div>

              <div
                key={step}
                className="w-full min-h-full flex items-center justify-center pt-16 pb-4 animate-fade"
              >
                <div className="w-full">
                  {step === "intro" && (
                    <Center>
                      <MainButton onClick={() => setStep("distance")}>
                        맞춤 분석 시작
                      </MainButton>
                    </Center>
                  )}

                  {step === "distance" && (
                    <Center>
                      <Title>도수 기준 확인</Title>

                      <Grid2>
                        {["근시", "원시"].map((x) => (
                          <SelectBtn
                            key={x}
                            active={refractiveType === x}
                            onClick={() => handleSelectRefractiveType(x)}
                          >
                            {x}
                          </SelectBtn>
                        ))}
                      </Grid2>

                      {refractiveType && (
                        <div className="rounded-[24px] border border-slate-200 bg-white px-4 py-4">
                          <div className="text-[16px] font-bold text-slate-700 mb-3">
                            구면도수 선택
                          </div>

                          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                            {sphereOptions.map((value) => {
                              const active = sphereLevel === value;
                              return (
                                <button
                                  key={value}
                                  onClick={() => handleSelectSphereLevel(value)}
                                  className={`shrink-0 h-[54px] min-w-[92px] px-4 rounded-2xl border font-bold text-[16px] transition ${
                                    active
                                      ? "bg-blue-700 text-white border-blue-700"
                                      : "bg-slate-50 text-slate-800 border-slate-300 hover:bg-blue-50"
                                  }`}
                                >
                                  {value}
                                </button>
                              );
                            })}
                          </div>

                          {sphereLevel && (
                            <div className="mt-3 rounded-2xl bg-blue-50 border border-blue-200 px-4 py-3">
                              <div className="text-[13px] font-bold text-blue-700 mb-1">
                                기본 추천 굴절률
                              </div>
                              <div className="text-[20px] font-extrabold text-slate-900">
                                {getRecommendedIndexBySphere(
                                  refractiveType,
                                  sphereLevel
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      <Grid2>
                        {["난시 있음", "난시 없음"].map((x) => (
                          <SelectBtn
                            key={x}
                            active={astigmatismType === x}
                            onClick={() => setAstigmatismType(x)}
                          >
                            {x}
                          </SelectBtn>
                        ))}
                      </Grid2>

                      <NextBtn
                        active={canNextDistance}
                        onClick={() => canNextDistance && setStep("add")}
                      />
                    </Center>
                  )}

                  {step === "add" && (
                    <Center>
                      <Title>근용 도수 확인</Title>

                      <AddBtn
                        color="green"
                        active={addLevel === "low"}
                        onClick={() => setAddLevel("low")}
                        label="노안 저가입도"
                        sub="Add = +1.50↓"
                      />

                      <AddBtn
                        color="yellow"
                        active={addLevel === "mid"}
                        onClick={() => setAddLevel("mid")}
                        label="노안 중가입도"
                        sub="Add = +1.75↓"
                      />

                      <AddBtn
                        color="red"
                        active={addLevel === "high"}
                        onClick={() => setAddLevel("high")}
                        label="노안 고가입도"
                        sub="Add = +2.00↑"
                      />

                      {addLevel && (
                        <NextBtn active onClick={() => setStep("usage")} />
                      )}
                    </Center>
                  )}

{step === "usage" && (
  <Center>
    <Title>사용량 확인</Title>

    {/* 🔥 메인 유도 버튼 */}
    <div className="relative">

      {/* BEST 배지 */}
      <div className="absolute -top-3 -right-2 z-10 px-3 py-1 rounded-full bg-red-500 text-white text-[12px] font-extrabold shadow-md">
        BEST
      </div>

      <UsageBtn
        variant="best"
        sub="도수·사용환경 기준 최적 설계"
        onClick={() => handleFinish(addLevel, "heavy")}
      >
        정밀 분석 추천
      </UsageBtn>
    </div>

    {/* 균형 */}
    <UsageBtn
      variant="balanced"
      sub="적응과 가격을 함께 고려"
      onClick={() => handleFinish(addLevel, "normal")}
    >
      균형 추천
    </UsageBtn>

    {/* 실속 */}
    <UsageBtn
      variant="value"
      sub="저렴한 가격기준으로 추천"
      onClick={() => handleFinish(addLevel, "light")}
    >
      실속 추천
    </UsageBtn>

    <BackBtn onClick={() => setStep("add")}>
      이전 단계로
    </BackBtn>
  </Center>
)}

                  {step === "analyzing" && (
                    <div className="w-full flex items-center justify-center">
                      <div className="w-full rounded-[28px] bg-white border border-slate-200 shadow-sm px-7 py-9 text-center">
                        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-bold border border-blue-200 mb-5">
                          맞춤 추천 분석
                        </div>

                        <div className="text-[24px] font-extrabold text-slate-900 mb-3 break-keep leading-snug">
                          분석을 시작합니다.
                        </div>

                        <div className="text-[16px] text-slate-500 font-semibold leading-relaxed mb-8 break-keep">
                          도수와 사용환경을 반영하고 있습니다
                        </div>

                        <div className="flex items-center justify-center gap-3">
                          <span className="w-4 h-4 rounded-full bg-blue-500 animate-pulse [animation-delay:0ms]"></span>
                          <span className="w-4 h-4 rounded-full bg-blue-400 animate-pulse [animation-delay:150ms]"></span>
                          <span className="w-4 h-4 rounded-full bg-blue-300 animate-pulse [animation-delay:300ms]"></span>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === "result" && (
                    <ResultStep
                      recommended={recommended}
                      selectedProduct={selectedProduct}
                      selectedVariant={selectedVariant}
                      selectedIndex={selectedIndex}
                      selectedLensMode={selectedLensMode}
                      onSelectProduct={handleSelectProduct}
                      onSelectLensModeForProduct={handleSelectLensModeForProduct}
                      onBack={() => setStep("usage")}
                      setSelectedIndex={handleSelectIndex}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroPanel() {
  return (
    <div className="relative w-full h-full px-14 py-12 flex flex-col justify-center overflow-hidden">
      <img
        src="/images/bg-clinic-soft.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.32]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/45 to-white/20" />

      <div className="relative z-10">
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-900 font-bold text-lg border border-blue-200 mb-8">
          누진다초점 맞춤 추천
        </div>

        <h1 className="text-[50px] font-extrabold text-slate-900 leading-tight break-keep">
          도수와 사용환경 기준으로
          <br />
          분석합니다.
        </h1>

        <p className="mt-8 text-[24px] text-slate-600 font-semibold leading-relaxed break-keep">
          내 눈에 적합한 제품을
          <br />
          객관적으로 추천받으세요.
        </p>
      </div>
    </div>
  );
}

function ProductPreviewPanel({
  productName,
  product,
  selectedVariant,
  setSelectedVariant,
  selectedIndex,
  selectedLensMode,
  selectedCoatingMode,
  setSelectedCoatingMode,
  setSelectedLensMode,
  isMain,
}) {
  const variantNames = Object.keys(product?.variants || {});
  const variantInfo =
    product?.variants?.[selectedVariant] || product?.variants?.[variantNames[0]];

  const canPremiumCoating = canUsePremiumCoating(variantInfo, selectedIndex);
  const premiumAllowedNow = selectedLensMode === "clear" && canPremiumCoating;

  const priceInfo = getPriceBreakdown(
    variantInfo,
    selectedIndex,
    selectedLensMode,
    selectedCoatingMode
  );

  const regular = priceInfo?.regular || 0;
  const sale = priceInfo?.sale || 0;

  const handleOpenUrl = () => {
    if (variantInfo?.url) {
      window.open(variantInfo.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleVariantChange = (name) => {
    const nextVariantInfo = product?.variants?.[name];
    if (!nextVariantInfo) return;

    let nextLensMode = selectedLensMode;

    if (
      selectedLensMode === "tint" &&
      !canUseTint(nextVariantInfo, selectedIndex)
    ) {
      nextLensMode = "clear";
    }

    if (
      selectedLensMode === "photo" &&
      !canUsePhoto(nextVariantInfo, selectedIndex)
    ) {
      nextLensMode = "clear";
    }

    const nextCoatingMode = getPreferredCoatingMode(
      nextVariantInfo,
      selectedIndex,
      nextLensMode
    );

    setSelectedVariant(name);
    setSelectedLensMode(nextLensMode);
    setSelectedCoatingMode(nextCoatingMode);
  };

  return (
    <div className="relative w-full h-full px-12 py-10 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-y-auto">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-sky-100 blur-3xl" />
      </div>

      <div className="relative z-10 min-h-full flex flex-col">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-4 py-1 rounded-full bg-white border border-slate-300 text-slate-700 text-sm font-bold shadow-sm">
                제품 상세 보기
              </span>

              {isMain && (
                <span className="px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-bold shadow-sm">
                  메인 추천
                </span>
              )}
            </div>

            <div className="text-[18px] font-bold text-blue-700 mb-2 break-keep">
              {product?.grade}
            </div>

            <div className="flex items-center justify-between gap-3 mb-3 min-w-0">
              <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
                <h2 className="text-[40px] leading-none font-extrabold text-slate-900 break-keep shrink-0">
                  {productName}
                </h2>

                {variantNames.length > 1 && (
                  <div className="flex gap-2 shrink-0">
                    {variantNames.map((name) => {
                      const active = selectedVariant === name;
                      return (
                        <button
                          key={name}
                          onClick={() => handleVariantChange(name)}
                          className={`h-[40px] px-3 rounded-xl border-2 text-[14px] font-bold transition ${
                            active
                              ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                              : "bg-white border-slate-300 text-slate-800 hover:border-blue-300 hover:bg-blue-50"
                          }`}
                        >
                          {name}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => setSelectedCoatingMode("basic")}
                  className={`h-[38px] px-3 rounded-xl border font-bold text-[13px] transition whitespace-nowrap ${
                    selectedCoatingMode === "basic"
                      ? "bg-slate-800 text-white border-slate-800"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  기본코팅
                </button>

                <button
                  onClick={() => {
                    if (!premiumAllowedNow) return;
                    setSelectedLensMode("clear");
                    setSelectedCoatingMode("premium");
                  }}
                  disabled={!premiumAllowedNow}
                  className={`h-[38px] px-3 rounded-xl border font-bold text-[13px] transition whitespace-nowrap ${
                    !premiumAllowedNow
                      ? "bg-slate-200 text-slate-400 border-slate-200"
                      : selectedCoatingMode === "premium"
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                  }`}
                >
                  {!premiumAllowedNow
                    ? selectedLensMode !== "clear"
                      ? "옵션중복불가"
                      : "생산불가"
                    : "프리미엄코팅"}
                </button>
              </div>
            </div>

            <div className="text-[22px] font-semibold text-slate-600 break-keep leading-snug">
              {product?.desc}
            </div>
          </div>

          <div className="shrink-0 px-4 py-3 rounded-[22px] bg-amber-100 text-amber-900 border border-amber-200 font-bold text-base shadow-sm">
            {product?.badge}
          </div>
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-6 items-start">
          <div className="flex flex-col gap-5 min-h-0">
            <button
              type="button"
              onClick={handleOpenUrl}
              className={`rounded-[28px] bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-6 text-left transition ${
                variantInfo?.url
                  ? "hover:shadow-md hover:border-blue-300 cursor-pointer"
                  : "cursor-default"
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="text-[17px] font-bold text-slate-700">
                  제품 포인트
                </div>

                {variantInfo?.url && (
                  <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[13px] font-bold border border-blue-200">
                    홈페이지 보기
                  </div>
                )}
              </div>

              <p className="text-[21px] leading-relaxed font-semibold text-slate-700 mb-5 break-keep">
                {variantInfo?.summary}
              </p>

              <div className="flex flex-wrap gap-3">
                {variantInfo?.points?.map((point) => (
                  <span
                    key={point}
                    className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[16px] font-bold break-keep"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </button>

            <div className="rounded-[28px] bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-6 flex-1">
              <div className="text-[17px] font-bold text-slate-700 mb-4">
                이런 고객님께 잘 맞습니다
              </div>

              <div className="grid grid-cols-1 gap-3">
                {variantInfo?.goodFor?.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-600 shrink-0" />
                    <div className="text-[19px] font-bold text-slate-800 break-keep leading-snug">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="self-start flex flex-col gap-5">
            <div className="w-full rounded-[30px] border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-200 bg-slate-50">
                <div className="text-[17px] font-bold text-slate-700">
                  제품 이미지 / 시야 예시
                </div>
              </div>

              <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden flex items-center justify-center">
                {variantInfo?.image ? (
                  <img
                    src={variantInfo.image}
                    alt={`${productName} ${selectedVariant}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full rounded-[24px] border-2 border-dashed border-slate-300 flex items-center justify-center text-center px-8">
                    <div>
                      <div className="text-[24px] font-extrabold text-slate-700 mb-2 break-keep">
                        {productName}
                      </div>
                      <div className="text-[16px] font-semibold text-slate-500 leading-relaxed break-keep">
                        여기에 제품 이미지, 브랜드 카드,
                        <br />
                        시야 예시 이미지를 넣으면 좋습니다
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-[28px] bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-6">
              <div className="text-[17px] font-bold text-slate-700 mb-4">
                가격 안내
              </div>

              <div className="flex items-center justify-between rounded-2xl border px-5 py-5 bg-blue-50 border-blue-300 mb-4">
                <div>
                  <div className="text-[15px] font-bold text-blue-700 mb-1">
                    현재 선택 굴절률
                  </div>
                  <div className="text-[22px] font-extrabold text-slate-900">
                    {selectedIndex}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[14px] text-slate-400 line-through mb-1">
                    정상가 {priceInfo ? `${regular.toLocaleString()}원` : "생산불가"}
                  </div>
                  <div className="text-[28px] font-extrabold text-blue-900">
                    {priceInfo ? `${sale.toLocaleString()}원` : "생산불가"}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {REFRACTIVE_OPTIONS.map((idx) => {
                  const regularText = variantInfo?.regularPrices?.[idx];
                  const saleText = variantInfo?.salePrices?.[idx];

                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border px-3 py-3 text-center ${
                        idx === selectedIndex
                          ? "bg-blue-50 border-blue-300"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div
                        className={`text-[16px] font-extrabold ${
                          idx === selectedIndex ? "text-blue-900" : "text-slate-800"
                        }`}
                      >
                        {idx}
                      </div>

                      {regularText && saleText ? (
                        <div className="mt-1">
                          <div className="text-[11px] text-slate-400 line-through">
                            {regularText}
                          </div>
                          <div className="text-[13px] font-bold text-slate-600">
                            {saleText}
                          </div>
                        </div>
                      ) : (
                        <div className="mt-1 text-[13px] font-bold text-slate-400">
                          불가
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultStep({
  recommended,
  selectedProduct,
  selectedVariant,
  selectedIndex,
  selectedLensMode,
  onSelectProduct,
  onSelectLensModeForProduct,
  onBack,
  setSelectedIndex,
}) {
  return (
    <div className="w-full transition-all duration-300 ease-out animate-fade">
      <div className="text-center mb-4">
        <div className="text-[22px] font-extrabold text-slate-900 mb-2 break-keep leading-snug">
          상세내용은 전문안경사와 상담하세요.
        </div>
        <div className="text-[15px] font-semibold text-slate-500 break-keep">
          추천 굴절률 확인은 전문안경사와 상담하세요.
        </div>
      </div>

      <div className="mb-5">
        <div className="grid grid-cols-4 gap-2">
          {REFRACTIVE_OPTIONS.map((idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`h-[48px] rounded-xl border font-bold text-[15px] transition ${
                selectedIndex === idx
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-blue-50"
              }`}
            >
              {idx}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {recommended.map((item, i) => {
          const productName = item.name;
          const preferredVariant = item.variant || null;

          const info = PRODUCT_INFO[productName] || { desc: "추천 제품" };
          const isMain = i === 0;
          const isSelected = selectedProduct === productName;

          const variantNames = Object.keys(info?.variants || {});
          const itemVariant = isSelected
            ? selectedVariant
            : preferredVariant && info?.variants?.[preferredVariant]
            ? preferredVariant
            : info?.variants?.KAN
            ? "KAN"
            : variantNames[0] || "기본";

          const variantInfo = info?.variants?.[itemVariant];

          const canTint = Boolean(
            variantInfo?.tintRegularPrices?.[selectedIndex] &&
              variantInfo?.tintSalePrices?.[selectedIndex]
          );

          const canPhoto = Boolean(
            variantInfo?.photoRegularPrices?.[selectedIndex] &&
              variantInfo?.photoSalePrices?.[selectedIndex]
          );

          return (
            <div
              key={i}
              className={`w-full rounded-[22px] border-2 px-4 py-4 transition ${
                isSelected
                  ? "bg-blue-50 border-blue-500 shadow-md"
                  : isMain
                  ? "bg-white border-blue-300 shadow-sm"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-3/5 min-w-0">
                  <button
                    onClick={() => onSelectProduct(productName, preferredVariant)}
                    className={`w-full text-left rounded-[18px] border px-4 py-3 transition ${
                      isSelected && selectedLensMode === "clear"
                        ? "bg-blue-700 text-white border-blue-700"
                        : "bg-white border-slate-300 hover:bg-blue-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className={`text-[20px] leading-tight font-extrabold break-keep ${
                          isSelected && selectedLensMode === "clear"
                            ? "text-white"
                            : "text-slate-900"
                        }`}
                      >
                        {productName}
                      </div>

                      <div
                        className={`shrink-0 inline-flex px-3 py-1 rounded-full text-[12px] font-bold border ${
                          isMain
                            ? "bg-blue-100 text-blue-800 border-blue-300"
                            : "bg-slate-100 text-slate-700 border-slate-300"
                        }`}
                      >
                        {isMain ? "완벽 추천" : "상대 추천"}
                      </div>
                    </div>

                    <div
                      className={`mt-2 text-[14px] leading-snug font-semibold break-keep ${
                        isSelected && selectedLensMode === "clear"
                          ? "text-blue-100"
                          : "text-slate-500"
                      }`}
                    >
                      {info.desc}
                    </div>
                  </button>
                </div>

                <div className="w-2/5 flex gap-2">
                  <button
                    onClick={() => {
                      if (!canTint) return;
                      onSelectLensModeForProduct(
                        productName,
                        "tint",
                        preferredVariant
                      );
                    }}
                    disabled={!canTint}
                    className={`flex-1 h-[78px] rounded-[18px] border font-bold text-[14px] transition ${
                      !canTint
                        ? "bg-slate-200 border-slate-200 text-slate-400"
                        : isSelected && selectedLensMode === "tint"
                        ? "bg-yellow-300 border-yellow-400 text-slate-900"
                        : "bg-yellow-100 border-yellow-300 text-slate-800 hover:bg-yellow-200"
                    }`}
                  >
                    {!canTint ? "생산불가" : "착색"}
                  </button>

                  <button
                    onClick={() => {
                      if (!canPhoto) return;
                      onSelectLensModeForProduct(
                        productName,
                        "photo",
                        preferredVariant
                      );
                    }}
                    disabled={!canPhoto}
                    className={`flex-1 h-[78px] rounded-[18px] border font-bold text-[14px] transition ${
                      !canPhoto
                        ? "bg-slate-200 border-slate-200 text-slate-400"
                        : isSelected && selectedLensMode === "photo"
                        ? "bg-purple-400 border-purple-500 text-white"
                        : "bg-purple-100 border-purple-300 text-slate-800 hover:bg-purple-200"
                    }`}
                  >
                    {!canPhoto ? "생산불가" : "변색"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onBack}
        className="mt-5 w-full h-[60px] rounded-2xl bg-white border-2 border-slate-300 text-slate-700 text-[18px] font-bold hover:bg-slate-50 transition"
      >
        이전 단계로
      </button>
    </div>
  );
}

const Chip = ({ text }) => (
  <div className="px-4 py-1 rounded-full bg-white border border-slate-300 text-slate-700 font-semibold text-sm shadow-sm break-keep">
    {text}
  </div>
);

const Center = ({ children }) => (
  <div className="w-full flex flex-col gap-4">{children}</div>
);

const Title = ({ children }) => (
  <div className="text-[24px] font-bold text-slate-800 mb-2 text-center break-keep">
    {children}
  </div>
);

const Grid2 = ({ children }) => (
  <div className="grid grid-cols-2 gap-4">{children}</div>
);

const SelectBtn = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`h-[92px] rounded-2xl border-2 font-bold text-[22px] transition break-keep ${
      active
        ? "bg-blue-100 border-blue-600 text-blue-900"
        : "bg-white border-slate-300 text-slate-800 hover:bg-blue-50"
    }`}
  >
    {children}
  </button>
);

const AddBtn = ({ color, active, onClick, label, sub }) => {
  const map = {
    green: "bg-green-500 border-green-500",
    yellow: "bg-yellow-400 border-yellow-400",
    red: "bg-red-500 border-red-500",
  };

  return (
    <button
      onClick={onClick}
      className={`h-[92px] rounded-2xl border-2 px-6 flex items-center gap-5 transition ${
        active
          ? "bg-white border-slate-500 scale-[1.01]"
          : "bg-white border-slate-300"
      }`}
    >
      <div className={`w-7 h-7 rounded-full ${map[color]} shrink-0`} />
      <div className="text-left min-w-0">
        <div className="text-[23px] font-bold text-slate-800 break-keep">
          {label}
        </div>
        <div className="text-[16px] text-slate-500">{sub}</div>
      </div>
    </button>
  );
};

const UsageBtn = ({ children, sub, onClick, variant = "default" }) => {
  const styles = {
    best: "bg-gradient-to-r from-amber-300 to-orange-400 border-orange-400 text-slate-900 hover:from-amber-400 hover:to-orange-500 shadow-lg",
    balanced: "bg-blue-100 border-blue-300 text-blue-900 hover:bg-blue-200",
    value: "bg-emerald-100 border-emerald-300 text-emerald-900 hover:bg-emerald-200",
    default: "bg-white border-slate-300 text-slate-800 hover:bg-blue-50",
  };

  return (
    <button
      onClick={onClick}
      className={`w-full h-[96px] rounded-2xl border-2 px-6 text-left transition break-keep ${styles[variant]}`}
    >
      <div className="text-[23px] font-extrabold leading-tight">
        {children}
      </div>

      {sub && (
        <div className="text-[14px] font-semibold opacity-80 mt-1">
          {sub}
        </div>
      )}
    </button>
  );
};

const NextBtn = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`mt-2 h-[74px] rounded-2xl text-[23px] font-bold transition ${
      active
        ? "bg-blue-700 text-white hover:bg-blue-800"
        : "bg-slate-300 text-slate-500 cursor-not-allowed"
    }`}
  >
    다음
  </button>
);

const BackBtn = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="mt-2 h-[74px] rounded-2xl bg-white border-2 border-slate-300 text-[23px] font-bold text-slate-700 hover:bg-slate-50 transition"
  >
    {children}
  </button>
);

const MainButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="h-[118px] rounded-[30px] bg-blue-700 text-white text-[29px] font-extrabold hover:bg-blue-800 transition break-keep"
  >
    {children}
  </button>
);
