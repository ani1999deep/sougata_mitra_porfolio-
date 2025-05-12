// import { useEffect } from "react";
// import "../css/Navbar.css";
// import logo from "../components/assets/ps1.png";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="nav-content">
//           <a href="#home" className="logo">
//             <img src={logo} alt="Logo" className="logo-image" />
//             sougata<span className="logo-highlight">.tech</span>
//           </a>

//           <div
//             className="menu-icon"
//             onClick={() => setMenuOpen((prev) => !prev)}
//           >
//             &#9776;
//           </div>

//           <div className="nav-links">
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#projects">Projects</a>
//             <a href="#contact">Contact</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

import { useEffect, useState } from "react";
import "../css/Navbar.css";
import logo from "../components/assets/ps1.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const toggleModal = (e) => {
    e.preventDefault(); // prevent default anchor behavior
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <a href="#home" className="logo" onClick={toggleModal}>
              <img src={logo} alt="Logo" className="logo-image" />
              sougata<span className="logo-highlight">.tech</span>
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

      {/* Modal for enlarged logo */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <img src={logo} alt="Enlarged Logo" className="modal-image" />
        </div>
      )}
    </>
  );
};
