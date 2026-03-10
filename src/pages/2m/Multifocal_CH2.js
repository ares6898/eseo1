import React, { useMemo, useState } from "react";

const PRODUCT_INFO = {
  C6: {
    desc: "가볍게 사용하는 실속형",
    autoMent: "가볍게 쓰시면 이 정도면 충분합니다.",
    grade: "합리적 선택",
    badge: "입문 추천",
    summary:
      "누진다초점을 처음 접하거나 사용량이 많지 않은 고객에게 부담 없이 권하기 좋은 제품입니다.",
    goodFor: ["가벼운 근거리 작업", "가격 부담이 큰 고객", "입문형 누진다초점"],
    points: ["실속형", "부담 적은 선택", "기본 기능 중심"],
    image: "/images/multifocal-c6.jpg",
  },
  E3: {
    desc: "무난하고 적응 쉬운 선택",
    autoMent: "무난하고 적응 쉬운 쪽으로 보시면 됩니다.",
    grade: "밸런스형",
    badge: "적응 추천",
    summary:
      "너무 저가형보다는 편안함을 원하면서도 무난하게 적응하기 좋은 균형형 제품입니다.",
    goodFor: ["처음 쓰는 고객", "무난한 적응감 선호", "가성비와 편안함 동시 고려"],
    points: ["적응 무난", "균형 잡힌 선택", "상담 시 추천하기 쉬움"],
    image: "/images/multifocal-e3.jpg",
  },
  컴포트칸: {
    desc: "자세가 더 편한 프리미엄",
    autoMent: "많이 쓰시면 이쪽이 더 편합니다.",
    grade: "프리미엄",
    badge: "편안함 추천",
    summary:
      "근거리 활용량이 더 많고 자세 편안함을 중요하게 보는 고객에게 설득력이 좋은 프리미엄 라인입니다.",
    goodFor: ["업무용 비중이 높은 고객", "근거리 사용량이 많은 고객", "자세 편안함 중시"],
    points: ["근거리 편안함", "업무 활용도 우수", "업셀 포인트 강함"],
    image: "/images/multifocal-comfort.jpg",
  },
  피지오칸: {
    desc: "더 높은 편안함의 상위선택",
    autoMent: "지금 기준에서는 편한 쪽으로 가시는 게 좋습니다.",
    grade: "상위 프리미엄",
    badge: "상위 추천",
    summary:
      "적응성과 편안함을 더 중요하게 보고, 사용 시간이 긴 고객에게 상위 옵션으로 제안하기 좋습니다.",
    goodFor: ["장시간 착용 고객", "적응 스트레스 줄이고 싶은 고객", "상위 프리미엄 선호"],
    points: ["높은 편안함", "장시간 사용 대응", "프리미엄 설득력 우수"],
    image: "/images/multifocal-physio.jpg",
  },
  XR: {
    desc: "최상위 프리미엄",
    autoMent: "가장 편한 쪽으로 보시면 이 라인입니다.",
    grade: "최상위",
    badge: "최상위 추천",
    summary:
      "최대한 좋은 경험과 높은 만족도를 기대하는 고객에게 제안하는 최상위 프리미엄 제품입니다.",
    goodFor: ["최상위 제품 선호", "적응과 시야 모두 중요", "프리미엄 가치 설명이 잘 먹히는 고객"],
    points: ["최상위 라인", "고급 상담용", "브랜드 가치 전달 강함"],
    image: "/images/multifocal-xr.jpg",
  },
};

