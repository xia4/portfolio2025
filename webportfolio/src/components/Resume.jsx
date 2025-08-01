import React, { useRef, useState, useEffect } from 'react';
import '../styles/Resume.scss';

const skills = [
    { name: 'HTML5', level: 85 },
    { name: 'CSS3', level: 75 },
    { name: 'BOOTSTRAP', level: 65 },
    { name: 'JQUERY', level: 55 },
    { name: 'MYSQL', level: 70 },
    { name: 'PHP', level: 75 },
];

const ANIMATION_DURATION = 2500;
const INTERVAL = 20;

const Resume = ({ activeSection }) => {
    const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

    useEffect(() => {
        let rafId;
        let startTime;

        if (activeSection === 'resume') {
            setAnimatedLevels(skills.map(() => 0));

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / ANIMATION_DURATION, 1);

                setAnimatedLevels(
                    skills.map(skill => Math.round(skill.level * progress))
                );

                if (progress < 1) {
                    rafId = requestAnimationFrame(animate);
                }
            };
            rafId = requestAnimationFrame(animate);
        } else {
            setAnimatedLevels(skills.map(() => 0));
        }
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [activeSection]);

    return (
        <div className="section_inner">
            <div className="section_title_block">
                <div className="section_title_wrapper">
                    <h2 className="section_title">Resume</h2>
                    <p className="section_description">3 Years of Experience</p>
                </div>
            </div>
            <div className="row">
                <div className="row_item">
                    <div className="block_title">
                        <h3>Education</h3>
                    </div>
                    <div className="timeline">
                        <div className="timeline_event">
                            <h4 className="event_date">2021</h4>
                            <h3 className="event_name">위코드</h3>
                            <p className="event_description">bootcamp Student</p>
                            <p className="event_text"></p>
                        </div>
                        <div className="timeline_event">
                            <h4 className="event_date">2021</h4>
                            <h3 className="event_name">전주비전대학교</h3>
                            <p className="event_description">University Student</p>
                            <p className="event_text"></p>
                        </div>
                    </div>
                </div>
                <div className="row_item">
                    <div className="block_title">
                        <h3>Experience</h3>
                    </div>
                    <div className="timeline">
                        <div className="timeline_event">
                            <h4 className="event_date">Jun 2023 - Apr 2025</h4>
                            <h3 className="event_name">(주)서로커뮤니케이션</h3>
                            <p className="event_description">Web Publisher</p>
                            <p className="event_text"></p>
                        </div>
                        <div className="timeline_event">
                            <h4 className="event_date">Nov 2021 - Dec 2022</h4>
                            <h3 className="event_name">(주)이유엠</h3>
                            <p className="event_description">Web Publisher</p>
                            <p className="event_text"></p>
                        </div>
                        <div className="timeline_event">
                            <h4 className="event_date">Sep 2021 - Oct 2021</h4>
                            <h3 className="event_name">제누이오</h3>
                            <p className="event_description">Web Publisher</p>
                            <p className="event_text"></p>
                        </div>
                    </div>
                </div>
                <div className="row_item">
                    <div className="block_title">
                        <h3>Skill</h3>
                    </div>
                    <div className="skills_box">
                        <ul className="skills_list">
                            {skills.map((skill, i) => (
                                <li key={skill.name} className="skill_item">
                                    <div className="skill_label">
                                        {skill.name}
                                        <span className="skill_level">
                                            {animatedLevels[i]}%
                                        </span>
                                    </div>
                                    <div className="skill_bar_bg">
                                        <div
                                            className="skill_bar"
                                            style={{
                                                width: `${animatedLevels[i]}%`,
                                                transition: 'none'
                                            }}
                                        ></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Resume;
