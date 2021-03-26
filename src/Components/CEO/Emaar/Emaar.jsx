import React, { Component } from 'react';
import "../Emaar/Emaar.css"
class Emaar extends Component {
    state = {  }
    render() { 
        return (  
            <>
            <section id="Section-ceo">
            <div className="container mb-5">
                <div className="row">
                <div class="section-heading text-center col-md-12 mt-5 ">
              <h2>
            About <strong>CEO</strong>
              </h2>
            </div>
                    <div className="col-lg-12 content-inner">
                        <div className="section-chairman-intro-inner">
                            <img src="https://cdn.properties.emaar.com/wp-content/uploads/2020/06/chairman-image-1620x740-1-1620x740.png" className="img-fluid" title="chairman-image-1620x740" width="1620" alt="ceo"/>
<div className="about-chairman-intro col-lg-5 col-md-8 col-sm-12">
    <h3>
    "WE ARE SHARPENING OUR STRATEGY TO BE ONE OF THE WORLD'S MOST VALUABLE, MOST INNOVATIVE AND MOST ADMIRED COMPANIES"
    </h3>
    <span className="section-tagline">
    FOUNDER | MOHAMED ALABBAR
    </span>
    <a href="/Readme" className="btn btn-blue">
    Read Founder's Letter
    </a>

</div>
                        </div>

                    </div>

                </div>

            </div>
            </section>
           
            </>
        );
    }
}
 
export default Emaar;