import React, { useState, useEffect } from 'react';
import '../styles/Resume.scss';

// 스킬 배열
const skills = [
    { name: 'HTML5', level: 85 },
    { name: 'CSS3', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'jQuery', level: 60 },
    { name: 'React.js', level: 55 },
    { name: 'SASS', level: 80 },
    { name: 'Git', level: 70 },
    { name: 'Figma', level: 55 },
];

const ANIMATION_DURATION = 2000;

const Resume = ({ activeSection }) => {
    const initialLevels = skills.map(() => 0); // 중복 제거용 상수
    const [animatedLevels, setAnimatedLevels] = useState(initialLevels);

    useEffect(() => {
        let rafId;
        let startTime;

        // resume 섹션이 아닐 경우 초기화만 하고 종료
        if (activeSection !== 'resume') {
            setAnimatedLevels(initialLevels);
            return;
        }

        setAnimatedLevels(initialLevels);

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / ANIMATION_DURATION, 1);

            // 애니메이션 도중 불필요한 렌더 방지
            setAnimatedLevels(prevLevels =>
                prevLevels.every((level, i) => level === Math.round(skills[i].level * progress))
                    ? prevLevels
                    : skills.map(skill => Math.round(skill.level * progress))
            );

            if (progress < 1) {
                rafId = requestAnimationFrame(animate);
            }
        };

        rafId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(rafId);
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
                {/* Education */}
                <div className="row_item">
                    <div className="block_title"><h3>Education</h3></div>
                    <div className="timeline_list">
                        <div className="timeline_item">
                            <h4 className="timeline_period">2021</h4>
                            <h3 className="timeline_name">위코드</h3>
                            <p className="timeline_role">bootcamp Student</p>
                            <ol className="timeline_detail">
                                <li>HTML, CSS, JavaScript 기본기와 DOM 조작, React 컴포넌트 구조,</li>
                                <li>API 연동, Styled-Components를 활용한 스타일링, Git/GitHub 협업,</li>
                                <li>팀 프로젝트를 통한 실무형 웹 서비스 구현 경험</li>
                            </ol>
                        </div>
                        <div className="timeline_item">
                            <h4 className="timeline_period">2021</h4>
                            <h3 className="timeline_name">전주비전대학교</h3>
                            <p className="timeline_role">University Student</p>
                            <ol className="timeline_detail">
                                <li>건축과 재학 중 도면 작업 및 구조 설계 경험을 통해 공간 구성과 시각적 레이아웃에 대한 감각을 키웠으며,
                                이후 웹 퍼블리싱 분야에 흥미를 느껴 커리어 전환을 결심함</li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Experience */}
                <div className="row_item">
                    <div className="block_title"><h3>Experience</h3></div>
                    <div className="timeline_list">
                        <div className="timeline_item">
                            <h4 className="timeline_period">Apr 2025 - Nov 2025</h4>
                            <h3 className="timeline_name">TokenPost</h3>
                            <p className="timeline_role">Web Publisher</p>
                            <ol className="timeline_detail">
                                <li>TokenPost PRO 구독 서비스 페이지 제작 및 UI 고도화</li>
                                <li>웹사이트 신규 페이지 및 이벤트/프로모션 페이지 구축</li>
                                <li>자사 웹사이트(마이페이지·헤더·프로모션 등) 유지보수 및 UI/UX 개선</li>
                                <li>Phalcon Volt 기반 페이지 퍼블리싱 및 jQuery 모듈로 동적 기능 개발</li>
                                <li>기획자·디자이너·백엔드 개발자와 협업하여 요구사항 분석 및 UI 개선</li>
                            </ol>
                        </div>
                        <div className="timeline_item">
                            <h4 className="timeline_period">Jun 2023 - Apr 2025</h4>
                            <h3 className="timeline_name">(주)서로커뮤니케이션</h3>
                            <p className="timeline_role">Web Publisher</p>
                            <ol className="timeline_detail">
                                <li>다양한 기업 및 클라이언트의 웹사이트 제작 및 유지보수</li>
                                <li>웹사이트 신규 페이지 및 이벤트/프로모션 페이지 구축</li>
                                <li>웹사이트 성능 개선 및 최적화 작업</li>
                                <li>기획자·디자이너와의 협업 및 요구사항 분석을 통한 UI/UX 개선</li>
                            </ol>
                        </div>
                        <div className="timeline_item">
                            <h4 className="timeline_period">Nov 2021 - Dec 2022</h4>
                            <h3 className="timeline_name">(주)이유엠</h3>
                            <p className="timeline_role">Web Publisher</p>
                            <ol className="timeline_detail">
                                <li>Figma를 활용한 UI/UX 설계 및 프로토타입 제작</li>
                                <li>자사 웹사이트 메인 및 서브 페이지 리뉴얼 및 최적화</li>
                                <li>스마트스토어 및 오픈마켓 플랫폼 관리 및 운영</li>
                                <li>상품 등록, 디자인 및 프로모션 페이지 퍼블리싱</li>
                            </ol>
                        </div>
                        <div className="timeline_item">
                            <h4 className="timeline_period">Sep 2021 - Oct 2021</h4>
                            <h3 className="timeline_name">제누이오</h3>
                            <p className="timeline_role">Front-end</p>
                            <ol className="timeline_detail">
                                <li>제품관리/발주 어드민, MyPage, Cart, 메인화면 등 개발</li>
                                <li>JWT 기반 로그인 기능 구현 및 토큰 관리로 사용자 인증 보안 강화</li>
                                <li>페이지네이션을 적용한 제품 목록 페이지 구성</li>
                                <li>제품 검색 및 업로드 기능 구현</li>
                                <li>제품 상세 정보 조회 및 수정 기능 개발</li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="row_item">
                    <div className="block_title"><h3>Skill</h3></div>
                    <div className="skills_box">
                        <ul className="skills_list">
                            {skills.map((skill, i) => (
                                <li key={skill.name} className="skill_item">
                                    <div className="skill_label">
                                        {skill.name}
                                        <span className="skill_level">{animatedLevels[i]}%</span>
                                    </div>
                                    <div className="skill_bar_bg">
                                        <div
                                            className="skill_bar"
                                            style={{ width: `${animatedLevels[i]}%` }}
                                        ></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
