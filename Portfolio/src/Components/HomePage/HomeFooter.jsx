import { Instagram, Github, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <footer>
      <div className="foot">
        <Link to="/home">
          <h5>Home</h5>
        </Link>
        <Link to="/about">
          <h5>About</h5>
        </Link>
        <Link to="/contact">
          <h5>Contact</h5>
        </Link>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com/arvind.l4k/?hl=en" target="_blank">
          <Instagram size={25} strokeWidth={1.75} />
        </a>
        <a href="https://github.com/Arvind-jsx" target="_blank">
          <Github size={25} strokeWidth={1.75} />
        </a>
        <a href="https://www.youtube.com/@Darknessdabi" target="_blank">
          <Youtube size={25} strokeWidth={1.75} />
        </a>
      </div>
      <p>© 2026 Arvind.jsx. All Rights Reserved.</p>
    </footer>
  );
};

export default HomeFooter;
