import React, { Component } from "react";
import "../Whowe/Whowe.css";
import { NavLink } from "react-router-dom";
import Readme from "../Readme/Readme";
import {Link} from "react-router-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
class Whowe extends Component {
  render() {
    return (
      <>
        <section class="site-section p-0" id="section-resume">
          <div class="container">
            <div class="row">
              <div class="col-md-12 mb-5">
                <div class="section-heading text-center">
                  <h2>
                    WHO WE<strong> ARE</strong>
                  </h2>
                </div>
              </div>
              <div class="col-md-6">
                {/* <h2 class="mb-5">Education</h2> */}
                <div class="resume-item mb-4">
                  {/* <span class="date"><span class="icon-calendar"></span> March 2013 - Present</span> */}
                  <h3>BOARD OF DIRECTORS</h3>
                  <p style={{ color: "white" }}>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <Link
                    type="button"
                    class="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                    to="/bog"
                  >
                    Learn More
                  </Link>
                  <div class="modal" id="myModal">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title">Modal Heading</h1>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                          >
                            ×
                          </button>
                        </div>



                        <div class="modal-body">
                          <h3>Some text to enable scrolling..</h3>
                          <p style={{textAlign:"justify"}}>
                            Some text to enable scrolling.. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                          </p>
                          <p style={{textAlign:"justify"}}>
                            Some text to enable scrolling.. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                          </p>

                          <p style={{textAlign:"justify"}}>
                            Some text to enable scrolling.. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                          </p>
                        </div>
                        

                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button id="b1" onClick={this.try} class="btn btn-primary px-4 py-2 btn-sm smoothscroll">Click me</button> */}
                  {/* <NavLink
                    to="/Readme"
                    class="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                  >
                    Learn More
                  </NavLink> */}
                </div>
              </div>
              <div class="col-md-6">
                <div class="resume-item mb-4">
                  {/* <span class="date"><span class="icon-calendar"></span> March 2013 - Present Deacember.</span> */}
                  <h3>Masteral in Information Technology</h3>
                  <p style={{ color: "white" }}>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <button
                    type="button"
                    class="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                    data-toggle="modal"
                    data-target="#myModal1"
                  >
                    Learn More
                  </button>
                  <div class="modal" id="myModal1">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title">Modal Heading</h1>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                          >
                            ×
                          </button>
                        </div>

                        <div class="modal-body">
                          <h3>Some text to enable scrolling..</h3>
                       
                          <p>
                            Some text to enable scrolling.. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                          </p>

                          <p>
                            Some text to enable scrolling.. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                          </p>
                        </div>

                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div class="resume-item mb-4">
<span class="date"><span class="icon-calendar"></span> March 2013 - Present</span>
<h3>Masteral in Information Technology</h3>
<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
<span class="school">New York University</span>
</div>
<div class="resume-item mb-4">
<span class="date"><span class="icon-calendar"></span> March 2013 - Present Deacember.</span>
<h3>Masteral in Information Technology</h3>
<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
<span class="school">New York University</span>
</div>
</div>
<div class="col-md-6">
<h2 class="mb-5">Experience</h2>
<div class="resume-item mb-4">
<span class="date"><span class="icon-calendar"></span> March 2013 - Present</span>
<h3>Lead Product Designer</h3>
<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
<span class="school">Github</span>
</div>
<div class="resume-item mb-4">
<span class="date"><span class="icon-calendar"></span> March 2013 - Present</span>
<h3>Lead Product Designer</h3>
<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
<span class="school">Facebook</span>
</div>
<div class="resume-item mb-4">
<span class="date"><span class="icon-calendar"></span> March 2013 - Present</span>
<h3>Lead Product Designer</h3>
<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
<span class="school">Twitter</span>
</div>
<div class="resume-item mb-4">
<span class="date"><span class="icon-calendar"></span> March 2013 - Present</span>
<h3>Lead Product Designer</h3>
<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
<span class="school">Shopify</span>
</div> */}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Whowe;
