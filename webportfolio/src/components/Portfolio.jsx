import React, { useState } from "react";
import tokenpostImg from "../assets/tokenpost.jpg";
import tokenpostMainImg from "../assets/tokenpost_main.png";
import tedoImg from "../assets/tedo.png";
import tedoSlideImg from "../assets/tedo_slide.png";
import kiccImg from "../assets/kicc.png";
import ikmrMainImg from "../assets/ikmr_main.png";
import naverImg from "../assets/naver.png";
import ikmrImg from "../assets/ikmr.png";
import reznImg from "../assets/rezn.png";
import peoplyImg from "../assets/peoply.png";
import natureImg from "../assets/nature.png";
import tsiImg from "../assets/tsi.png";
import notFoundImg from "../assets/not_found.png";
import "../styles/Portfolio.scss";

const portfolioData = [
  {
    id: 1,
    title: "TokenPost",
    image: tokenpostImg,
    link: "https://www.tokenpost.kr",
    project_desc: [
      "블록체인, 핀테크 전문 미디어 TokenPost PRO 구독 서비스 및 이벤트 랜딩페이지를 구축하고, 웹사이트의 주요 구독, 이벤트 페이지 전반에 대한 퍼블리싱 및 유지보수를 담당",
      "웹 접근성, 반응형, 사용자 경험(UX)을 고려한 인터랙티브 UI를 구현하여 브랜드 신뢰도와 전환율 향상에 기여했습니다.",
    ],
    date: "2025. 08 ~ 2025. 11",
    level: "100%",
    description: "",
    slide_image: tokenpostMainImg,
    desc_list: [
      "TokenPost 홈페이지 및 주요 서비스 페이지 유지보수·콘텐츠 업데이트·디자인 개편 수행",
      "TokenPost PRO 구독, 구독·친구초대 landing 이벤트 등 신규 구독/이벤트 페이지 퍼블리싱",
      "GSAP, Swiper 를 활용한 스크롤 애니메이션,슬라이드 UI 구현",
      "Git 브랜치 전략(dev, header_v2, stage 브랜치 등) 기반 공동 작업 및 버전(Revision) 관리",
      "적응형 레이아웃 설계 및 크로스브라우징 대응",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "jQuery", "Git", "Figma"],
    category: "TokenPost",
  },
  {
    id: 2,
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
      "Ncloud Design Kit 컴포넌트 마크업 개발",
      "디자이너와의 협업을 통한 UI 구현",
      "Git을 활용한 코드 리뷰 및 피드백",
    ],
    technology: ["HTML5", "SCSS", "JavaScript", "Git", "Figma"],
    category: "Soro Communication",
  },
  {
    id: 3,
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
    remarks: "ss",
  },
  {
    id: 4,
    title: "tedo",
    image: tedoImg,
    slide_image: tedoSlideImg,
    link: "https://tedo.kr/",
    project_desc: [
      "클라이언트와 기획 단계부터 협업하여 프로젝트의 방향성을 설정하고, 반응형 UI 및 섹션별 인터랙션을 제안해 산출물의 완성도를 높였습니다.",
    ],
    date: "2024-05-21",
    level: "70%",
    description: "",
    desc_list: [
      "HTML, CSS, JavaScript를 활용한 UI 개발",
      "반응형 디자인을 고려한 레이아웃 설계 및 스타일링",
      "섹션별 인터랙션 기획 및 구현",
      "내부 퍼블리셔와 협업하여 효율적인 개발 프로세스 진행",
    ],
    technology: ["HTML5", "CSS3", "JavaScript", "PHP", "Figma"],
    category: "Soro Communication",
  },
  {
    id: 5,
    title: "한국경영인증원",
    image: ikmrImg,
    link: "https://www.ikmr.co.kr/",
    project_desc: [],
    date: "2024-05-01",
    slide_image: ikmrMainImg,
    description: "기관 홈페이지 리뉴얼.",
    technology: ["HTML5", "CSS3", "JavaScript"],
    category: "Soro Communication",
  },
  {
    id: 6,
    title: "리즌마켓",
    image: reznImg,
    link: "#",
    project_desc: [],
    date: "2024-04-15",
    description: "이커머스 플랫폼 퍼블리싱.",
    technology: ["HTML5", "CSS3", "JavaScript"],
    category: "Soro Communication",
  },
  {
    id: 7,
    title: "피플리",
    image: peoplyImg,
    link: "https://www.doosandigitalinnovation.com/kr/service/peoply",
    project_desc: [],
    date: "2024-03-20",
    description: "소셜 플랫폼 UI 개발.",
    technology: ["HTML5", "CSS3", "React"],
    category: "Soro Communication",
  },
  {
    id: 8,
    title: "네이쳐스영",
    image: natureImg,
    link: "https://naturesyoungb2b.com/page/brand.html",
    project_desc: [],
    date: "2024-02-10",
    description: "화장품 브랜드 사이트 제작.",
    technology: ["HTML5", "CSS3", "JavaScript"],
    category: "Soro Communication",
  },
  {
    id: 9,
    title: "TSI",
    image: tsiImg,
    link: "https://taesungind.co.kr/",
    project_desc: [],
    date: "2024-01-05",
    description: "기업 홈페이지 제작.",
    technology: ["HTML5", "CSS3", "JavaScript"],
    category: "Soro Communication",
  },
];