export default function Ina2Flow() {
  const [step, setStep] = useState("intro");

  const [refractiveType, setRefractiveType] = useState(null);
  const [astigmatismType, setAstigmatismType] = useState(null);
  const [addLevel, setAddLevel] = useState(null);
  const [usage, setUsage] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const canNextDistance = refractiveType && astigmatismType;

  const mainRecommended = useMemo(() => {
    return recommended?.[0] || null;
  }, [recommended]);

  const leftProduct = selectedProduct || mainRecommended;

  /* 추천 로직 */
  const handleFinish = (level, use) => {
    let result = [];

    if (level === "low") {
      if (use === "light") result = ["C6", "E3"];
      else result = ["E3", "컴포트칸"];
    }

    if (level === "mid") {
      if (use === "heavy") result = ["컴포트칸", "피지오칸"];
      else result = ["E3", "컴포트칸"];
    }

    if (level === "high") {
      if (use === "heavy") result = ["피지오칸", "XR"];
      else result = ["컴포트칸", "피지오칸"];
    }

    setUsage(use);
    setRecommended(result);
    setSelectedProduct(result[0] || null);
    setStep("analyzing");

    setTimeout(() => {
      setStep("result");
    }, 1050);
  };

  return (
    <div className="w-screen h-screen bg-slate-50 overflow-hidden">
      <div className="w-full h-full px-10 py-8">
        <div className="w-full h-full bg-white rounded-[36px] shadow-2xl border border-slate-200 flex overflow-hidden">
          {/* ================= LEFT ================= */}
          <div className="relative w-[68%] h-full overflow-hidden border-r border-slate-200">
            {step === "result" && leftProduct ? (
              <ProductPreviewPanel
                productName={leftProduct}
                info={PRODUCT_INFO[leftProduct]}
                isMain={leftProduct === mainRecommended}
              />
            ) : (
              <IntroPanel />
            )}
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative w-[32%] h-full bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center px-10">
            <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2">
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

            <div key={step} className="w-full animate-fade">
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
                  <div className="w-full rounded-[28px] bg-white border border-slate-200 shadow-sm px-8 py-10 text-center">
                    <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-bold border border-blue-200 mb-5">
                      맞춤 추천 분석
                    </div>

                    <div className="text-[28px] font-extrabold text-slate-900 mb-3">
                      고객님 눈 기준으로 확인 중입니다
                    </div>

                    <div className="text-[18px] text-slate-500 font-semibold leading-relaxed mb-8">
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
                  setSelectedProduct={setSelectedProduct}
                  onBack={() => setStep("usage")}
                />
              )}
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
    <div className="relative w-full h-full px-16 py-14 flex flex-col justify-center overflow-hidden">
      <img
        src="/images/bg-clinic-soft.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.32]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/45 to-white/20" />

      <div className="relative z-10">
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-900 font-bold text-xl border border-blue-200 mb-8">
          누진다초점 맞춤 추천
        </div>

        <h1 className="text-[56px] font-extrabold text-slate-900 leading-tight">
          도수와 사용환경 기준으로
          <br />
          추천드립니다
        </h1>

        <p className="mt-8 text-[26px] text-slate-600 font-semibold">
          가격보다 맞는 방향으로
          <br />
          안내해드립니다
        </p>
      </div>
    </div>
  );
}

