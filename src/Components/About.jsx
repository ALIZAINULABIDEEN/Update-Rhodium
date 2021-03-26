import React, { Component } from "react";
import "../Components/About.css";
import web from "../Components/Image/rhod.png"
import pic from "../Components/Image/elan.jpg"
import nic from "../Components/Image/cen.jpg"
import cic from "../Components/Image/rod.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import Overlay from "../Overlay/Overlay";
class About extends Component {
  state = {};
  render() {
    return (
      <>

    
        <div class="container site-section pb-0" id="section-portfolio">
          
            <div class="section-heading text-center col-md-12">
              <h2>
                Featured <strong>Portfolio</strong>
              </h2>
            </div>
            <Overlay/>
     
          <div class="filters">
            {/* <ul>
<li class="active" data-filter="*">All</li>
<li data-filter=".packaging">Packaging</li>
<li data-filter=".mockup">Mockup</li>
<li data-filter=".typography">Typography</li>
<li data-filter=".photography">Photography</li>
</ul> */}
          </div>
         
        </div>
     
        
      </>
      
    );
  }
}

export default About;
