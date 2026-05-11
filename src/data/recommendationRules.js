// src/data/recommendationRules.js
/* =========================================================
   [유지보수 포인트 3]
   맞춤 추천 규칙 DB
   - 기존 handleFinish 안의 추천결과를 별도 DB로 분리
   - all  : 현재 추천 결과와 완전히 동일하게 유지
   - value: 테스트용 실속 추천 규칙 (E시리즈 + C시리즈만 사용)
   - 구조: 추천DB -> addLevel -> usage -> 추천배열
   ========================================================= */
export const RECOMMENDATION_RULES = {
  all: {
    low: {
      heavy: [
        { name: "컴포트맥스", variant: "KAN" },
		{ name: "피지오", variant: "기본" },
		{ name: "XR", variant: "기본" },
      ],
      normal: [
        { name: "컴포트맥스", variant: "기본" },
        { name: "컴포트맥스", variant: "KAN" },
      ],
      light: [
        { name: "실속형PB국산", variant: "C0" },
		{ name: "기본형PB국산", variant: "C1" },
        { name: "고급형PB국산", variant: "C4" },
        { name: "고급형PB수입", variant: "E2" },
      ],
    },
    mid: {
      heavy: [
	    { name: "피지오", variant: "기본" },
        { name: "피지오", variant: "KAN" },
		{ name: "XR", variant: "기본" },
      ],
      normal: [
        { name: "컴포트맥스", variant: "기본" },
        { name: "컴포트맥스", variant: "KAN" },
	    { name: "피지오", variant: "기본" },
		
      ],
      light: [
        { name: "실속형PB국산", variant: "C0" },
		{ name: "기본형PB국산", variant: "C1" },
        { name: "고급형PB국산", variant: "C4" },
        { name: "고급형PB수입", variant: "E2" },
      ],
    },
    high: {
      heavy: [
        { name: "피지오", variant: "KAN" },
        { name: "XR", variant: "기본" },
		
      ],
      normal: [
        { name: "컴포트맥스", variant: "KAN" },
        { name: "피지오", variant: "기본" },
		
      ],
      light: [
        { name: "실속형PB국산", variant: "C0" },
		{ name: "기본형PB국산", variant: "C1" },
        { name: "고급형PB국산", variant: "C4" },
        { name: "고급형PB수입", variant: "E2" },
      ],
    },
  },

 first: {
    low: {
      heavy: [
        { name: "피지오", variant: "기본" },
		{ name: "XR", variant: "기본" },

      ],
      normal: [
        { name: "로하스", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
      ],
      light: [
        { name: "실속형PB국산", variant: "C0" },
		{ name: "기본형PB국산", variant: "C1" },
        { name: "고급형PB국산", variant: "C4" },
        { name: "고급형PB수입", variant: "E2" },
      ],
    },
    mid: {
      heavy: [
        { name: "피지오", variant: "기본" },
		{ name: "XR", variant: "기본" },

      ],
      normal: [
        { name: "로하스", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
      ],
      light: [
        { name: "실속형PB국산", variant: "C0" },
		{ name: "기본형PB국산", variant: "C1" },
        { name: "고급형PB국산", variant: "C4" },
        { name: "고급형PB수입", variant: "E2" },
      ],
    },
    high: {
      heavy: [
        { name: "피지오", variant: "기본" },
		{ name: "XR", variant: "기본" },

      ],
      normal: [
        { name: "로하스", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
      ],
      light: [
        { name: "실속형PB국산", variant: "C0" },
		{ name: "기본형PB국산", variant: "C1" },
        { name: "고급형PB국산", variant: "C4" },
        { name: "고급형PB수입", variant: "E2" },
      ],
    },
  },

  value: {
    low: {
      heavy: [
        { name: "와이드Z", variant: "기본" },
		{ name: "씨맥스Z", variant: "기본" },
        { name: "XR", variant: "기본" },
      ],
      normal: [
        { name: "로하스", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
      ],
      light: [
        { name: "실속형PB국산", variant: "C0" },
		{ name: "기본형PB국산", variant: "C1" },
        { name: "고급형PB국산", variant: "C4" },
        { name: "고급형PB수입", variant: "E2" },
      ],
    },
    mid: {
      heavy: [
        { name: "와이드Z", variant: "기본" },
		{ name: "씨맥스Z", variant: "기본" },
        { name: "XR", variant: "기본" },
      ],
      normal: [
        { name: "로하스", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
      ],
      light: [
        { name: "실속형PB국산", variant: "C0" },
		{ name: "기본형PB국산", variant: "C1" },
        { name: "고급형PB국산", variant: "C4" },
        { name: "고급형PB수입", variant: "E2" },
      ],
    },
    high: {
      heavy: [
        { name: "와이드Z", variant: "기본" },
		{ name: "씨맥스Z", variant: "기본" },
        { name: "XR", variant: "기본" },
      ],
      normal: [
        { name: "로하스", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
      ],
      light: [
        { name: "실속형PB국산", variant: "C0" },
		{ name: "기본형PB국산", variant: "C1" },
        { name: "고급형PB국산", variant: "C4" },
        { name: "고급형PB수입", variant: "E2" },
		
      ],
    },
  },
};
