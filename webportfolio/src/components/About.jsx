import React, { useEffect } from 'react';
import '../styles/About.scss';

const About = () => {
    // useEffect(() => {
    //     const bars = document.querySelectorAll('.progress-bar');
    //     bars.forEach((bar) => {
    //         const value = bar.getAttribute('aria-valuenow');
    //         bar.style.width = value + '%';
    //     });
    // }, []);

    // const skills = [
    //     { name: 'HTML5', level: 85 },
    //     { name: 'CSS3', level: 75 },
    //     { name: 'BOOTSTRAP', level: 65 },
    //     { name: 'JQUERY', level: 55 },
    //     { name: 'MYSQL', level: 70 },
    //     { name: 'PHP', level: 75 },
    // ];
    // return (
    //     <section className="about" id="about">
    //         <div className="inner">
    //             <h2 className='title underline'>ABOUT ME</h2>
    //             <div className="profile_container">
    //                 <ul className="profile_list">
    //                     <li className="profile_item">
    //                         <div className="profile_wrap">
    //                             <div className="img_box">
    //                                 <div className="img"></div>
    //                             </div>
    //                             <ul className='profile'>
    //                                 <li>
    //                                     <strong>Name.</strong>
    //                                     <p>이현준</p>
    //                                 </li>
    //                                 <li>
    //                                     <strong>Birth.</strong>
    //                                     <p>97.09.08</p>
    //                                 </li>
    //                                 <li>
    //                                     <strong>Phone.</strong>
    //                                     <p>010-8286-2797</p>
    //                                 </li>
    //                                 <li>
    //                                     <strong>Email.</strong>
    //                                     <p>guswns1411@naver.com</p>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </li>
    //                     <li className="profile_item">
    //                         <div className="profile_wrap">
    //                             <h2 className="profile_title">EXPERIENCE</h2>
    //                             <ul className="info_list">
    //                                 <li className="info_item">
    //                                     <p className="info_date">2023. 06 - 2025. 03</p>
    //                                     <strong className="info_title">(주)서로커뮤니케이션</strong>
    //                                     <p className="info_role">web publisher</p>
    //                                 </li>
    //                                 <li className="info_item">
    //                                     <p className="info_date">2021. 11 ~ 2022. 12</p>
    //                                     <strong className="info_title">(주)이유엠</strong>
    //                                     <p className="info_role">web publisher</p>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </li>
    //                     <li className="profile_item">
    //                         <div className="profile_wrap">
    //                             <h2 className="profile_title">EDUCATION</h2>
    //                             <ul className="info_list">
    //                                 <li className="info_item">
    //                                     <p className="info_date">2021. 07 - 2021. 10</p>
    //                                     <strong className="info_title">위코드 부트캠프</strong>
    //                                     <p className="info_role">프론트엔드 과정 수료</p>
    //                                 </li>
    //                                 <li className="info_item">
    //                                     <p className="info_date">2016. 03 ~ 2021. 07</p>
    //                                     <strong className="info_title">전주 비전대학교</strong>
    //                                     <p className="info_role">건축과(졸업)</p>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </li>
    //                     <li className="profile_item">
    //                         <div className="profile_wrap">
    //                             <h2 className="profile_title">SKILL</h2>
    //                             <div className="skill_list">
    //                                 {skills.map((skill, idx) => (
    //                                     <div className="barWrapper" key={idx}>
    //                                         <span className="progressText"><b>{skill.name}</b></span>
    //                                         <div className="progress">
    //                                             <div
    //                                                 className="progress-bar"
    //                                                 role="progressbar"
    //                                                 aria-valuenow={skill.level}
    //                                                 aria-valuemin="0"
    //                                                 aria-valuemax="100"
    //                                             >
    //                                                 <span className="popOver" title={`${skill.level}%`}></span>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         </div>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //         <div className="left_bg"></div>
    //     </section>
    // )
}

export default About;