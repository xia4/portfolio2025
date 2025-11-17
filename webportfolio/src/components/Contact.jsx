import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="section_inner">
      <div className="section_title_block">
        <div className="section_title_wrapper">
          <h2 className="section_title">Contact</h2>
          <p className="section_description">Get In Touch</p>
        </div>
      </div>
      <div className="contact_section">
        <div className="contact_bounce_bg">
          <span className="circle circle_1"></span>
          <span className="circle circle_2"></span>
          <span className="circle circle_3"></span>
          <span className="circle circle_4"></span>
          <span className="circle circle_5"></span>
        </div>
        
        <div className="contact_inner">
          <div className="contact_wrap">
            <h2>프로젝트에 힘을 더해줄 퍼블리셔를 찾고 계신가요?</h2>
            <p>
              협업이나 역할에 대해 궁금한 점이 있다면 언제든지 편하게 연락
              주세요.
            </p>
            <span className="arrow"></span>
            <div className="mail_box">
              <a href="mailto:guswns1411@naver.com">guswns1411@naver.com</a>
            </div>
          </div>
          <div className="copy">
            <p>© copyright Lee Hyeonjun. All Right Reserved.</p>
            <p>
              본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로
              제작되었습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
