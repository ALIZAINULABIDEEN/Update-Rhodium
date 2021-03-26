import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer class="site-footer" style={{backgroundColor:"#1B1B1B"}}>
          <div class="container">
            <div class="row">
              <p class="col-12 text-center" style={{ color: "white" }}>
                Copyright &copy;{""}
                <script
                  data-cfasync="false"
                  src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                ></script>
                <script>document.write(new Date().getFullYear());</script>{" All Rights Reserved"}
                <i class="icon-heart text-danger" aria-hidden="true"></i>{" "}
                <a
                  href="https://sharkpink.com"
                  target="_blank"
                  // class="text-primary"
                  style={{color:"#ed2991", textDecoration:"underline"}}
                    >SHARK PINK</a>
              </p>
            </div>
            {/* <div class="row mb-5">
<div class="col-md-12 text-center">
<p>
<a href="#" class="social-item"><span class="icon-facebook2"></span></a>
<a href="#" class="social-item"><span class="icon-twitter"></span></a>
<a href="#" class="social-item"><span class="icon-instagram2"></span></a>
<a href="#" class="social-item"><span class="icon-linkedin2"></span></a>
<a href="#" class="social-item"><span class="icon-vimeo"></span></a>
</p>
</div>
</div> */}
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
