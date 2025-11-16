// src/mock/portfolio_mock_data.js
import tokenpostImg from "../assets/tokenpost.png";
import tokenpostMainImg from "../assets/tokenpost_main.png";
import referralImg from "../assets/referral_image.png";
import referraEvent from "../assets/referral_event.png";
import subscirbeImg from "../assets/subscribe_image.png";
import subscribeLanding from "../assets/subscribe_landing.png";
import tedoImg from "../assets/tedo.png";
import tedoSlideImg from "../assets/tedo_slide.png";
import kiccImg from "../assets/kicc.png";
import ikmrMainImg from "../assets/ikmr_main.png";
import naverImg from "../assets/naver.png";
import ikmrImg from "../assets/ikmr.png";
import reznImg from "../assets/rezn.png";
import peoplyImg from "../assets/peoply.png";
import peoplyMainImg from "../assets/peoply_main.png";
import natureImg from "../assets/nature.png";
import natureMainImg from "../assets/nature_main.png";
import tebahImg from "../assets/tebah.png";
import tebahMainImg from "../assets/tebah_main.png";
import bymoodImg from "../assets/bymood.png";
import bymoodMainImg from "../assets/bymood_main.png";
import tebahMallImg from "../assets/tebahmall.png";
import tebahMallMainImg from "../assets/tebahmall_main.png";
import tsiImg from "../assets/tsi.png";

