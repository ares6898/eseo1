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
	
 VEP: {
    low: {
      heavy: [
        { name: "XR", variant: "기본" },
        { name: "XRFit", variant: "기본" },
		
		
      ],
      normal: [
        { name: "피지오", variant: "Kan" },
        { name: "피지오", variant: "기본" },
		
		
      ],
      light: [
        { name: "PB마스터형", variant: "기본" },
		{ name: "PB프리미엄", variant: "기본" },
		{ name: "PB고급형", variant: "기본" },
		{ name: "PB기본형", variant: "기본" },
		{ name: "국산실속형", variant: "C1" },
      ],
    },
    mid: {
      heavy: [
        { name: "XR", variant: "기본" },
        { name: "XRFit", variant: "기본" },
		
		
      ],
      normal: [
        { name: "피지오", variant: "Kan" },
        { name: "피지오", variant: "기본" },
		
		
      ],
      light: [
        { name: "PB마스터형", variant: "기본" },
		{ name: "PB프리미엄", variant: "기본" },
		{ name: "PB고급형", variant: "기본" },
		{ name: "PB기본형", variant: "기본" },
		{ name: "국산실속형", variant: "C1" },
      ],
    },
    high: {
      heavy: [
        { name: "XR", variant: "기본" },
        { name: "XRFit", variant: "기본" },
		
		
      ],
      normal: [
        { name: "피지오", variant: "Kan" },
        { name: "피지오", variant: "기본" },
		
		
      ],
      light: [
        { name: "PB마스터형", variant: "기본" },
		{ name: "PB프리미엄", variant: "기본" },
		{ name: "PB고급형", variant: "기본" },
		{ name: "PB기본형", variant: "기본" },
		{ name: "국산실속형", variant: "C1" },
      ],
    },
  },
	
	
	
	
	
	
  VN: {
    low: {
      heavy: [
        { name: "씨맥스Z", variant: "기본" },
        { name: "씨맥스얼티밋", variant: "기본" },
		
		
      ],
      normal: [
        { name: "파워Z", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
		
		
      ],
      light: [
        { name: "어드밴스Z", variant: "기본" },
		{ name: "E2", variant: "기본" },
        { name: "국산실속형", variant: "C1" },
      ],
    },
    mid: {
      heavy: [
	    { name: "씨맥스Z", variant: "기본" },
        { name: "씨맥스얼티밋", variant: "기본" },
		
		
      ],
      normal: [
        { name: "파워Z", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
		
		
      ],
      light: [
        { name: "어드밴스Z", variant: "기본" },
		{ name: "E2", variant: "기본" },
        { name: "국산실속형", variant: "C1" },
      ],
    },
    high: {
      heavy: [
        { name: "씨맥스Z", variant: "기본" },
        { name: "씨맥스얼티밋", variant: "기본" },
		
      ],
      normal: [
        { name: "파워Z", variant: "기본" },
        { name: "와이드Z", variant: "기본" },
		
      ],
      light: [
        { name: "어드밴스Z", variant: "기본" },
		{ name: "E2", variant: "기본" },
        { name: "국산실속형", variant: "C1" },
      ],
    },
  },

 H: {
    low: {
      heavy: [
        { name: "발란시스KR", variant: "인디비주얼" },
		{ name: "라이프스타일", variant: "기본" },

      ],
     normal: [
		 { name: "다이나믹써미트KR", variant: "기본" },
		 { name: "발란시스", variant: "기본" },
		 { name: "발란시스KR", variant: "기본" },		 
      ],
      light: [
		  { name: "국산실속형", variant: "C1" },
        { name: "AM클래식", variant: "기본" },
		{ name: "AMM메이리오", variant: "기본" },
        { name: "AMM컨트롤", variant: "기본" },
        
      ],
    },
    mid: {
      heavy: [
        { name: "라이프스타일", variant: "기본" },
		{ name: "MS프로파일", variant: "기본" },
        
      ],
      normal: [
        { name: "발란시스", variant: "기본" },
        { name: "발란시스KR", variant: "기본" },
		{ name: "다이나믹써미트KR", variant: "기본" }, 
      ],
      light: [
		  { name: "국산실속형", variant: "C1" },
        { name: "AM클래식", variant: "기본" },
		{ name: "AMM메이리오", variant: "기본" },
        { name: "AMM컨트롤", variant: "기본" },
       
      ],
    },
    high: {
      heavy: [
        { name: "라이프스타일", variant: "기본" },
		{ name: "MS프로파일", variant: "기본" },
        
      ],
      normal: [
        { name: "발란시스KR", variant: "기본" },
        { name: "발란시스", variant: "기본" },
		{ name: "다이나믹써미트KR", variant: "기본" },
      ],
      light: [
		  { name: "국산실속형", variant: "C1" },
       { name: "AM클래식", variant: "기본" },
		{ name: "AMM메이리오", variant: "기본" },
        { name: "AMM컨트롤", variant: "기본" },
        
      ],
    },
  },

  VH: {
    low: {
      heavy: [
        { name: "발란시스KR", variant: "인디비주얼" },
		{ name: "라이프스타일", variant: "기본" },
        
      ],
      normal: [
        { name: "발란시스", variant: "기본" },
        { name: "발란시스KR", variant: "기본" },
      ],
      light: [
        { name: "PB마스터형", variant: "기본" },
		{ name: "PB프리미엄", variant: "기본" },
		{ name: "PB고급형", variant: "기본" },
		{ name: "PB기본형", variant: "기본" },
		{ name: "국산실속형", variant: "C1" },
      ],
    },
    mid: {
      heavy: [
        { name: "라이프스타일", variant: "기본" },
		{ name: "MS프로파일", variant: "기본" },
        
      ],
      normal: [
        { name: "발란시스", variant: "기본" },
        { name: "발란시스KR", variant: "기본" },
      ],
      light: [
        { name: "PB마스터형", variant: "기본" },
		{ name: "PB프리미엄", variant: "기본" },
		{ name: "PB고급형", variant: "기본" },
		{ name: "PB기본형", variant: "기본" },
		{ name: "국산실속형", variant: "C1" },
      ],
    },
    high: {
      heavy: [
        { name: "라이프스타일", variant: "기본" },
		{ name: "MS프로파일", variant: "기본" },
        
      ],
      normal: [
        { name: "발란시스KR", variant: "기본" },
        { name: "발란시스", variant: "기본" },
      ],
      light: [
        { name: "PB마스터형", variant: "기본" },
		{ name: "PB프리미엄", variant: "기본" },
		{ name: "PB고급형", variant: "기본" },
		{ name: "PB기본형", variant: "기본" },
		{ name: "국산실속형", variant: "C1" },
		
      ],
    },
  },
};
