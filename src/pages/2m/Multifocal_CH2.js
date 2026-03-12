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
              onClick={() => {
                setSelectedVariant(name);
                setSelectedLensMode("clear");
                setSelectedCoatingMode("basic");
              }}
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
        if (!canPremiumCoating) return;
        setSelectedCoatingMode("premium");
        setSelectedLensMode("clear");
      }}
      disabled={!canPremiumCoating}
      className={`h-[38px] px-3 rounded-xl border font-bold text-[13px] transition whitespace-nowrap ${
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
