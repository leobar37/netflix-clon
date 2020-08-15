import React, { useState, useEffect } from "react";
import "./nav.css";
function Nav() {
  const show = useCustomShow();

  return (
    <nav className={show ? "nav_black" : "nav"}>
      <img
        style={{ width: "100px" }}
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix log"
      />
      <img
        className="nav__avatar"
        style={{ width: "30px" }}
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
      ></img>
    </nav>
  );
}

const useCustomShow = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return show;
};

export default Nav;
