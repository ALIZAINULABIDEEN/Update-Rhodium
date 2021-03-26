import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import web from "../Image/cen.jpg"
import "../CEO/Ceo.css"
import "../Readme/Readme"
import { NavLink } from 'react-router-dom';
class Ceo extends Component {
    state = {  }
    render() { 
        return ( 
            <>
         <section class="site-section" id="section-about">
<div class="container">
<div class="row mb-5 align-items-center">
<div class="col-lg-5 pl-lg-5">
<div class="section-heading">
<h2>CEO's <strong>Message</strong></h2>
</div>
<p class="lead" style={{color:"wheat"}}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<p class="mb-5"style={{color:"wheat"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<p>
<NavLink to="/Readme" class="btn btn-primary px-4 py-2 btn-sm smoothscroll">Read More</NavLink>
{/* <a href="#" class="btn btn-secondary px-4 py-2 btn-sm">Download CV</a> */}
</p>
</div>
<div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
<img src="https://preview.colorlib.com/theme/rezume/images/image_1.jpg" alt="Image placeholder" class="img-fluid"/>
</div>

</div>
</div>
</section>
            </>
         );
    }
}
 
export default Ceo;