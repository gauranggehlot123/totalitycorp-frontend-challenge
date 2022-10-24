import React, { useState } from "react";
import "./Styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import companyLogo from "../assets/Icons/appleLogo.svg";
import searchIcon from "../assets/Icons/searchIcon.svg";
import cartIcon from "../assets/Icons/cartIcon.svg";
import Hamburger from "../assets/Icons/Hamburger.svg";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img className="appleLogo" src={companyLogo} />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Store</NavLink>
            </li>
            <li>
              <NavLink to="/Mac">Mac</NavLink>
            </li>
            <li>
              <NavLink to="/iPad">iPad</NavLink>
            </li>
            <li>
              <NavLink to="/iPhone">iPhone</NavLink>
            </li>
            <li>
              <NavLink to="/watch">Watch</NavLink>
            </li>
            <li>
              <NavLink to="/airpods">AirPods</NavLink>
            </li>
            <li>
              <NavLink to="/tv&home">TV & Home</NavLink>
            </li>
            <li>
              <NavLink to="/onlyonapple">Only on Apple</NavLink>
            </li>
            <li>
              <NavLink to="/accessories">Accessories</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/search">
                <img className="searchIcon" src={searchIcon} />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#cart">
                <img className="cartIcon" src={cartIcon} />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <img className="cartIcon" src={Hamburger} />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
