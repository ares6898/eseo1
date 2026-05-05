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
		{ name: "XR", variant: "기본" },
		{ name: "피지오", variant: "기본" },
      ],
      normal: [
        { name: "E2", variant: "기본" },
        { name: "E3", variant: "기본" },
		{ name: "E1", variant: "기본" },
      ],
      light: [
        { name: "국산실속형", variant: "C0" },
		{ name: "국산실속형", variant: "C1" },
        { name: "국산기본형", variant: "C4" },
        { name: "국산기본형", variant: "C6" },
      ],
    },
    mid: {
      heavy: [
        { name: "컴포트맥스", variant: "KAN" },
        { name: "피지오", variant: "KAN" },
		{ name: "XR", variant: "기본" },
      ],
      normal: [
        { name: "E2", variant: "기본" },
        { name: "E3", variant: "기본" },
		{ name: "E1", variant: "기본" },
      ],
      light: [
        { name: "국산실속형", variant: "C0" },
		{ name: "국산실속형", variant: "C1" },
        { name: "국산기본형", variant: "C4" },
        { name: "국산기본형", variant: "C6" },
      ],
    },
    high: {
      heavy: [
        { name: "피지오", variant: "기본" },
        { name: "XR", variant: "기본" },
		{ name: "컴포트맥스", variant: "KAN" },
      ],
      normal: [
        { name: "E2", variant: "기본" },
        { name: "E3", variant: "기본" },
		{ name: "E1", variant: "기본" },
      ],
      light: [
        { name: "국산실속형", variant: "C0" },
		{ name: "국산실속형", variant: "C1" },
        { name: "국산기본형", variant: "C4" },
        { name: "국산기본형", variant: "C6" },
      ],
    },
  },

 first: {
    low: {
      heavy: [
        { name: "로하스", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
		{ name: "XR", variant: "기본" },

      ],
      normal: [
        { name: "E2", variant: "기본" },
        { name: "E3", variant: "기본" },
		{ name: "E1", variant: "기본" },
      ],
      light: [
        { name: "국산실속형", variant: "C0" },
		{ name: "국산실속형", variant: "C1" },
        { name: "국산기본형", variant: "C4" },
        { name: "국산기본형", variant: "C6" },
      ],
    },
    mid: {
      heavy: [
        { name: "로하스", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
		{ name: "XR", variant: "기본" },

      ],
      normal: [
        { name: "E2", variant: "기본" },
        { name: "E3", variant: "기본" },
		{ name: "E1", variant: "기본" },
      ],
      light: [
        { name: "국산실속형", variant: "C0" },
		{ name: "국산실속형", variant: "C1" },
        { name: "국산기본형", variant: "C4" },
        { name: "국산기본형", variant: "C6" },
      ],
    },
    high: {
      heavy: [
        { name: "로하스", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
		{ name: "XR", variant: "기본" },

      ],
      normal: [
        { name: "E2", variant: "기본" },
        { name: "E3", variant: "기본" },
		{ name: "E1", variant: "기본" },
      ],
      light: [
        { name: "국산실속형", variant: "C0" },
		{ name: "국산실속형", variant: "C1" },
        { name: "국산기본형", variant: "C4" },
        { name: "국산기본형", variant: "C6" },
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
        { name: "E2", variant: "기본" },
        { name: "E3", variant: "기본" },
		{ name: "E1", variant: "기본" },
      ],
      light: [
        { name: "국산실속형", variant: "C0" },
		{ name: "국산실속형", variant: "C1" },
        { name: "국산기본형", variant: "C4" },
        { name: "국산기본형", variant: "C6" },
      ],
    },
    mid: {
      heavy: [
        { name: "와이드Z", variant: "기본" },
		{ name: "씨맥스Z", variant: "기본" },
        { name: "XR", variant: "기본" },
      ],
      normal: [
        { name: "E2", variant: "기본" },
        { name: "E3", variant: "기본" },
		{ name: "E1", variant: "기본" },
      ],
      light: [
        { name: "국산실속형", variant: "C0" },
		{ name: "국산실속형", variant: "C1" },
        { name: "국산기본형", variant: "C4" },
        { name: "국산기본형", variant: "C6" },
      ],
    },
    high: {
      heavy: [
        { name: "와이드Z", variant: "기본" },
		{ name: "씨맥스Z", variant: "기본" },
        { name: "XR", variant: "기본" },
      ],
      normal: [
        { name: "E2", variant: "기본" },
        { name: "E3", variant: "기본" },
		{ name: "E1", variant: "기본" },
      ],
      light: [
        { name: "국산실속형", variant: "C0" },
		{ name: "국산실속형", variant: "C1" },
        { name: "국산기본형", variant: "C4" },
        { name: "국산기본형", variant: "C6" },
		
      ],
    },
  },
};
