import { Link } from "react-router-dom";

const HomeStnFour = () => {
  return (
    <>
      <div className="section-four">
        <h1>SKILLS</h1>
        <div className="four-cards">
          <Link to="/home/skills/html">
            <div className="four-card">
              <img
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="four-text">
                <h2>HTML</h2>
              </div>
            </div>
          </Link>

          <Link to="/home/skills/css">
            <div className="four-card">
              <img
                src="https://images.unsplash.com/photo-1634634465913-5bb5600942f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q1NTfGVufDB8fDB8fHww"
                alt=""
              />
              <div className="four-text">
                <h2>CSS</h2>
              </div>
            </div>
          </Link>

          <Link to="/home/skills/javascript">
            <div className="four-card">
              <img
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="four-text">
                <h2>JAVASCRIPT</h2>
              </div>
            </div>
          </Link>

          <Link to="/home/skills/react">
            <div className="four-card">
              <img
                src="https://images.unsplash.com/photo-1670057037226-b3d65909424f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="four-text">
                <h2>REACT</h2>
              </div>
            </div>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default HomeStnFour;
