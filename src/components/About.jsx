import React from "react";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-scroll";
import { FaUniversity, FaBookOpen, FaGraduationCap } from "react-icons/fa";
import "../css/about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Us</h2>
        <div className="about-content">
          <div className="about-item">
            <BsGlobe className="about-icon" />
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              non ante nec tortor fermentum fermentum.
            </p>
          </div>
          <div className="about-item">
            <FaUniversity className="about-icon" />
            <p className="about-description">
              Curabitur interdum faucibus volutpat. Sed congue cursus metus, in
              tempus est fringilla in.
            </p>
          </div>
          <div className="about-item">
            <FaBookOpen className="about-icon" />
            <p className="about-description">
              Proin dapibus lectus ac orci accumsan, in eleifend risus
              tristique. Quisque id felis purus.
            </p>
          </div>
          <div className="about-item">
            <FaGraduationCap className="about-icon" />
            <p className="about-description">
              Duis finibus mauris quis nunc volutpat, eget maximus enim viverra.
              Praesent cursus urna sed nulla dignissim, sed volutpat elit
              luctus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
