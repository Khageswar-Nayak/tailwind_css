import React from "react";
import { Link } from "react-scroll";

const App = () => {
  return (
    <div>
      <div className=" flex flex-row justify-between p-5 md:px-32 bg-white shadow-lg">
        <div>
          <Link to="/">eStudy</Link>
        </div>
        <nav>
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
          <Link to="courses" spy={true} smooth={true} duration={500}>
            Courses
          </Link>
          <Link to="reviews" spy={true} smooth={true} duration={500}>
            Reviews
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default App;
