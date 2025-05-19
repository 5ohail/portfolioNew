import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [toggleMenu, setToggleMenu] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!toggleMenu) {
        gsap.from(".toggleMenu", {
          x: "100vw",
          opacity: 0,
          duration: 1,
        });
      } else {
        gsap.from(".logo", {
          y: 30,
          opacity: 0,
          duration: 1.2,
        });
        gsap.from(".menu", {
          x: 40,
          opacity: 0,
          duration: 1,
        });
      }
    }, navRef); // Scope GSAP only within the navbar

    return () => ctx.revert(); // Clean up GSAP context on toggle
  }, [toggleMenu]);

  const toggle = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav ref={navRef}>
      {toggleMenu ? (
        <>
          <div className="logo">
            <h1>SOHAIL.</h1>
          </div>
          <div className="menu">
            <img src="/menu.svg" alt="menu" onClick={toggle} />
          </div>
        </>
      ) : (
        <div className="toggleMenu">
          <img src="/Arrow.svg" alt="arrow" onClick={toggle} />
          <div className="item1">
            <Link to="/about">ABOUT</Link>
          </div>
          <div className="item2">
            <Link to="/project">PROJECTS</Link>
          </div>
          <div className="item1">
            <Link to="/contact">CONTACT US</Link>
          </div>
          <div className="item2">
            <Link to="/services">SERVICES</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
