import React from "react";
import TextSlider from './TextSlider';
import '../styles/Home.scss';

const Home = () => {
    return (
        <div className="section_inner">
            <div className="home_page_block">
                <h2>Lee Hyeon Jun</h2>
                <TextSlider />
            </div>
        </div>
    )
}

export default Home;