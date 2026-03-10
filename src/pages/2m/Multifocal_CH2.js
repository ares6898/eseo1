import React, { useMemo, useState } from "react";

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
        price: "23만원",
        variantLabel: "기본",
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
        image: "/images/multifocal-e3.jpg",
        url: "https://example.com/e3",
        price: "28만원",
        variantLabel: "기본",
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
        price: "40만원",
        variantLabel: "기본",
      },
      KAN: {
        summary:
          "한국인 사용환경을 고려한 KAN 버전으로, 더 편한 적응감과 사용 만족도를 기대할 수 있는 상위 선택입니다.",
        goodFor: ["적응성 중시 고객", "장시간 업무 고객", "더 편한 쪽을 원하는 고객"],
        points: ["KAN 설계", "적응감 향상", "상위 업그레이드"],
        image: "/images/multifocal-comfort-kan.jpg",
        url: "https://example.com/comfort-kan",
        price: "45만원",
        variantLabel: "KAN",
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
        price: "50만원",
        variantLabel: "기본",
      },
      KAN: {
        summary:
          "피지오의 장점에 KAN 설계를 더한 버전으로, 더 높은 적응성과 만족도를 기대하는 고객에게 적합합니다.",
        goodFor: ["최대한 편한 쪽 선호", "적응 스트레스 줄이고 싶은 고객", "상위 업셀 대상 고객"],
        points: ["KAN 설계", "높은 적응성", "최상위 전 업셀 구간"],
        image: "/images/multifocal-physio-kan.jpg",
        url: "https://example.com/physio-kan",
        price: "55만원",
        variantLabel: "KAN",
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
        price: "70만원",
        variantLabel: "기본",
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

export default function Ina2Flow() {
  const [step, setStep] = useState("intro");

  const [refractiveType, setRefractiveType] = useState(null);
  const [astigmatismType, setAstigmatismType] = useState(null);
  const [addLevel, setAddLevel] = useState(null);
  const [usage, setUsage] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState("기본");

  const canNextDistance = refractiveType && astigmatismType;
  const mainRecommended = useMemo(() => recommended?.[0] || null, [recommended]);
  const leftProduct = selectedProduct || mainRecommended;

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName);
    setSelectedVariant(getDefaultVariant(productName));
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
    setStep("analyzing");

    setTimeout(() => {
      setStep("result");
    }, 1050);
  };

  return (
    <div className="w-screen h-screen bg-slate-50 overflow-hidden">
      <div className="w-full h-full px-6 py-5">
        <div className="w-full h-full bg-white rounded-[32px] shadow-2xl border border-slate-200 flex overflow-hidden">
          {/* ================= LEFT ================= */}
          <div className="relative w-[64%] h-full overflow-hidden border-r border-slate-200">
            {step === "result" && leftProduct ? (
              <ProductPreviewPanel
                productName={leftProduct}
                product={PRODUCT_INFO[leftProduct]}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
                isMain={leftProduct === mainRecommended}
              />
            ) : (
              <IntroPanel />
            )}
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative w-[36%] h-full bg-gradient-to-b from-slate-50 to-slate-100 px-8 py-6 overflow-y-auto">
            <button
              onClick={resetToHome}
              className="absolute top-5 right-5 z-30 h-[52px] px-5 rounded-2xl bg-white border border-slate-300 text-slate-700 text-[17px] font-bold shadow-sm hover:bg-slate-50 transition"
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

                      <div className="text-[26px] font-extrabold text-slate-900 mb-3 break-keep leading-snug">
                        고객님 눈 기준으로 확인 중입니다
                      </div>

                      <div className="text-[17px] text-slate-500 font-semibold leading-relaxed mb-8 break-keep">
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
                    onSelectProduct={handleSelectProduct}
                    onBack={() => setStep("usage")}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- LEFT PANELS ---------------- */

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
  isMain,
}) {
  const variantNames = Object.keys(product?.variants || {});
  const variantInfo = product?.variants?.[selectedVariant] || product?.variants?.[variantNames[0]];

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
          <div className="min-w-0">
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

            <h2 className="text-[46px] leading-none font-extrabold text-slate-900 break-keep">
              {productName}
            </h2>

            <div className="mt-4 text-[22px] font-semibold text-slate-600 break-keep leading-snug">
              {product?.desc}
            </div>
          </div>

          <div className="shrink-0 px-4 py-3 rounded-[22px] bg-amber-100 text-amber-900 border border-amber-200 font-bold text-base shadow-sm">
            {product?.badge}
          </div>
        </div>

        {variantNames.length > 1 && (
          <div className="mb-6">
            <div className="text-[16px] font-bold text-slate-700 mb-3">
              버전 선택
            </div>

            <div className="flex gap-3">
              {variantNames.map((name) => {
                const active = selectedVariant === name;
                const price = product?.variants?.[name]?.price;

                return (
                  <button
                    key={name}
                    onClick={() => setSelectedVariant(name)}
                    className={`min-w-[150px] rounded-[22px] border-2 px-5 py-4 text-left transition ${
                      active
                        ? "bg-blue-600 border-blue-600 text-white shadow-md"
                        : "bg-white border-slate-300 text-slate-800 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    <div className="text-[22px] font-extrabold break-keep">
                      {name}
                    </div>
                    <div
                      className={`mt-1 text-[15px] font-bold ${
                        active ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      {price}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-6 flex-1 min-h-0">
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

            <div className="rounded-[28px] bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-6">
              <div className="text-[17px] font-bold text-slate-700 mb-4">
                가격 안내
              </div>

              <div className="flex flex-col gap-3">
                {variantNames.map((name) => {
                  const active = selectedVariant === name;
                  const price = product?.variants?.[name]?.price;

                  return (
                    <div
                      key={name}
                      className={`flex items-center justify-between rounded-2xl border px-5 py-4 ${
                        active
                          ? "bg-blue-50 border-blue-300"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            active ? "bg-blue-600" : "bg-slate-300"
                          }`}
                        />
                        <div
                          className={`text-[20px] font-extrabold break-keep ${
                            active ? "text-blue-900" : "text-slate-800"
                          }`}
                        >
                          {name}
                        </div>
                      </div>

                      <div
                        className={`text-[20px] font-extrabold ${
                          active ? "text-blue-900" : "text-slate-700"
                        }`}
                      >
                        {price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

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

          <div className="min-h-0">
            <div className="w-full h-full rounded-[30px] border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="px-5 py-4 border-b border-slate-200 bg-slate-50">
                <div className="text-[17px] font-bold text-slate-700">
                  제품 이미지 / 시야 예시
                </div>
              </div>

              <div className="flex-1 p-5 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 min-h-[280px]">
                {variantInfo?.image ? (
                  <img
                    src={variantInfo.image}
                    alt={`${productName} ${selectedVariant}`}
                    className="max-w-full max-h-full object-contain"
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

/* ---------------- RESULT STEP ---------------- */

function ResultStep({
  recommended,
  selectedProduct,
  onSelectProduct,
  onBack,
}) {
  return (
    <div className="w-full transition-all duration-300 ease-out animate-fade">
      <div className="text-center mb-5">
        <div className="text-[26px] font-extrabold text-slate-900 mb-2 break-keep leading-snug">
          고객님 기준에서 가장 잘 맞는 선택입니다
        </div>
        <div className="text-[17px] font-semibold text-slate-500 break-keep">
          원하는 제품을 눌러 왼쪽에서 상세 내용을 보세요
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {recommended.map((item, i) => {
          const info = PRODUCT_INFO[item] || { desc: "추천 제품" };
          const isMain = i === 0;
          const isSelected = selectedProduct === item;
          const variantNames = Object.keys(info?.variants || {});
          const priceSummary =
            variantNames.length > 1
              ? `${info?.variants?.기본?.price || ""} / ${info?.variants?.KAN?.price || ""}`
              : info?.variants?.[variantNames[0]]?.price || "";

          return (
            <button
              key={i}
              onClick={() => onSelectProduct(item)}
              className={`w-full text-left rounded-[24px] border-2 px-5 py-4 transition ${
                isSelected
                  ? "bg-blue-50 border-blue-500 shadow-md"
                  : isMain
                  ? "bg-white border-blue-300 shadow-sm hover:border-blue-400 hover:bg-blue-50/40"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div
                  className={`inline-flex w-fit px-3 py-1 rounded-full text-sm font-bold border ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-600"
                      : isMain
                      ? "bg-blue-100 text-blue-800 border-blue-300"
                      : "bg-slate-100 text-slate-700 border-slate-300"
                  }`}
                >
                  {isSelected ? "현재 표시중" : isMain ? "추천" : "함께 비교"}
                </div>

                <div className="text-[24px] leading-tight font-extrabold text-slate-900 break-keep">
                  {item}
                </div>

                <div className="text-[16px] leading-snug font-semibold text-slate-500 break-keep">
                  {info.desc}
                </div>

                {priceSummary && (
                  <div className="mt-1 text-[15px] font-bold text-blue-700 break-keep">
                    {variantNames.length > 1
                      ? `기본 / KAN : ${priceSummary}`
                      : `가격 : ${priceSummary}`}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={onBack}
        className="mt-5 w-full h-[62px] rounded-2xl bg-white border-2 border-slate-300 text-slate-700 text-[19px] font-bold hover:bg-slate-50 transition"
      >
        이전 단계로
      </button>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

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
