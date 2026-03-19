// src/utils/lensHelpers.js

import { PRODUCT_INFO } from "../data/productInfo";

export function getCurrentVariantInfo(product, selectedVariant) {
  const variantNames = Object.keys(product?.variants || {});
  return (
    product?.variants?.[selectedVariant] || product?.variants?.[variantNames[0]]
  );
}

export function getSphereOptions(refractiveType) {
  if (refractiveType === "근시") {
    return ["LOW", "-1.00", "-2.00", "-4.00", "-6.00", "HIGH"];
  }
  if (refractiveType === "원시") {
    return ["LOW", "+1.00", "+2.00", "+4.00", "+6.00", "HIGH"];
  }
  return [];
}

export function getRecommendedIndexBySphere(refractiveType, sphereLevel) {
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

export function canUsePremiumCoating(variantInfo, selectedIndex) {
  return Boolean(
    variantInfo?.premiumCoatingRegularPrices?.[selectedIndex] &&
      variantInfo?.premiumCoatingSalePrices?.[selectedIndex]
  );
}

export function canUseTint(variantInfo, selectedIndex) {
  return Boolean(
    variantInfo?.tintRegularPrices?.[selectedIndex] &&
      variantInfo?.tintSalePrices?.[selectedIndex]
  );
}

export function canUsePhoto(variantInfo, selectedIndex) {
  return Boolean(
    variantInfo?.photoRegularPrices?.[selectedIndex] &&
      variantInfo?.photoSalePrices?.[selectedIndex]
  );
}

export function getPreferredVariant(productName, preferredVariant = null) {
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

export function getPreferredCoatingMode(
  variantInfo,
  selectedIndex,
  selectedLensMode = "clear"
) {
  if (selectedLensMode !== "clear") return "basic";
  return canUsePremiumCoating(variantInfo, selectedIndex) ? "premium" : "basic";
}

export function getPreferredSelection(
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

export function parseKoreanPriceToNumber(priceText) {
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

export function getPriceBreakdown(
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