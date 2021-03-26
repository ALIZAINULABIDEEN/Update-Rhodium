import React, { Component } from "react";
import "../Components/Resume.css";
import cic from "../Components/Image/new.jpg";

import ScrollAnimation from "react-animate-on-scroll";
class Resume extends Component {
  state = {};
  render() {
    return (
      <>
        <section className="site-sections" id="section-about">
          <div class="container">
            <div class="row mb-5 align-items-center">
              <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                  <img src={cic} alt="Image placeholder" class="img-fluid" />
                </ScrollAnimation>
              </div>
              <div class="col-lg-5 pl-lg-5">
                <div class="section-heading">
                  <h2>
                    About <strong>Silver Oaks</strong>
                  </h2>
                </div>
                <p
                  class="lead"
                  style={{
                    color: "wheat",
                    letterSpacing: "2px",
                    fontWeight: "500",
                  }}
                >
                  <strong>WE DEFINE LUXURY</strong>
                </p>
                <p class="" style={{ color: "wheat" }}>
                  Silver Oaks is Pakistan's most valuable and admired real
                  estate developmnet company.With proven competencies in
                  Properties,Shopping Malls & Retail and Hospitality & Lesiure.
                </p>
                <p class="mb-5  " style={{ color: "wheat" }}>
                  Silver Oaks shapes new life style with a focus on design
                  excellence, build quality and timely delivery
                </p>
                <p>
                  {/* <a href="#section-contact" class="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
<a href="#" class="btn btn-secondary px-4 py-2 btn-sm">Download CV</a> */}
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Resume;
