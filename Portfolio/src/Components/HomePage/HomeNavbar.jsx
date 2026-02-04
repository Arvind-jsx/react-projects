import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <>
      <header>
        <div className="nav">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJeVgeZeRtLq2mLNiKbiljmScnIliUREy1A&s"
            alt="arvind"
          />
          <h5>Arvind.jsx</h5>
        </div>
        <nav>
          <Link to="/home" ><h5>Home</h5></Link>
          <Link to="/about" ><h5>About</h5></Link>
          <Link to="/contact" ><h5>Contact</h5></Link>
        </nav>
      </header>
    </>
  );
};

export default HomeNavbar;
