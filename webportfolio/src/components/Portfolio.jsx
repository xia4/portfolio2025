import React, { useState, useEffect } from "react";
import "../styles/Portfolio.scss";

const portfolioData = [
    { id: 1, title: "Naver Cloud", image: "https://i0.wp.com/inthiswork.com/wp-content/uploads/2022/11/naver-cloud-3-1.jpg?fit=507%2C338&ssl=1", link: "#", category: "Web" },
    { id: 2, title: "Mobile App", image: "https://i0.wp.com/inthiswork.com/wp-content/uploads/2022/11/naver-cloud-3-1.jpg?fit=507%2C338&ssl=1", link: "#", category: "Mobile" },
    { id: 3, title: "Design Work", image: "https://i0.wp.com/inthiswork.com/wp-content/uploads/2022/11/naver-cloud-3-1.jpg?fit=507%2C338&ssl=1", link: "#", category: "Design" },
    { id: 4, title: "Web Project", image: "https://i0.wp.com/inthiswork.com/wp-content/uploads/2022/11/naver-cloud-3-1.jpg?fit=507%2C338&ssl=1", link: "#", category: "Web" },
];

const categories = ["All", "Web", "Mobile", "Design"];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleItems, setVisibleItems] = useState(portfolioData.map(item => item.id));
    const [fadingOutItems, setFadingOutItems] = useState([]);

    const handleFilter = (category) => {
        setSelectedCategory(category);
        const newVisibleIds = category === "All"
            ? portfolioData.map(item => item.id)
            : portfolioData.filter(item => item.category === category).map(item => item.id);

        // 1. 사라져야 할 아이템만 fade-out 처리
        const toFadeOut = visibleItems.filter(id => !newVisibleIds.includes(id));
        setFadingOutItems(toFadeOut);

        // 2. 일정 시간 후 실제 상태 업데이트
        setTimeout(() => {
            setVisibleItems(newVisibleIds);
            setFadingOutItems([]);
        }, 300); // CSS에서 지정한 transition-duration과 일치시킴
    };

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
                        {categories.map(cat => (
                            <li
                                key={cat}
                                className={selectedCategory === cat ? "active" : ""}
                                onClick={() => handleFilter(cat)}
                            >
                                <a href="#!" onClick={e => e.preventDefault()}>{cat}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="portfolio_grid">
                    <ul>
                        {portfolioData.map(item => {
                            const isVisible = visibleItems.includes(item.id);
                            const isFadingOut = fadingOutItems.includes(item.id);

                            if (!isVisible && !isFadingOut) return null;

                            return (
                                <li
                                    key={item.id}
                                    className={`item ${isFadingOut ? "fade-out" : "fade-in"}`}
                                >
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        <img src={item.image} alt={item.title} />
                                        <div className="detail">
                                            <div className="title">
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