const categories = ["All", "TokenPost", "Soro Communication"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState(
    portfolioData.map((item) => item.id)
  );
  const [fadingOutItems, setFadingOutItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // show 클래스 제어

  const handleFilter = (category) => {
    setSelectedCategory(category);
    const newVisibleIds =
      category === "All"
        ? portfolioData.map((item) => item.id)
        : portfolioData
            .filter((item) => item.category === category)
            .map((item) => item.id);

    const toFadeOut = visibleItems.filter((id) => !newVisibleIds.includes(id));
    setFadingOutItems(toFadeOut);

    setTimeout(() => {
      setVisibleItems(newVisibleIds);
      setFadingOutItems([]);
    }, 300);
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setTimeout(() => {
      setIsModalVisible(true); // show 클래스 부여
    }, 10);
  };

  const handleClose = () => {
    setIsModalVisible(false); // show 클래스 제거
    setTimeout(() => {
      setCurrentIndex(null);
    }, 300); // 애니메이션 시간 후 DOM 제거
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : portfolioData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < portfolioData.length - 1 ? prev + 1 : 0));
  };

  const currentPortfolio =
    currentIndex !== null ? portfolioData[currentIndex] : null;

  return (
    <div className="section_inner">
      <div className="section_title_block">
        <div className="section_title_wrapper">
          <h2 className="section_title">Portfolio</h2>
          <p className="section_description">My Best Works</p>
        </div>
      </div>

      <div className="portfolio_content">
        <div className="filter_section">
          <ul className="portfolio_filter">
            {categories.map((cat) => (
              <li
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => handleFilter(cat)}
              >
                <a href="#!" onClick={(e) => e.preventDefault()}>
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="portfolio_grid">
          <ul>
            {portfolioData.map((item, index) => {
              const isVisible = visibleItems.includes(item.id);
              const isFadingOut = fadingOutItems.includes(item.id);

              if (!isVisible && !isFadingOut) return null;

              return (
                <li
                  key={item.id}
                  className={`portfolio_item ${
                    isFadingOut ? "fade-out" : "fade-in"
                  }`}
                  onClick={() => openModal(index)}
                >
                  <div className="portfolio_imgbox">
                    <img src={item.image} alt={item.title} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {currentPortfolio && (
        <div className={`portfolio_modal ${isModalVisible ? "show" : ""}`}>
          <div className="modal_content">
            <div className="close_btn" onClick={handleClose}>
              <i className="ri-close-line"></i>
            </div>

            <div className="modal_body">
              <div className="modal_title">
                <div className="nav_btns">
                  <button onClick={handlePrev}>
                    <i className="ri-arrow-left-s-line"></i>
                  </button>
                  <h1>{currentPortfolio.title}</h1>
                  <button onClick={handleNext}>
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
              <div className="image_area">
                <div className="monitor">
                  <div
                    className={`slide ${
                      currentPortfolio.slide_image ? "" : "not_found_img"
                    }`}
                  >
                    <img
                      src={
                        currentPortfolio.slide_image
                          ? currentPortfolio.slide_image
                          : notFoundImg
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="info_area">
                <div className="info_block">
                  <div className="block_title">
                    <h3>프로젝트 개요</h3>
                  </div>
                  <ul>
                    {currentPortfolio.project_desc.map((item, idx) => (
                      <li key={idx} className="info_value">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="info_block">
                  <div className="block_title">
                    <h3>주요 역할 및 업무</h3>
                  </div>
                  {currentPortfolio.description && (
                    <p className="info_value">{currentPortfolio.description}</p>
                  )}

                  {currentPortfolio.desc_list &&
                    currentPortfolio.desc_list.length > 0 && (
                      <ul>
                        {currentPortfolio.desc_list.map((item, idx) => (
                          <li key={idx} className="info_value">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
                <div className="info_block">
                  <div className="block_title">
                    <h3>제작 기간</h3>
                  </div>
                  <p className="info_value">📅 {currentPortfolio.date}</p>
                </div>
                <div className="info_block">
                  <div className="block_title">
                    <h3>기여도</h3>
                  </div>
                  <p className="info_value">
                    퍼블리싱 {currentPortfolio.level}
                  </p>
                </div>
                <div className="info_block">
                  <div className="block_title">
                    <h3>기술스택</h3>
                  </div>
                  <ul className="skill_list">
                    {currentPortfolio.technology.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="info_block">
                  <div className="block_title">
                    <h3>비고</h3>
                  </div>
                  {currentPortfolio.remarks ? (
                    <p className="info_value">{currentPortfolio.remarks}</p>
                  ) : (
                    <p className="info_value">-</p>
                  )}
                </div>
                {currentPortfolio.link && (
                  <div className="site_btn">
                    <a
                      href={currentPortfolio.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Go Site
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
