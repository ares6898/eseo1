import React, { useMemo, useState } from "react";
import { PRODUCT_INFO } from "../data/productInfo";
import { RECOMMENDATION_RULES } from "../data/recommendationRules";
import {
  getCurrentVariantInfo,
  getSphereOptions,
  getRecommendedIndexBySphere,
  canUsePremiumCoating,
  canUseTint,
  canUsePhoto,
  getPreferredVariant,
  getPreferredCoatingMode,
  getPreferredSelection,
  getPriceBreakdown,
} from "../utils/lensHelpers";

const REFRACTIVE_OPTIONS = ["1.50", "1.60", "1.67", "1.74"];

/* =========================================================
   [유지보수 포인트 1]
   카테고리 보기에서 보여줄 제조사 / 브랜드 / 그룹 목록
   - 순서를 바꾸면 화면 순서도 그대로 바뀜
   - 제품 추가 / 제거도 여기서 관리하면 됨
   ========================================================= */
const CATEGORY_GROUPS = {
  바리락스: [
    { name: "XR", variant: "기본" },
    { name: "피지오", variant: "Kan" },
    { name: "컴포트맥스", variant: "KAN" },
  ],
  
  니콘: [
    { name: "씨맥스Z", variant: "기본" },
	{ name: "파워Z", variant: "기본" },
    { name: "와이드Z", variant: "기본" },
    { name: "로하스", variant: "기본" },
	{ name: "어드밴스Z", variant: "기본" },
  ],
  
  밸런스형: [
    { name: "E4", variant: "기본" },
    { name: "E3", variant: "기본" },
    { name: "E에센셜", variant: "E2" },
  ],
  실속형: [
    { name: "E에센셜", variant: "E1" },
    { name: "C시리즈", variant: "C6" },
    { name: "C시리즈", variant: "C4" },
    { name: "C시리즈", variant: "C1" },
  ],
};

/* =========================================================
   [유지보수 포인트 2]
   맞춤분석 시작 후 선택할 추천 DB 목록
   - 첫 테스트용으로 "전체 추천", "실속 추천" 두 가지만 구성
   - key 는 추천규칙 DB(RECOMMENDATION_RULES)와 반드시 일치해야 함
   ========================================================= */
const DATABASE_OPTIONS = [
  {
    key: "all",
    title: "하드디자인DB",
    desc: "myopia, 근용중심, 하드디자인 경험자",
    color:
      "bg-blue-100 border-blue-300 text-blue-900 hover:bg-blue-200 hover:border-blue-400",
  },
  {
    key: "value",
    title: "소프트디자인DB",
    desc: "hyperopia, 소프트디자인 경험자",
    color:
      "bg-emerald-100 border-emerald-300 text-emerald-900 hover:bg-emerald-200 hover:border-emerald-400",
  },
];







function getDatabaseLabel(dbKey) {
  const found = DATABASE_OPTIONS.find((item) => item.key === dbKey);
  return found?.title || "전체 추천";
}

