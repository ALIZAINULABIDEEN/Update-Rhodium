import React, { Component } from "react";
import "../Components/Navbar.css";
import About from "./About";
import Contact from "../Components/Contact";
import Ourprojects from "./Ourprojects";
import Resume from "./Resume";
import Footer from "./Footer";
import ScrollAnimation from 'react-animate-on-scroll';

import pic from "../Components/Image/logo.png"
import Ceo from "./CEO/Ceo";
import Whowe from "./Whowe/Whowe";
import Emaar from "./CEO/Emaar/Emaar";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        

        <section class="site-hero" id="section-home">
        <nav
          className="navbar navbar-expand-lg site-navbar navbar-light  "
          id="pb-navbar"
        >
          <div class="container-fluid   ">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-md-center"
              id="navbarsExample09"
            >
             
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#section-home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#section-about">
                    About
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#Section-ceo">
                  
                    About CEO
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#section-blog">
                    Projects
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#section-portfolio">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#section-resume">
                    Who We Are
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link" href="#section-resume">
                    Resume
                  </a>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link" href="#section-contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          <div class="container">
            <div class="row intro-text align-items-center justify-content-center">
              <div class="col-md-10 text-center pt-5">
                
            {/* <div className="logo">
                <img src={pic} alt=""
                className="img-fluid"
                style={{float:"left", height:"60px"}}
                />

              </div> */}
 <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
<img src={pic} alt=""
                className="img-fluid"
                style={{ height:"60px"}}
                />
                </ScrollAnimation>
                <h1 class="site-heading site-animate">
                  Welecome to <strong class="d-block">Silver Oaks</strong>
                </h1>
                <strong class="d-block text-white text-uppercase letter-spacing">
                  {/* and this is My Rezume */}
                </strong>
              </div>
            </div>
          </div>
        </section>
        <Resume />
       
        {/* <Ceo/> */}
        <Ourprojects />
        <About />
        <Whowe/>
        <Emaar/>
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Navbar;
