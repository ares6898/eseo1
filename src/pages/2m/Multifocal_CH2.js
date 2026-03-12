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
          "누진다초점을 처음 접하거나 사용량이 많지 않은 고객에게 부담 없이 권하기 좋은 제품입니다.",
        goodFor: ["가벼운 근거리 작업", "가격 부담이 큰 고객", "입문형 누진다초점"],
        points: ["실속형", "부담 적은 선택", "기본 기능 중심"],
        image: "/images/multifocal-c6.jpg",
        url: "https://example.com/c6",

        // 기본렌즈 정가 / 할인가
        regularPrices: {
          "1.50": "33만원",
          "1.60": "38만원",
          "1.67": "43만원",
        },
        salePrices: {
          "1.50": "23만원",
          "1.60": "28만원",
          "1.67": "33만원",
        },

        // 착색 정가 / 할인가
        tintRegularPrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
        },
        tintSalePrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },

        // 변색 정가 / 할인가
        photoRegularPrices: {},
        photoSalePrices: {},

        // 프리미엄코팅 정가 / 할인가
        premiumCoatingRegularPrices: {
          "1.50": "7만원",
          "1.60": "7만원",
          "1.67": "7만원",
        },
        premiumCoatingSalePrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
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
        goodFor: ["처음 쓰는 고객", "무난한 적응감 선호", "가성비와 편안함 동시 고려"],
        points: ["적응 무난", "균형 잡힌 선택", "상담 시 추천하기 쉬움"],
        image: "/images/E3.jpg",
        url: "https://example.com/e3",

        regularPrices: {
          "1.50": "48만원",
          "1.60": "62만원",
          "1.67": "76만원",
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

  컴포트맥스: {
    desc: "자세가 더 편한 프리미엄",
    grade: "프리미엄",
    badge: "편안함 추천",
    variants: {
      기본: {
        summary:
          "근거리 활용량이 많고 자세 편안함을 중요하게 보는 고객에게 권하기 좋은 프리미엄 기본 버전입니다.",
        goodFor: ["업무용 비중이 높은 고객", "근거리 사용량이 많은 고객", "프리미엄 첫 업그레이드"],
        points: ["근거리 편안함", "업무 활용도 우수", "프리미엄 입문"],
        image: "/images/multifocal-comfort-basic.jpg",
        url: "https://example.com/comfort-basic",

        regularPrices: {
          "1.50": "50만원",
          "1.60": "55만원",
          "1.67": "60만원",
        },
        salePrices: {
          "1.50": "40만원",
          "1.60": "45만원",
          "1.67": "50만원",
        },

        tintRegularPrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
        },
        tintSalePrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },

        photoRegularPrices: {
          "1.60": "20만원",
          "1.67": "20만원",
        },
        photoSalePrices: {
          "1.60": "15만원",
          "1.67": "15만원",
        },

        premiumCoatingRegularPrices: {
          "1.50": "7만원",
          "1.60": "7만원",
          "1.67": "7만원",
        },
        premiumCoatingSalePrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
        },
      },

      KAN: {
        summary:
          "한국인 사용환경을 고려한 KAN 버전으로, 더 편한 적응감과 사용 만족도를 기대할 수 있는 상위 선택입니다.",
        goodFor: ["적응성 중시 고객", "장시간 업무 고객", "더 편한 쪽을 원하는 고객"],
        points: ["KAN 설계", "적응감 향상", "상위 업그레이드"],
        image: "/images/multifocal-comfort-kan.jpg",
        url: "https://example.com/comfort-kan",

        regularPrices: {
          "1.50": "55만원",
          "1.60": "60만원",
          "1.67": "65만원",
        },
        salePrices: {
          "1.50": "45만원",
          "1.60": "50만원",
          "1.67": "55만원",
        },

        tintRegularPrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
        },
        tintSalePrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },

        photoRegularPrices: {
          "1.60": "20만원",
          "1.67": "20만원",
        },
        photoSalePrices: {
          "1.60": "15만원",
          "1.67": "15만원",
        },

        premiumCoatingRegularPrices: {
          "1.50": "7만원",
          "1.60": "7만원",
          "1.67": "7만원",
        },
        premiumCoatingSalePrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
        },
      },
    },
  },

  피지오: {
    desc: "더 높은 편안함의 상위선택",
    grade: "상위 프리미엄",
    badge: "상위 추천",
    variants: {
      기본: {
        summary:
          "장시간 착용과 높은 편안함을 원하는 고객에게 제안하기 좋은 상위 프리미엄 기본 버전입니다.",
        goodFor: ["장시간 착용 고객", "상위 프리미엄 선호", "편안함 중심 고객"],
        points: ["상위 편안함", "장시간 사용 대응", "프리미엄 설득력"],
        image: "/images/multifocal-physio-basic.jpg",
        url: "https://example.com/physio-basic",

        regularPrices: {
          "1.50": "60만원",
          "1.60": "65만원",
          "1.67": "70만원",
        },
        salePrices: {
          "1.50": "50만원",
          "1.60": "55만원",
          "1.67": "60만원",
        },

        tintRegularPrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
        },
        tintSalePrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },

        photoRegularPrices: {
          "1.60": "20만원",
          "1.67": "20만원",
        },
        photoSalePrices: {
          "1.60": "15만원",
          "1.67": "15만원",
        },

        premiumCoatingRegularPrices: {
          "1.50": "7만원",
          "1.60": "7만원",
          "1.67": "7만원",
        },
        premiumCoatingSalePrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
        },
      },

      KAN: {
        summary:
          "피지오의 장점에 KAN 설계를 더한 버전으로, 더 높은 적응성과 만족도를 기대하는 고객에게 적합합니다.",
        goodFor: ["최대한 편한 쪽 선호", "적응 스트레스 줄이고 싶은 고객", "상위 업셀 대상 고객"],
        points: ["KAN 설계", "높은 적응성", "최상위 전 업셀 구간"],
        image: "/images/multifocal-physio-kan.jpg",
        url: "https://example.com/physio-kan",

        regularPrices: {
          "1.50": "65만원",
          "1.60": "70만원",
          "1.67": "75만원",
        },
        salePrices: {
          "1.50": "55만원",
          "1.60": "60만원",
          "1.67": "65만원",
        },

        tintRegularPrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
        },
        tintSalePrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },

        photoRegularPrices: {
          "1.60": "20만원",
          "1.67": "20만원",
        },
        photoSalePrices: {
          "1.60": "15만원",
          "1.67": "15만원",
        },

        premiumCoatingRegularPrices: {
          "1.50": "7만원",
          "1.60": "7만원",
          "1.67": "7만원",
        },
        premiumCoatingSalePrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
        },
      },
    },
  },

  XR: {
    desc: "최상위 프리미엄",
    grade: "최상위",
    badge: "최상위 추천",
    variants: {
      기본: {
        summary:
          "최대한 좋은 경험과 높은 만족도를 기대하는 고객에게 제안하는 최상위 프리미엄 제품입니다.",
        goodFor: ["최상위 제품 선호", "적응과 시야 모두 중요", "프리미엄 가치 설명이 잘 먹히는 고객"],
        points: ["최상위 라인", "고급 상담용", "브랜드 가치 전달 강함"],
        image: "/images/multifocal-xr.jpg",
        url: "https://example.com/xr",

        regularPrices: {
          "1.50": "80만원",
          "1.60": "85만원",
          "1.67": "90만원",
          "1.74": "100만원",
        },
        salePrices: {
          "1.50": "70만원",
          "1.60": "75만원",
          "1.67": "80만원",
          "1.74": "90만원",
        },

        tintRegularPrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
        },
        tintSalePrices: {
          "1.50": "3만원",
          "1.60": "3만원",
          "1.67": "3만원",
        },

        photoRegularPrices: {
          "1.50": "20만원",
          "1.60": "20만원",
          "1.67": "20만원",
          "1.74": "20만원",
        },
        photoSalePrices: {
          "1.50": "15만원",
          "1.60": "15만원",
          "1.67": "15만원",
          "1.74": "15만원",
        },

        premiumCoatingRegularPrices: {
          "1.50": "7만원",
          "1.60": "7만원",
          "1.67": "7만원",
          "1.74": "7만원",
        },
        premiumCoatingSalePrices: {
          "1.50": "5만원",
          "1.60": "5만원",
          "1.67": "5만원",
          "1.74": "5만원",
        },
      },
    },
  },
};