export default function Ina2Flow() {
  const [step, setStep] = useState("intro");

  const [selectedDatabase, setSelectedDatabase] = useState("all");
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

  /* =========================================================
     [유지보수 포인트 4]
     카테고리 보기 전용 상태값
     ========================================================= */
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryMode, setIsCategoryMode] = useState(false);

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
    setSelectedDatabase("all");
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
    setSelectedCategory(null);
    setIsCategoryMode(false);
  };

  const handleSelectDatabase = (dbKey) => {
    setSelectedDatabase(dbKey);
    setStep("distance");
  };

  const handleSelectCategory = (categoryName) => {
    const items = CATEGORY_GROUPS[categoryName] || [];
    const firstItem = items[0] || null;
    const firstProduct = firstItem?.name || null;
    const firstVariant = firstItem?.variant || null;
    const defaultIndex = "1.50";

    const next = firstProduct
      ? getPreferredSelection(firstProduct, defaultIndex, firstVariant, "clear")
      : { variant: "기본", coatingMode: "basic" };

    setSelectedCategory(categoryName);
    setIsCategoryMode(true);
    setUsage(null);
    setRecommended(items);
    setSelectedProduct(firstProduct);
    setSelectedVariant(next.variant);
    setSelectedIndex(defaultIndex);
    setSelectedLensMode("clear");
    setSelectedCoatingMode(next.coatingMode);
    setStep("categoryResult");
  };

  /* =========================================================
     [유지보수 포인트 5]
     추천 결과 조회 함수
     - 선택된 추천 DB(selectedDatabase) 기준으로 결과를 꺼냄
     - all  : 현재와 동일 추천
     - value: 테스트용 실속 추천
     ========================================================= */
  const handleFinish = (level, use) => {
    setIsCategoryMode(false);
    setSelectedCategory(null);

    const result =
      RECOMMENDATION_RULES?.[selectedDatabase]?.[level]?.[use] || [];

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
      selectedCoatingMode === "premium" ? "프리미엄" : "기본코팅";

    return `${leftProduct} / ${selectedVariant} / ${selectedIndex} / ${lensModeLabel} / ${coatingLabel}`;
  }, [
    leftProduct,
    selectedVariant,
    selectedIndex,
    selectedLensMode,
    selectedCoatingMode,
  ]);

  return (
    <div className="w-screen h-[100dvh] bg-slate-50 overflow-hidden">
      <div className="w-full h-full px-6 py-5">
        <div className="relative w-full h-full bg-white rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden">
          <div className="w-full h-full flex">
            <div className="relative w-[64%] h-full border-r border-slate-200">
              {(step === "result" || step === "categoryResult") && leftProduct ? (
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
                      panelMode={isCategoryMode ? "category" : "recommend"}
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
                {step !== "intro" &&
                  step !== "brandCategory" &&
                  step !== "categoryResult" && (
                    <Chip text={`DB ${getDatabaseLabel(selectedDatabase)}`} />
                  )}
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
                        ? "가격중심"
                        : usage === "normal"
                        ? "균형분석"
                        : "정밀분석"
                    }
                  />
                )}
                {selectedCategory && <Chip text={`카테고리 ${selectedCategory}`} />}
              </div>

              <div
                key={step}
                className="w-full min-h-full flex items-center justify-center pt-16 pb-4 animate-fade"
              >
                <div className="w-full">
                  {step === "intro" && (
                    <Center>
                      <MainButton onClick={() => setStep("database")}>
                        맞춤 분석 시작
                      </MainButton>

                      <button
                        onClick={() => setStep("brandCategory")}
                        className="h-[92px] rounded-[26px] bg-white border-2 border-slate-300 text-slate-800 text-[25px] font-extrabold hover:bg-slate-50 transition break-keep"
                      >
                        카테고리 보기
                      </button>
                    </Center>
                  )}

                  {step === "database" && (
                    <Center>
                      <Title>추천 DB 선택</Title>

                      {DATABASE_OPTIONS.map((db) => (
                        <button
                          key={db.key}
                          onClick={() => handleSelectDatabase(db.key)}
                          className={`w-full rounded-[26px] border-2 px-6 py-5 text-left transition ${db.color}`}
                        >
                          <div className="text-[25px] font-extrabold break-keep">
                            {db.title}
                          </div>
                          <div className="mt-2 text-[15px] font-semibold opacity-80 break-keep">
                            {db.desc}
                          </div>
                        </button>
                      ))}

                      <BackBtn onClick={() => setStep("intro")}>처음으로</BackBtn>
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

                      <div className="grid grid-cols-2 gap-4">
                        <BackBtn onClick={() => setStep("database")}>
                          추천 DB 다시선택
                        </BackBtn>

                        <NextBtn
                          active={canNextDistance}
                          onClick={() => canNextDistance && setStep("add")}
                        />
                      </div>
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
                        <div className="grid grid-cols-2 gap-4">
                          <BackBtn onClick={() => setStep("distance")}>
                            이전 단계로
                          </BackBtn>
                          <NextBtn active onClick={() => setStep("usage")} />
                        </div>
                      )}
                    </Center>
                  )}

                  {step === "usage" && (
                    <Center>
                      <Title>사용량 확인</Title>

                      <div className="relative">
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

                      <UsageBtn
                        variant="balanced"
                        sub="적응과 가격을 함께 고려"
                        onClick={() => handleFinish(addLevel, "normal")}
                      >
                        균형 추천
                      </UsageBtn>

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

                  {step === "brandCategory" && (
                    <Center>
                      <Title>제조사 / 카테고리 선택</Title>

                      {Object.keys(CATEGORY_GROUPS).map((category) => (
                        <button
                          key={category}
                          onClick={() => handleSelectCategory(category)}
                          className="w-full h-[92px] rounded-2xl border-2 border-slate-300 bg-white text-slate-800 text-[24px] font-extrabold hover:bg-blue-50 hover:border-blue-300 transition"
                        >
                          {category}
                        </button>
                      ))}

                      <BackBtn onClick={() => setStep("intro")}>
                        처음으로
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
                          선택한 추천 DB와 도수, 사용환경을 반영하고 있습니다
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
                      mode="recommend"
                      categoryTitle=""
                      databaseLabel={getDatabaseLabel(selectedDatabase)}
                    />
                  )}

                  {step === "categoryResult" && (
                    <ResultStep
                      recommended={recommended}
                      selectedProduct={selectedProduct}
                      selectedVariant={selectedVariant}
                      selectedIndex={selectedIndex}
                      selectedLensMode={selectedLensMode}
                      onSelectProduct={handleSelectProduct}
                      onSelectLensModeForProduct={handleSelectLensModeForProduct}
                      onBack={() => setStep("brandCategory")}
                      setSelectedIndex={handleSelectIndex}
                      mode="category"
                      categoryTitle={selectedCategory}
                      databaseLabel=""
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
  panelMode = "recommend",
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

              {panelMode === "recommend" && isMain && (
                <span className="px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-bold shadow-sm">
                  메인 추천
                </span>
              )}

              {panelMode === "category" && (
                <span className="px-4 py-1 rounded-full bg-slate-700 text-white text-sm font-bold shadow-sm">
                  선택 제품
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
  mode = "recommend",
  categoryTitle = "",
  databaseLabel = "",
}) {
  return (
    <div className="w-full transition-all duration-300 ease-out animate-fade">
      <div className="text-center mb-4">
        <div className="text-[22px] font-extrabold text-slate-900 mb-2 break-keep leading-snug">
          {mode === "category"
            ? `${categoryTitle} 제품 목록`
            : `${databaseLabel} 기준 추천 결과`}
        </div>
        <div className="text-[15px] font-semibold text-slate-500 break-keep">
          {mode === "category"
            ? "제조사별 제품을 순서대로 확인할 수 있습니다."
            : "추천 굴절률 확인은 전문안경사와 상담하세요."}
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
              key={`${productName}-${preferredVariant || "default"}-${i}`}
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
                          mode === "category"
                            ? "bg-slate-100 text-slate-700 border-slate-300"
                            : isMain
                            ? "bg-blue-100 text-blue-800 border-blue-300"
                            : "bg-slate-100 text-slate-700 border-slate-300"
                        }`}
                      >
                        {mode === "category"
                          ? `${i + 1}번 제품`
                          : isMain
                          ? "정밀 추천"
                          : "상위 추천"}
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
        {mode === "category" ? "카테고리 선택으로" : "이전 단계로"}
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
