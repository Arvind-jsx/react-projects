import React from "react";
import "./intro.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="cards">
        <Link to="/home">
          <div className="card">
            <div className="card-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJeVgeZeRtLq2mLNiKbiljmScnIliUREy1A&s"
                alt="arvind"
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Intro;
