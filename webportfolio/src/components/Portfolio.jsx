import React, { useState } from "react";
import tedoImg from "../assets/tedo.png";
import tedoSlideImg from "../assets/tedo_slide.png";
import kiccImg from "../assets/kicc.png";
import naverImg from "../assets/naver.png";
import ikmrImg from "../assets/ikmr.png";
import reznImg from "../assets/rezn.png";
import peoplyImg from "../assets/peoply.png";
import natureImg from "../assets/nature.png";
import tsiImg from "../assets/tsi.png";
import "../styles/Portfolio.scss";

const portfolioData = [
  {
    id: 1,
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
  },
  {
    id: 2,
    title: "KICC",
    image: kiccImg,
    link: "https://kicc.com",
    project_desc:[],
    date: "2024-06-10",
    description: "결제 시스템 퍼블리싱 및 반응형 최적화.",
    technology: ["HTML5", "SCSS", "jQuery"],
  },
  {
    id: 3,
    title: "tedo",
    image: tedoImg,
    slide_image: tedoSlideImg,
    link: "https://tedo.kr/",
    project_desc:["클라이언트와 기획 단계부터 협업하여 프로젝트의 방향성을 설정하고, 반응형 UI 및 섹션별 인터랙션을 제안해 산출물의 완성도를 높였습니다."],
    date: "2024-05-21",
    level: "70%",
    description: "",
    desc_list: [
        "HTML, CSS, JavaScript를 활용한 UI 개발",
        "반응형 디자인을 고려한 레이아웃 설계 및 스타일링",
        "섹션별 인터랙션 기획 및 구현",
        "내부 퍼블리셔와 협업하여 효율적인 개발 프로세스 진행"
    ],
    technology: ["HTML5", "CSS3","JavaScript", "PHP", "Figma"],
  },
  {
    id: 4,
    title: "한국경영인증원",
    image: ikmrImg,
    link: "#",
    project_desc:[],
    date: "2024-05-01",
    description: "기관 홈페이지 리뉴얼.",
    technology: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 5,
    title: "리즌마켓",
    image: reznImg,
    link: "#",
    project_desc:[],
    date: "2024-04-15",
    description: "이커머스 플랫폼 퍼블리싱.",
    technology: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 6,
    title: "피플리",
    image: peoplyImg,
    link: "#",
    project_desc:[],
    date: "2024-03-20",
    description: "소셜 플랫폼 UI 개발.",
    technology: ["HTML5", "CSS3", "React"],
  },
  {
    id: 7,
    title: "네이쳐스영",
    image: natureImg,
    link: "#",
    project_desc:[],
    date: "2024-02-10",
    description: "화장품 브랜드 사이트 제작.",
    technology: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 8,
    title: "TSI",
    image: tsiImg,
    link: "#",
    project_desc:[],
    date: "2024-01-05",
    description: "기업 홈페이지 제작.",
    technology: ["HTML5", "CSS3", "JavaScript"],
  },
];

const categories = ["All", "Web", "Mobile", "Design"];

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
                  className={`item ${isFadingOut ? "fade-out" : "fade-in"}`}
                  onClick={() => openModal(index)}
                >
                  <div className="portfolio_imgbox">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="detail"></div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {currentPortfolio && (
        <div className={`portfolio_modal ${isModalVisible ? "show" : ""}`}>
          <div className="modal_content">
            <div className="nav_btns">
              <button onClick={handlePrev}>
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button onClick={handleNext}>
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
            <div className="close_btn" onClick={handleClose}>
              <i class="ri-close-line"></i>
            </div>

            <div className="modal_body">
              <div className="modal_title">
                <h1>{currentPortfolio.title}</h1>
              </div>
              <div className="image_area">
                <div className="monitor"></div>
                <div className="slide">
                    <ul>
                        <li>
                            <img src={currentPortfolio.slide_image} alt="" />
                        </li>
                    </ul>
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
                {currentPortfolio.link && (
                  <div className="site_btn">
                    <a
                      href={currentPortfolio.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      페이지
                      <br />
                      이동
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
