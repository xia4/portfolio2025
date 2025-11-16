import React, { useState, useEffect } from "react";
import { portfolio_mock_data } from "../data/portfolio_mock_data";
import notFoundImg from "../assets/not_found.png";
import "../styles/Portfolio.scss";

const portfolioData = portfolio_mock_data;

const categories = ["All", "TokenPost", "Soro Communication", "Freelance"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState(
    portfolioData.map((item) => item.id)
  );
  const [fadingOutItems, setFadingOutItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      setIsModalVisible(true);
    }, 10);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setCurrentIndex(null);
    }, 300);
  };

  useEffect(() => {
    const handleHeaderClickClose = () => {
      setIsModalVisible(false);
      setTimeout(() => {
        setCurrentIndex(null);
      }, 300);
    };

    window.addEventListener("closePortfolioModal", handleHeaderClickClose);

    return () => {
      window.removeEventListener("closePortfolioModal", handleHeaderClickClose);
    };
  }, []);

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
                  <div className="caption">
                    <h1>{item.title}</h1>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={`portfolio_modal ${isModalVisible ? "show" : ""}`}>
        {currentPortfolio && (
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
                  {currentPortfolio.id === 11 ? (
                    <div className="monitor_screen">
                      <iframe
                        src={currentPortfolio.link}
                        className="slide"
                        title="tsi_frame"
                      ></iframe>
                    </div>
                  ) : (
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
                  )}
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
                {currentPortfolio.remarks && (
                  <div className="info_block">
                    <div className="block_title">
                      <h3>비고</h3>
                    </div>
                    <p className="info_value">{currentPortfolio.remarks}</p>
                  </div>
                )}
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
        )}
      </div>
    </div>
  );
};

export default Portfolio;