export const portfolio_mock_data = [
  {
    id: 1,
    title: "TokenPost",
    image: tokenpostImg,
    link: "https://www.tokenpost.kr",
    project_desc: [
      "TokenPost 웹사이트 전반의 유지보수 및 기능 개선 작업을 담당하며, 주요 페이지 구조 개선·UI 개편·콘텐츠 업데이트를 수행했습니다.",
      "헤더·네비게이션 구조 개편, 마이페이지 개선, 디자인 개편 반영 등 사용자 경험을 높이기 위한 퍼블리싱 작업에 참여했습니다.",
    ],
    date: "2025. 08 ~ 2025. 11",
    level: "100%",
    description: "",
    slide_image: tokenpostMainImg,
    desc_list: [
      "사이트 전반의 유지보수 및 신규 UI 적용을 위한 구조 개편",
      "헤더(PC/Mobile) 네비게이션 구조 수정 및 전면 개편 반영",
      "마이페이지 레이아웃·입력폼·리스트 UI 개선 및 오류 수정",
      "게시판·뉴스·프로 콘텐츠 영역의 디자인 반영 및 퍼블리싱 작업",
      "전반적인 스타일 가이드 정리 및 공통 UI 컴포넌트화",
      "크로스브라우징 대응 및 HTML/CSS/JS 전반의 오류 개선",
      "Git 브랜치 전략(dev, header_v2, stage 등)을 통한 협업·버전 관리",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "jQuery", "Git", "Figma"],
    category: "TokenPost",
  },
  {
    id: 2,
    title: "TokenPost – 친구초대 이벤트 랜딩페이지",
    image: referralImg,
    link: "https://www.tokenpost.kr/subscribe/landing/referral-event",
    project_desc: [
      "TokenPost PRO 친구초대 이벤트 전용 랜딩페이지를 퍼블리싱하여, 초대·참여 과정이 명확하게 전달되도록 UI 흐름을 설계했습니다.",
      "스크롤 기반 인터랙션, 캐러셀UI, 참여 안내 UI 등 사용자 몰입도를 높이는 요소를 구현했습니다.",
    ],
    date: "2025. 11",
    level: "100%",
    description: "",
    slide_image: referraEvent,
    desc_list: [
      "초대코드 공유 중심의 정보 구조 설계 및 UI 퍼블리싱",
      "GSAP 기반의 카드형 슬라이드 및 이벤트 과정 표현",
      "PC·모바일 환경 모두 최적화된 적응형 이벤트 페이지 제작",
      "참여 링크·초대코드·혜택 안내 등 핵심 요소를 시각적 강조로 구성",
      "친구초대 영역 및 구독 서비스와 연동되는 유지보수·기능 개선 수행",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "jQuery", "Git", "Figma"],
    category: "TokenPost",
  },
  {
    id: 3,
    title: "TokenPost PRO – 2025 구독 오픈 이벤트",
    image: subscirbeImg,
    link: "https://www.tokenpost.kr/subscribe/landing/2025-subscription-open",
    project_desc: [
      "2025년 구독 정책 개편에 맞춰 사용자에게 핵심 혜택과 변경 사항을 직관적으로 전달하는 구독 오픈 이벤트 페이지를 퍼블리싱했습니다.",
    ],
    date: "2025. 10",
    level: "100%",
    description: "",
    slide_image: subscribeLanding,
    desc_list: [
      "2025 구독 플랜 안내 구성 및 정보 전달 중심 레이아웃 설계",
      "적응형 및 다양한 해상도에서의 안정적인 UI 제공",
      "구독 관련 콘텐츠 및 페이지 전반 유지보수·콘텐츠 업데이트 운영",
      "Git 기반 협업 및 디자인 개편 사항에 대한 퍼블리싱 반영",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "jQuery", "Git", "Figma"],
    category: "TokenPost",
  },
  {
    id: 4,
    title: "Naver Cloud Platform",
    image: naverImg,
    link: "",
    project_desc: [
      "네이버 클라우드 플랫폼의 디자인 킷인 NDK(Ncloud Design Kit)의 컴포넌트 개발을 담당했습니다.",
      "클라우드 플랫폼 디자이너가 제공한 디자인을 바탕으로 컴포넌트 마크업을 진행했으며,\n 내부 팀원들과 원활한 소통과 Git을 통해 코드 리뷰를 진행하며 코드의 품질을 향상시켜 프로젝트를 성공적으로 수행했습니다.",
    ],
    date: "2023. 06 ~ 2025. 04",
    level: "45%",
    description: "",
    desc_list: [
      "Ncloud Design Kit(NDK) 기반의 UI 컴포넌트 개발 및 마크업",
      "내부 서비스 페이지 제작을 위한 컴포넌트 조립 및 구조 설계",
      "클라우드 플랫폼 디자이너와의 협업을 통한 UI/UX 구현",
      "Git을 활용한 코드 리뷰, 버전 관리 및 협업 프로세스 참여",
      "반복 사용되는 UI 패턴의 재사용성과 유지보수성을 고려한 구조화 작업",
    ],
    technology: ["HTML5", "SCSS", "JavaScript", "Git", "Figma"],
    category: "Soro Communication",
    remarks:
      "네이버 클라우드 플랫폼 내부 보안 정책으로 인해 실제 페이지 및 산출물 제공은 제한됩니다.",
  },
  {
    id: 5,
    title: "KICC",
    image: kiccImg,
    link: "",
    project_desc: [
      "KICC 웹사이트의 전면 리뉴얼을 기획부터 개발까지 주도하여 진행.",
      "UI/UX 개선과 성능 최적화를 목표로 Vue3 및 SASS를 활용한 컴포넌트 기반 개발 수행.",
      "반응형 웹 디자인을 고려하여 최적화된 마크업을 제공하는 역할을 수행.",
    ],
    date: "2023. 01 ~ 2025. 03",
    level: "50%",
    slide_image: "",
    desc_list: [
      "UI 컴포넌트 개발 및 스타일 가이드 적용",
      "아코디언(Accordion), 모달(Modal), 탭(Tab), 캘린더(Calendar) 등 인터랙티브 컴포넌트 구현",
      "SASS 기반의 마크업 및 반응형 퍼블리싱",
      "API 연동 작업 (Swagger 기반)",
    ],
    technology: ["Vue3", "SCSS", "Git", "PSD"],
    category: "Soro Communication",
    remarks:
      "KICC 웹사이트 리뉴얼 전체적으로 퍼블리싱 작업을 완료했으나, 회사 내부 사정으로 인해 배포 단계에서 프로젝트가 중단되었습니다. \n이로 인해 실제 서비스 링크와 화면 캡처는 제공이 어려운 점 참고 부탁드립니다.",
  },
  {
    id: 6,
    title: "tedo",
    image: tedoImg,
    slide_image: tedoSlideImg,
    link: "https://tedo.kr/",
    project_desc: [
      "클라이언트와 기획 초기 단계부터 협업하여 페이지 구조, 사용자 흐름, 인터랙션 방향성을 제안하며 프로젝트 품질 향상에 기여했습니다.",
      "반응형 웹을 고려한 UI 구성 및 섹션별 인터랙션을 기획·구현하여 브랜드 컨셉에 맞는 사용자 경험을 구축했습니다.",
    ],
    date: "2024. 11 ~ 2025. 02",
    level: "70%",
    description: "",
    desc_list: [
      "기획 단계 참여를 통한 페이지 플로우 설계 및 인터랙션 제안",
      "HTML, CSS, JavaScript 기반의 UI 개발 및 섹션별 인터랙션 구현",
      "모든 디바이스에 대응하는 반응형 레이아웃 설계 및 스타일링",
      "키 비주얼 영역·스크롤 인터랙션·전환 애니메이션 등 주요 UI 요소 구현",
      "내부 퍼블리셔와의 협업을 통한 개발 플로우 정리 및 코드 품질 개선",
      "PHP 기반 페이지 구조 분석 및 적용을 통한 서버 연동 반영",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "PHP", "Figma"],
    category: "Soro Communication",
  },
  {
    id: 7,
    title: "한국경영인증원",
    image: ikmrImg,
    link: "https://www.ikmr.co.kr/",
    project_desc: [
      "클라이언트와 직접 소통하며 PHP 기반 웹사이트의 퍼블리싱 유지보수를 진행했습니다.",
      "서브페이지 수정 및 제작을 비롯해 메인페이지 일부 섹션을 개선하여 사이트의 완성도를 높였습니다.",
    ],
    date: "2024. 03 ~ 2025. 03",
    level: "100%",
    slide_image: ikmrMainImg,
    desc_list: [
      "PHP 기반 페이지 구조 분석 및 수정",
      "서브페이지 신규 제작 및 기존 페이지 개선",
      "메인페이지 일부 섹션 레이아웃 및 스타일링 수정",
      "클라이언트 요청 사항을 신속하게 반영하며 유지보수 진행",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "PHP", "PSD"],
    category: "Soro Communication",
  },
  {
    id: 8,
    title: "리즌마켓",
    image: reznImg,
    project_desc: [
      "샵바이 기반으로 제작된 친환경 쇼핑 플랫폼으로, 샵바이 API를 활용한 기능 개발 및 컴포넌트 구축을 담당했습니다.",
      "이벤트 페이지 제작, 서브페이지 퍼블리싱, UI 개선 작업을 통해 전반적인 사용자 경험 향상에 기여했습니다.",
    ],
    level: "100%",
    date: "2024. 03 ~ 2024. 11",
    desc_list: [
      "샵바이 API를 활용한 상품·배너·카테고리 등 주요 컴포넌트 개발",
      "이벤트 페이지 및 서브페이지 신규 제작과 유지보수 퍼블리싱",
      "Svelte.js와 SCSS 기반의 반응형 UI 구축 및 동적 컴포넌트 구현",
      "플랫폼 구조에 적합한 모듈화·재사용성 중심의 UI 구조 설계",
      "퍼포먼스·유지보수성을 고려한 코드 최적화 및 레이아웃 개선",
    ],
    technology: ["Svelte.js", "SCSS", "Git"],
    category: "Soro Communication",
    remarks:
      "리즌마켓 웹사이트의 퍼블리싱 및 유지보수 작업을 수행했으나, 현재는 '두타온' 사이트로 변경되어 기존 산출물 제공이 제한됩니다.",
  },
  {
    id: 9,
    title: "피플리",
    image: peoplyImg,
    link: "https://www.doosandigitalinnovation.com/kr/service/peoply",
    project_desc: [
      "두산의 HR 전반을 아우르는 올인원 플랫폼으로, 사용자의 편의성과 접근성을 고려한 퍼블리싱 작업을 진행했습니다.",
    ],
    date: "2024. 04 ~ 2024. 05",
    level: "100%",
    slide_image: peoplyMainImg,
    desc_list: [
      "HTML, CSS, JavaScript를 활용한 퍼블리싱 작업",
      "플랫폼의 특성에 맞는 레이아웃 설계 및 스타일링",
      "사용자 경험을 개선하기 위한 UI 구성 및 기능 구현",
      "프로젝트 전반에 걸친 퍼블리싱 작업 수행",
    ],
    technology: ["HTML5", "CSS3", "PHP", "PSD"],
    category: "Soro Communication",
  },
  {
    id: 10,
    title: "네이쳐스영",
    image: natureImg,
    link: "https://naturesyoungb2b.com/page/brand.html",
    project_desc: [
      "PHP 기반으로 개발된 웹사이트의 메인 및 서브페이지 유지보수 작업을 수행하여 사이트의 안정성과 완성도를 높였습니다.",
    ],
    date: "2024. 03 ~ 2024. 05",
    level: "30%",
    slide_image: natureMainImg,
    desc_list: [
      "PHP 기반 페이지 구조 분석 및 수정",
      "서브페이지의 레이아웃 및 스타일링 유지보수",
      "HTML, CSS, JavaScript를 활용한 기능 개선 및 오류 수정",
      "프로젝트 협업을 통한 퍼블리싱 작업 진행",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "PHP", "Figma"],
    category: "Soro Communication",
  },
  {
    id: 11,
    title: "TSI",
    image: tsiImg,
    link: "https://taesungind.co.kr/",
    project_desc: [
      "PHP 기반으로 개발된 웹사이트의 메인 및 서브페이지 유지보수 작업을 수행하여 사이트의 안정성과 완성도를 높였습니다.",
    ],
    date: "2024. 09",
    level: "40%",
    desc_list: [
      "PHP 기반 페이지 구조 분석 및 수정",
      "서브페이지의 레이아웃 및 스타일링 유지보수",
      "HTML, CSS, JavaScript를 활용한 기능 개선 및 오류 수정",
      "프로젝트 협업을 통한 퍼블리싱 작업 진행",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "PHP", "Figma"],
    category: "Soro Communication",
  },
  {
    id: 12,
    title: "TEBAH",
    image: tebahImg,
    link: "http://www.tebah153.com/",
    project_desc: [
      "카페24 기반으로 신규 구축된 웹사이트로, 메인·서브페이지 전체 퍼블리싱을 단독으로 수행했습니다.",
      "클라이언트와 직접 소통하며 요구사항을 반영하고 UI 구조 설계부터 스타일링까지 전 과정을 진행했습니다.",
    ],
    date: "2024. 09",
    level: "100%",
    slide_image: tebahMainImg,
    desc_list: [
      "카페24 기반 웹사이트 신규 구축 및 메인·서브페이지 퍼블리싱",
      "레이아웃 설계, HTML/CSS 구조화, JavaScript 기능 구현",
      "클라이언트 요청사항 실시간 반영 및 UI/UX 개선",
      "PC·모바일 반응형 페이지 제작 및 크로스브라우징 처리",
      "전 페이지 퍼블리싱 작업을 100% 단독으로 수행",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "Figma"],
    category: "Freelance",
  },
  {
    id: 13,
    title: "TebahMall",
    image: tebahMallImg,
    link: "https://tebahmall.cafe24.com/",
    project_desc: [
      "TebahMall은 카페24 기반으로 구축된 쇼핑몰로, 메인 및 전반적인 서브페이지 퍼블리싱을 단독으로 수행했습니다.",
      "상품 리스트·상세·고객센터 등 쇼핑몰 특성에 맞는 구조를 구성하고 반응형 UI를 구현했습니다.",
    ],
    date: "2024. 09",
    level: "100%",
    slide_image: tebahMallMainImg,
    desc_list: [
      "카페24 쇼핑몰 전반의 신규 퍼블리싱 작업 수행",
      "메인 페이지·상품 페이지·게시판 등 쇼핑몰 핵심 UI 퍼블리싱",
      "반응형 레이아웃 설계 및 SCSS 스타일링",
      "클라이언트와 직접 커뮤니케이션하여 요구사항 반영",
      "쇼핑몰 특성에 맞춘 UI 요소 기능 구현 및 퍼포먼스 개선",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "Figma"],
    category: "Freelance",
  },
  {
    id: 14,
    title: "Bymood",
    image: bymoodImg,
    link: "https://bymood.net/",
    project_desc: [
      "카페24 기반으로 신규 제작된 쇼핑몰 사이트이며, 메인 및 서브페이지의 전체 퍼블리싱 작업을 단독으로 수행했습니다.",
      "브랜드 컨셉에 맞는 스타일 가이드 반영과 반응형 UI 구현을 중심으로 작업을 진행했습니다.",
    ],
    date: "2024. 09",
    level: "100%",
    slide_image: bymoodMainImg,
    desc_list: [
      "카페24 기반 신규 웹사이트 구축 및 전체 퍼블리싱",
      "메인·서브 페이지 레이아웃 설계 및 스타일링",
      "UI 컴포넌트 제작 및 JavaScript 기능 구현",
      "브랜드 아이덴티티에 맞춘 스타일 가이드 정리",
      "클라이언트와 직접 조율하며 요구사항 반영 및 최종 결과물 완성",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "Figma"],
    category: "Freelance",
  },
];
