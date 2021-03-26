import React, { Component } from 'react';
import Readme from "..//Readme/Readme"
import "../New/New.css"
import ScrollAnimation from 'react-animate-on-scroll';

import pic from "../Image/logo.png"

class New extends Component {
    state = {  }
    render() { 
        return (  
            <>

{/*  */}
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
                <li class="nav-item">
                  <a class="nav-link" href="#section-contact">
                    Contact us 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
{/*  */}
    </>
        );

        }
}
 
export default New;