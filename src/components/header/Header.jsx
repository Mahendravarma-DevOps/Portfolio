import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header id="main">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mahendravarma A</h1>
        <h5 className="text-light">Devops Engineer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
