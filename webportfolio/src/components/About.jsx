import React from 'react';
import '../styles/About.scss';

const About = () => {

    return (
        <div className="section_inner">
            <div className="section_title_block">
                <div className="section_title_wrapper">
                    <h2 className="section_title">About Me</h2>
                    <p className="section_description">Web Publisher</p>
                </div>
            </div>
            <div className="row about_wrap">
                <div className="row_item">
                    <div className="my_photo_block">
                        <img src={require('../assets/proflie_img.png')} alt="profile" />
                    </div>
                </div>
                <div className="row_item">
                    <h2 className='intro_title'>사용자 경험을 데이터로 개선하는 웹퍼블리셔</h2>
                    <p className="intro_text">안녕하세요. 3년차 웹 퍼블리셔 이현준 입니다.</p>
                    <p className='intro_text'>3년간 다양한 프로젝트에서 웹 퍼블리싱을 담당하며, 접근성과 사용성을 고려한 사용자 중심의 웹 설계에 강점을 지닌 웹 퍼블리셔입니다.</p>
                    <p className='intro_text'>HTML, CSS, JavaScript에 대한 탄탄한 기본기를 바탕으로 시멘틱 마크업, 반응형 디자인, 크로스 브라우징 대응에 강점을 가지고 있습니다.</p>
                    <p className='intro_text'>또한, React.js, Vue3 등 JavaScript 프레임워크를 활용한 프로젝트 경험을 통해 프론트엔드 개발자로의 성장을 목표로 하고 있습니다.</p>
                </div>
                <div className="row_item">
                    <dl className="info_list">
                        <div className="row">
                            <dt className="label_box"><span className="label">이름</span></dt>
                            <dd className="info_value">이현준</dd>
                        </div>
                        <div className="row">
                            <dt className="label_box"><span className="label">나이</span></dt>
                            <dd className="info_value">29</dd>
                        </div>
                        <div className="row">
                            <dt className="label_box"><span className="label">MBTI</span></dt>
                            <dd className="info_value">ISFP</dd>
                        </div>
                        <div className="row">
                            <dt className="label_box"><span className="label">주소</span></dt>
                            <dd className="info_value">서울 영등포구 당산동3가</dd>
                        </div>
                        <div className="row">
                            <dt className="label_box"><span className="label">이메일</span></dt>
                            <dd className="info_value info_email"><a href="mailto:guswns1411@naver.com">guswns1411@naver.com</a></dd>
                        </div>
                        <div className="row">
                            <dt className="label_box"><span className="label">연락처</span></dt>
                            <dd className="info_value">(+82)10 8286 2797</dd>
                        </div>
                    </dl>
                    <div className="availability_box">
                        <span className="status_wrap">
                            <span>Available Now</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;