import { useEffect } from "react";
import "../css/Navbar.css";
import logo from "../components/assets/ps1.png"; // adjust path if needed

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <a href="#home" className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
            sougata<span className="logo-highlight">.qulity delivery</span>
          </a>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
