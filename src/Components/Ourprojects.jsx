import React, { Component } from "react";
import "../Components/Ourprojects.css";
import cic from "../Components/Image/lol.gif"
import uic from "../Components/Image/cs.gif"
import pos from "../Components/Image/ius.gif"
import uos from "../Components/Image/pin.gif"

import ScrollAnimation from 'react-animate-on-scroll';
class Ourprojects extends Component {
  state = {};
  render() {
    return (
      <>
        <section class="site-sections" id="section-blog">
          <div class="container">
            <div class="row">
              <div class="col-md-12 mb-5">
                <div class="section-heading text-center">
                  <h2>
                    Our <strong>Projects</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-lg-4 mb-4">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div class="blog-entry">
                  <a href="#">
                    <img
                      src={cic}
                      alt="Image placeholder"
                      class="img-fluid"
                      style={{width:"100%"}}
                    />
                  </a>
                  <div class="blog-entry-text">
                    <h3>
                      <a href="#">Rhodium Residencia</a>
                    </h3>
                    <p class="mb-4" style={{ color: "wheat" }}>
                      Silver Oaks and Centaurus brings a new vision of luxury to diplomatic enclave islamabad reknown for its culture and luxury where design meets elegance and style comes to life
                    </p>
                    <div class="meta">
                      {/* <a href="#"><span class="icon-calendar"></span> Aug 7, 2018</a>
<a href="#"><span class="icon-bubble"></span> 5 Comments</a> */}
                    </div>
                  </div>
                </div>
                </ScrollAnimation>
              </div>
              <div class="col-sm-6 col-lg-4 mb-4">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}   delay={100}>
                <div class="blog-entry">
                  <a href="#">
                    <img
                      src={uos}
                      alt="Image placeholder"
                      class="img-fluid"
                      style={{width:"100%"}}
                    />
                  </a>
                  <div class="blog-entry-text">
                    <h3>
                      <a href="#">City Stay</a>
                    </h3>
                    <p class="mb-4" style={{ color: "wheat" }}>
                 Imagine living in the new skyline of the islamabad. Citystay islamabad's most exquisite luxury residential appartments situated footsteps away from Islamabad International Airport
                    </p>
                    <div class="meta"></div>
                  </div>
                </div>
                </ScrollAnimation>
              </div>
              <div class="col-sm-6 col-lg-4 mb-4">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}   delay={200}>
                <div class="blog-entry">
                  <a href="#">
                    <img
                      src={pos}
                      alt="Image placeholder"
                      class="img-fluid"
                      style={{width:"100%"}}
                    />
                  </a>
                  <div class="blog-entry-text">
                    <h3>
                      <a href="#">Elaan Square</a>
                    </h3>
                    <p class="mb-4" style={{ color: "wheat" }}>
                      Silver Oaks presents an exclusive collection of residential and 
                      commercial space that boast large open plan interiors supreme storage & premium finishes 
                    </p>
                    <div class="meta">
                      {/* <a href="#"><span class="icon-calendar"></span> Aug 7, 2018</a>
<a href="#"><span class="icon-bubble"></span> 5 Comments</a> */}
                    </div>
                  </div>
                </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Ourprojects;
