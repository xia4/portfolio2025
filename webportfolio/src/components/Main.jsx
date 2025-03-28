import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Main.scss';

const Main = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });

        const timer = setTimeout(() => {
            titleRef.current?.classList.add('active');
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="main" id="home">
            <div className="inner">
                <div className="title_container" ref={titleRef}>
                    <p className="title">WEB PUBLISHER</p>
                    <p className="title-reflection">WEB PUBLISHER</p>
                </div>
                <div className="profile_img_box">
                    <img src={require('../assets/proflie_img.png')} alt="profile" />
                </div>
                <div className="text_wrap">
                    <div className="left_area" data-aos="fade-right">
                        <p>
                            3년 차 웹 퍼블리셔로서 디자인을 웹에 자연스럽게 구현합니다.
                            HTML, CSS, JavaScript 기반의 반응형 UI 제작에 익숙하고,<br/><br/>
                            정리된 마크업 구조와 유지보수 가능한 코드 작성을 지향합니다.<br/>
                            디자이너·개발자와의 협업을 통해 더 나은 결과를<br/> 만드는 것을 좋아합니다.
                        </p>
                        <ul className="link_wrap">
                            <li>
                                <a href="https://velog.io/@guswns1411/posts" target="_blank">
                                    <svg width="16" height="16" viewBox="0 0 192 192" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z" fill="currentColor"></path></svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/xia4" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="right_area" data-aos="fade-left" data-aos-delay="500">
                        <p>
                            정리된 구조와 직관적인 UI를 만드는 걸 좋아하는 웹 퍼블리셔입니다.
                            디자인 의도를 이해하고, 코드로 표현하는 데에 강점이 있습니다.
                            함께 잘 만드는 팀워크를 가장 중요하게 생각합니다.
                        </p>
                    </div>
                </div>
                <div className="side_bg"></div>
            </div>
        </section>
    )
}

export default Main;