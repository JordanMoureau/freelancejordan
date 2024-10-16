import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./logo";
import { FaFacebookF, FaInstagram, FaBehance, FaGithub } from "react-icons/fa";

import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <header>
      <nav>
        <div className="nav-links">
          <li>
            <Link to="/mywork">My Work</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
        </div>
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="nav-links">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Campaign">Campaign</Link>
          </li>
        </div>
        <div
          className={`mobile-menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <motion.div
        className="mobile-menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="logo-open">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="mobile-menu-links">
          <li>
            <Link to="/mywork" onClick={toggleMenu}>
              My Work
            </Link>
          </li>
          <li>
            <Link to="/aboutme" onClick={toggleMenu}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/campaign" onClick={toggleMenu}>
              Campaign
            </Link>
          </li>
        </div>

        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61560853709737"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF style={{ width: "30px", height: "30px" }} />
          </a>
          <a
            href="https://www.instagram.com/freelancejordan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ width: "40px", height: "40px" }} />
          </a>
          <a
            href="https://www.behance.net/jordanfromnovember"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance style={{ width: "40px", height: "40px" }} />
          </a>
          <a
            href="https://github.com/JordanMoureau"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ width: "40px", height: "40px" }} />
          </a>
        </div>
      </motion.div>
    </header>
  );
}
