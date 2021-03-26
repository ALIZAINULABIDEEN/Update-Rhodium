import React, { Component } from "react";
import "../Overlay/Overlay.css";
import web from "../Components/Image/rhod.png";
import pic from "../Components/Image/elan.jpg";
import nic from "../Components/Image/cen.jpg";
import cic from "../Components/Image/rod.jpg";
import sic from "../Components/Image/mar.jpg";
import sip from "../Components/Image/oak.jpg";

import ScrollAnimation from "react-animate-on-scroll";
class Overlay extends Component {
  state = {};
  render() {
    return (
      <>
        <div class="container site-section " id="section-portfolio">
          <div class="row">
            <div class="single-portfolio col-sm-4 all mockup">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                data-aos-duration="1000"
              >
                {/* <h3 class="title">Text fadeIn bottom</h3> */}
                <div class="content">
                  <a href="#" target="_blank">
                    <div class="content-overlay"></div>
                    <img
                      class="content-image"
                      src={nic}
                      style={{ height: "55vh" }}
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Centaurus</h3>
                      <p class="content-text">Deliverd</p>
                    </div>
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            <div class="single-portfolio col-sm-4 all mockup">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                data-aos-duration="2000"
              >
                {/* <h3 class="title">Text fadeIn bottom</h3> */}
                <div class="content">
                  <a href="#" target="_blank">
                    <div class="content-overlay"></div>
                    <img
                      class="content-image"
                      src={sic}
                      style={{ height: "55vh" }}
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">
                        Maroof International Hospital
                      </h3>
                      <p class="content-text">Deliverd</p>
                    </div>
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            <div class="single-portfolio col-sm-4 all mockup">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                data-aos-duration="3000"
              >
                {/* <h3 class="title">Text fadeIn bottom</h3> */}
                <div class="content">
                  <a href="#" target="_blank">
                    <div class="content-overlay"></div>
                    <img
                      class="content-image"
                      src={sip}
                      style={{ height: "55vh" }}
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Silver Oaks</h3>
                      <p class="content-text">Deliverd</p>
                    </div>
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            <div class="single-portfolio col-sm-4 all mockup">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                data-aos-duration="4000"
              >
                {/* <h3 class="title">Text fadeIn bottom</h3> */}
                <div class="content">
                  <a href="#" target="_blank">
                    <div class="content-overlay"></div>
                    <img
                      class="content-image"
                      src={cic}
                      style={{ height: "55vh" }}
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Rhodium Residencia</h3>
                      <p class="content-text">Under Construction</p>
                    </div>
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            <div class="single-portfolio col-sm-4 all mockup">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                data-aos-duration="5000"
              >
                {/* <h3 class="title">Text fadeIn bottom</h3> */}
                <div class="content">
                  <a href="#" target="_blank">
                    <div class="content-overlay"></div>
                    <img
                      class="content-image"
                      src={web}
                      style={{ height: "55vh" }}
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">City Stay</h3>
                      <p class="content-text">Under Construction</p>
                    </div>
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            <div class="single-portfolio col-sm-4 all mockup">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                data-aos-duration="6000"
              >
                {/* <h3 class="title">Text fadeIn bottom</h3> */}
                <div class="content">
                  <a
                    href="https://unsplash.com/photos/HkTMcmlMOUQ"
                    target="_blank"
                  >
                    <div class="content-overlay"></div>
                    <img
                      class="content-image"
                      src={pic}
                      style={{ height: "55vh" }}
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Elaan Square</h3>
                      <p class="content-text">Under Construction</p>
                    </div>
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            <div class="single-portfolio col-sm-4 all mockup mx-auto">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                data-aos-duration="7000"
              >
                {/* <h3 class="title">Text fadeIn bottom</h3> */}
                <div class="content">
                  <a
                    href="https://unsplash.com/photos/HkTMcmlMOUQ"
                    target="_blank"
                  >
                    <div class="content-overlay"></div>
                    <img
                      class="content-image"
                      src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
                      style={{ height: "55vh" }}
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">silver sand</h3>
                      <p class="content-text">Under Construction</p>
                    </div>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Overlay;