function getDefaultVariant(productName) {
  const product = PRODUCT_INFO[productName];
  if (!product?.variants) return "기본";
  if (product.variants.KAN) return "KAN";
  return Object.keys(product.variants)[0];
}

function getCurrentVariantInfo(product, selectedVariant) {
  const variantNames = Object.keys(product?.variants || {});
  return (
    product?.variants?.[selectedVariant] || product?.variants?.[variantNames[0]]
  );
}

function parseKoreanPriceToNumber(priceText) {
  if (priceText === null || priceText === undefined) return 0;

  const text = String(priceText).trim();

  if (!text) return 0;

  // "1.5만원", "15만원", "0.7만원" 대응
  if (text.includes("만원")) {
    const value = Number(
      text
        .replace(/만원/g, "")
        .replace(/,/g, "")
        .trim()
    );

    return Number.isNaN(value) ? 0 : Math.round(value * 10000);
  }

  // "15000원", "15,000원" 대응
  if (text.includes("원")) {
    const value = Number(
      text
        .replace(/원/g, "")
        .replace(/,/g, "")
        .trim()
    );

    return Number.isNaN(value) ? 0 : Math.round(value);
  }

  // 단위 없이 숫자만 들어온 경우
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
  const [astigmatismType, setAstigmatismType] = useState(null);
  const [addLevel, setAddLevel] = useState(null);
  const [usage, setUsage] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState("기본");
  const [selectedIndex, setSelectedIndex] = useState("1.50");

  // 옵션 상태
  const [selectedLensMode, setSelectedLensMode] = useState("clear"); // clear | tint | photo
  const [selectedCoatingMode, setSelectedCoatingMode] = useState("basic"); // basic | premium

  const canNextDistance = refractiveType && astigmatismType;
  const mainRecommended = useMemo(() => recommended?.[0] || null, [recommended]);
  const leftProduct = selectedProduct || mainRecommended;

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName);
    setSelectedVariant(getDefaultVariant(productName));
    setSelectedLensMode("clear");
    setSelectedCoatingMode("basic");
  };

  const resetToHome = () => {
    setStep("intro");
    setRefractiveType(null);
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
      if (use === "light") result = ["C6", "E3"];
      else result = ["E3", "컴포트맥스"];
    }

    if (level === "mid") {
      if (use === "heavy") result = ["컴포트맥스", "피지오"];
      else result = ["E3", "컴포트맥스"];
    }

    if (level === "high") {
      if (use === "heavy") result = ["피지오", "XR"];
      else result = ["컴포트맥스", "피지오"];
    }

    const firstProduct = result[0] || null;

    setUsage(use);
    setRecommended(result);
    setSelectedProduct(firstProduct);
    setSelectedVariant(getDefaultVariant(firstProduct));
    setSelectedIndex("1.50");
    setSelectedLensMode("clear");
    setSelectedCoatingMode("basic");
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
  }, [leftProduct, selectedVariant, selectedIndex, selectedLensMode, selectedCoatingMode]);

  return (
    <div className="w-screen h-screen bg-slate-50 overflow-hidden">
      <div className="w-full h-full px-6 py-5">
        <div className="relative w-full h-full bg-white rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden">
          <div
            className={`w-full h-full flex ${step === "result" ? "pb-[92px]" : ""}`}
          >
            <div className="relative w-[64%] h-full overflow-hidden border-r border-slate-200">
              {step === "result" && leftProduct ? (
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
              ) : (
                <IntroPanel />
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
                        맞춤 추천 시작
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
                            onClick={() => setRefractiveType(x)}
                          >
                            {x}
                          </SelectBtn>
                        ))}
                      </Grid2>

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
                      <Title>근거리 사용 정도</Title>

                      <AddBtn
                        color="green"
                        active={addLevel === "low"}
                        onClick={() => setAddLevel("low")}
                        label="낮음"
                        sub="1.50↓"
                      />

                      <AddBtn
                        color="yellow"
                        active={addLevel === "mid"}
                        onClick={() => setAddLevel("mid")}
                        label="중간"
                        sub="1.75↓"
                      />

                      <AddBtn
                        color="red"
                        active={addLevel === "high"}
                        onClick={() => setAddLevel("high")}
                        label="높음"
                        sub="2.00↑"
                      />

                      {addLevel && (
                        <NextBtn active onClick={() => setStep("usage")} />
                      )}
                    </Center>
                  )}

                  {step === "usage" && (
                    <Center>
                      <Title>사용량 확인</Title>

                      <UsageBtn onClick={() => handleFinish(addLevel, "light")}>
                        가볍게 사용
                      </UsageBtn>

                      <UsageBtn onClick={() => handleFinish(addLevel, "normal")}>
                        보통 사용
                      </UsageBtn>

                      <UsageBtn onClick={() => handleFinish(addLevel, "heavy")}>
                        많이 사용
                      </UsageBtn>
                    </Center>
                  )}

                  {step === "analyzing" && (
                    <div className="w-full flex items-center justify-center">
                      <div className="w-full rounded-[28px] bg-white border border-slate-200 shadow-sm px-7 py-9 text-center">
                        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-bold border border-blue-200 mb-5">
                          맞춤 추천 분석
                        </div>

                        <div className="text-[24px] font-extrabold text-slate-900 mb-3 break-keep leading-snug">
                          고객님 눈 기준으로 확인 중입니다
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
                      setSelectedVariant={setSelectedVariant}
                      setSelectedLensMode={setSelectedLensMode}
                      setSelectedCoatingMode={setSelectedCoatingMode}
                      onBack={() => setStep("usage")}
                      setSelectedIndex={setSelectedIndex}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {step === "result" && leftProduct && (
            <div className="absolute bottom-0 left-0 right-0 h-[92px] border-t border-slate-700 bg-slate-900 px-8 flex items-center justify-between">
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
          )}
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
          추천드립니다
        </h1>

        <p className="mt-8 text-[24px] text-slate-600 font-semibold leading-relaxed break-keep">
          가격보다 맞는 방향으로
          <br />
          안내해드립니다
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

  const canPremiumCoating = Boolean(
    variantInfo?.premiumCoatingRegularPrices?.[selectedIndex] &&
      variantInfo?.premiumCoatingSalePrices?.[selectedIndex]
  );

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

            <div className="flex items-center gap-4 flex-wrap mb-3">
              <h2 className="text-[46px] leading-none font-extrabold text-slate-900 break-keep">
                {productName}
              </h2>

              {variantNames.length > 1 && (
                <div className="flex gap-2 flex-wrap">
                  {variantNames.map((name) => {
                    const active = selectedVariant === name;
                    return (
                      <button
                        key={name}
                        onClick={() => {
                          setSelectedVariant(name);
                          setSelectedLensMode("clear");
                          setSelectedCoatingMode("basic");
                        }}
                        className={`h-[44px] px-4 rounded-2xl border-2 text-[15px] font-bold transition ${
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
            <div className="rounded-[28px] bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="text-[17px] font-bold text-slate-700">
                  가격 안내
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCoatingMode("basic")}
                    className={`h-[40px] px-4 rounded-2xl border font-bold text-[14px] transition ${
                      selectedCoatingMode === "basic"
                        ? "bg-slate-800 text-white border-slate-800"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    기본코팅
                  </button>

                  <button
                    onClick={() => {
                      if (!canPremiumCoating) return;
                      setSelectedCoatingMode("premium");
                      setSelectedLensMode("clear");
                    }}
                    disabled={!canPremiumCoating}
                    className={`h-[40px] px-4 rounded-2xl border font-bold text-[14px] transition ${
                      !canPremiumCoating
                        ? "bg-slate-200 text-slate-400 border-slate-200"
                        : selectedCoatingMode === "premium"
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                    }`}
                  >
                    {!canPremiumCoating ? "생산불가" : "프리미엄코팅"}
                  </button>
                </div>
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

<div className="self-start">
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
  setSelectedVariant,
  setSelectedLensMode,
  setSelectedCoatingMode,
  onBack,
  setSelectedIndex,
}) {
  return (
    <div className="w-full transition-all duration-300 ease-out animate-fade">
      <div className="text-center mb-4">
        <div className="text-[22px] font-extrabold text-slate-900 mb-2 break-keep leading-snug">
          고객님 기준에서 잘 맞는 제품입니다
        </div>
        <div className="text-[15px] font-semibold text-slate-500 break-keep">
          굴절률을 선택한 뒤 원하는 제품을 눌러 상세 내용을 보세요
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
          const info = PRODUCT_INFO[item] || { desc: "추천 제품" };
          const isMain = i === 0;
          const isSelected = selectedProduct === item;

          const variantNames = Object.keys(info?.variants || {});
          const itemVariant = isSelected
            ? selectedVariant
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
                    onClick={() => {
                      onSelectProduct(item);
                      if (info?.variants?.KAN) setSelectedVariant("KAN");
                      setSelectedLensMode("clear");
                      setSelectedCoatingMode("basic");
                    }}
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
                        {item}
                      </div>

                      <div
                        className={`shrink-0 inline-flex px-3 py-1 rounded-full text-[12px] font-bold border ${
                          isSelected
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : isMain
                            ? "bg-blue-100 text-blue-800 border-blue-300"
                            : "bg-slate-100 text-slate-700 border-slate-300"
                        }`}
                      >
                        {isSelected ? "현재 표시중" : isMain ? "추천" : "비교"}
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
                      onSelectProduct(item);
                      if (info?.variants?.KAN) setSelectedVariant("KAN");
                      setSelectedCoatingMode("basic");
                      if (canTint) setSelectedLensMode("tint");
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
                      onSelectProduct(item);
                      if (info?.variants?.KAN) setSelectedVariant("KAN");
                      setSelectedCoatingMode("basic");
                      if (canPhoto) setSelectedLensMode("photo");
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

const UsageBtn = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="h-[92px] rounded-2xl border-2 bg-white border-slate-300 text-[23px] font-bold text-slate-800 hover:bg-blue-50 transition break-keep"
  >
    {children}
  </button>
);

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

const MainButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="h-[118px] rounded-[30px] bg-blue-700 text-white text-[29px] font-extrabold hover:bg-blue-800 transition break-keep"
  >
    {children}
  </button>
);