function ProductPreviewPanel({ productName, info, isMain }) {
  return (
    <div className="relative w-full h-full px-14 py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-sky-100 blur-3xl" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 rounded-full bg-white border border-slate-300 text-slate-700 text-sm font-bold shadow-sm">
                제품 상세 보기
              </span>

              {isMain && (
                <span className="px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-bold shadow-sm">
                  메인 추천
                </span>
              )}
            </div>

            <div className="text-[20px] font-bold text-blue-700 mb-2">
              {info?.grade}
            </div>

            <h2 className="text-[54px] leading-none font-extrabold text-slate-900">
              {productName}
            </h2>

            <div className="mt-4 text-[26px] font-semibold text-slate-600">
              {info?.desc}
            </div>
          </div>

          <div className="shrink-0 px-5 py-3 rounded-[24px] bg-amber-100 text-amber-900 border border-amber-200 font-bold text-lg shadow-sm">
            {info?.badge}
          </div>
        </div>

        <div className="grid grid-cols-[1.15fr_0.85fr] gap-8 flex-1 min-h-0">
          <div className="flex flex-col gap-6 min-h-0">
            <div className="rounded-[30px] bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-7">
              <div className="text-[18px] font-bold text-blue-700 mb-3">
                상담 멘트
              </div>
              <div className="text-[34px] leading-snug font-extrabold text-slate-900">
                {info?.autoMent}
              </div>
            </div>

            <div className="rounded-[30px] bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-7">
              <div className="text-[18px] font-bold text-slate-700 mb-3">
                제품 포인트
              </div>
              <p className="text-[24px] leading-relaxed font-semibold text-slate-700 mb-5">
                {info?.summary}
              </p>

              <div className="flex flex-wrap gap-3">
                {info?.points?.map((point) => (
                  <span
                    key={point}
                    className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[17px] font-bold"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-7 flex-1">
              <div className="text-[18px] font-bold text-slate-700 mb-4">
                이런 고객님께 잘 맞습니다
              </div>

              <div className="grid grid-cols-1 gap-4">
                {info?.goodFor?.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                    <div className="text-[22px] font-bold text-slate-800">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="min-h-0">
            <div className="w-full h-full rounded-[32px] border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                <div className="text-[18px] font-bold text-slate-700">
                  제품 이미지 / 시야 예시
                </div>
              </div>

              <div className="flex-1 p-6 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                {info?.image ? (
                  <img
                    src={info.image}
                    alt={productName}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full rounded-[24px] border-2 border-dashed border-slate-300 flex items-center justify-center text-center px-8">
                    <div>
                      <div className="text-[28px] font-extrabold text-slate-700 mb-2">
                        {productName}
                      </div>
                      <div className="text-[18px] font-semibold text-slate-500 leading-relaxed">
                        여기에 제품 이미지, 브랜드 카드,
                        <br />
                        시야 예시 이미지를 넣으면 좋습니다
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-6 py-5 border-t border-slate-200 bg-white">
                <div className="text-[16px] font-bold text-slate-500 mb-2">
                  상담 활용 팁
                </div>
                <div className="text-[20px] font-bold text-slate-800 leading-relaxed">
                  이 패널은 제품 비교 설명용으로 고정 사용하고,
                  <br />
                  이미지 확대만 팝업으로 연결하면 좋습니다.
                </div>
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
  setSelectedProduct,
  onBack,
}) {
  const mainItem = recommended?.[0];
  const mainMent = mainItem
    ? PRODUCT_INFO[mainItem]?.autoMent ||
      "고객님 기준에 맞는 쪽으로 추천드립니다."
    : "고객님 기준에 맞는 쪽으로 추천드립니다.";

  return (
    <div className="w-full transition-all duration-300 ease-out animate-fade">
      <div className="text-center mb-6">
        <div className="text-[28px] font-extrabold text-slate-900 mb-2">
          고객님 기준에서 가장 잘 맞는 선택입니다
        </div>
        <div className="text-[18px] font-semibold text-slate-500">
          사용환경과 근거리 기준으로 추천드립니다
        </div>
      </div>

      <div className="mb-6 rounded-[24px] bg-blue-50 border border-blue-200 px-5 py-4 shadow-sm">
        <div className="text-[15px] font-bold text-blue-700 mb-1">
          상담 가이드
        </div>
        <div className="text-[22px] font-extrabold text-slate-900 leading-snug">
          {mainMent}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {recommended.map((item, i) => {
          const info = PRODUCT_INFO[item] || {
            desc: "추천 제품",
          };

          const isMain = i === 0;
          const isSelected = selectedProduct === item;

          return (
            <div
              key={i}
              className={`rounded-[28px] border-2 p-5 transition ${
                isSelected
                  ? "bg-blue-50 border-blue-500 shadow-md"
                  : isMain
                  ? "bg-white border-blue-300 shadow-sm"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-bold border mb-3 ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-600"
                        : isMain
                        ? "bg-blue-100 text-blue-800 border-blue-300"
                        : "bg-slate-100 text-slate-700 border-slate-300"
                    }`}
                  >
                    {isSelected ? "현재 표시중" : isMain ? "추천" : "함께 비교"}
                  </div>

                  <div className="text-[30px] font-extrabold text-slate-900">
                    {item}
                  </div>

                  <div className="mt-2 text-[18px] font-semibold text-slate-500">
                    {info.desc}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProduct(item)}
                  className={`shrink-0 px-6 py-3 rounded-2xl font-bold text-[18px] transition ${
                    isSelected
                      ? "bg-blue-700 text-white"
                      : isMain
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200"
                  }`}
                >
                  {isSelected ? "보고 있는 제품" : "왼쪽에서 보기"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onBack}
        className="mt-6 w-full h-[72px] rounded-2xl bg-white border-2 border-slate-300 text-slate-700 text-[22px] font-bold hover:bg-slate-50 transition"
      >
        이전 단계로
      </button>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const Chip = ({ text }) => (
  <div className="px-4 py-1 rounded-full bg-white border border-slate-300 text-slate-700 font-semibold text-sm shadow-sm">
    {text}
  </div>
);

const Center = ({ children }) => (
  <div className="w-full flex flex-col gap-4">{children}</div>
);

const Title = ({ children }) => (
  <div className="text-[26px] font-bold text-slate-800 mb-2 text-center">
    {children}
  </div>
);

const Grid2 = ({ children }) => (
  <div className="grid grid-cols-2 gap-4">{children}</div>
);

const SelectBtn = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`h-[110px] rounded-2xl border-2 font-bold text-[24px] transition ${
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
      className={`h-[110px] rounded-2xl border-2 px-6 flex items-center gap-5 transition ${
        active
          ? "bg-white border-slate-500 scale-[1.01]"
          : "bg-white border-slate-300"
      }`}
    >
      <div className={`w-8 h-8 rounded-full ${map[color]}`} />
      <div className="text-left">
        <div className="text-[26px] font-bold text-slate-800">{label}</div>
        <div className="text-[18px] text-slate-500">{sub}</div>
      </div>
    </button>
  );
};

const UsageBtn = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="h-[110px] rounded-2xl border-2 bg-white border-slate-300 text-[26px] font-bold text-slate-800 hover:bg-blue-50 transition"
  >
    {children}
  </button>
);

const NextBtn = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`mt-2 h-[90px] rounded-2xl text-[26px] font-bold transition ${
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
    className="h-[140px] rounded-[32px] bg-blue-700 text-white text-[34px] font-extrabold hover:bg-blue-800 transition"
  >
    {children}
  </button>
);
