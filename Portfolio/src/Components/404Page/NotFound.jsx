import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="noise"></div>

      <section className="error-page">
        <div className="glass-box">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Please Leave Me Alone Bro i am Also a human 😭</p>

          <Link to="/home" className="btn-home">
            Go Back Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
