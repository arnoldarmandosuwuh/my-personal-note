import "../../../styles/footer.css";

function Footer() {
  return (
    <section
      className="h-100 w-100"
      style={{ boxSizing: "border-box", backgroundColor: "#141432" }}
    >
      <div
        className="footer-2-3 container-xxl mx-auto position-relative p-0"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="list-footer">
          <div className="row gap-md-0 gap-3">
            <div className="col-lg-3 col-md-6">
              <div className="">
                <div className="list-space">
                  <img
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-3.png"
                    alt=""
                  />
                </div>
                <nav className="list-unstyled">
                  <li className="list-space">
                    <a href="" className="list-menu">
                      Home
                    </a>
                  </li>
                  <li className="list-space">
                    <a href="" className="list-menu">
                      About
                    </a>
                  </li>
                  <li className="list-space">
                    <a href="" className="list-menu">
                      Features
                    </a>
                  </li>
                  <li className="list-space">
                    <a href="" className="list-menu">
                      Pricing
                    </a>
                  </li>
                  <li className="list-space">
                    <a href="" className="list-menu">
                      Testimonial
                    </a>
                  </li>
                  <li className="list-space">
                    <a href="" className="list-menu">
                      Help
                    </a>
                  </li>
                </nav>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h2 className="footer-text-title text-white">Product</h2>
              <nav className="list-unstyled">
                <li className="list-space">
                  <a href="" className="list-menu">
                    Real Time Analytic
                  </a>
                </li>
                <li className="list-space">
                  <a href="" className="list-menu">
                    Easy to Operate
                  </a>
                </li>
                <li className="list-space">
                  <a href="" className="list-menu">
                    Full Secured
                  </a>
                </li>
                <li className="list-space">
                  <a href="" className="list-menu">
                    Analytic Tool
                  </a>
                </li>
                <li className="list-space">
                  <a href="" className="list-menu">
                    Story
                  </a>
                </li>
              </nav>
            </div>
            <div className="col-lg-3 col-md-6">
              <h2 className="footer-text-title text-white">Company</h2>
              <nav className="list-unstyled">
                <li className="list-space">
                  <a href="" className="list-menu">
                    Contact Us
                  </a>
                </li>
                <li className="list-space">
                  <a href="" className="list-menu">
                    Blog
                  </a>
                </li>
                <li className="list-space">
                  <a href="" className="list-menu">
                    Culture
                  </a>
                </li>
                <li className="list-space">
                  <a href="" className="list-menu">
                    Security
                  </a>
                </li>
              </nav>
            </div>
            <div className="col-lg-3 col-md-6">
              <h2 className="footer-text-title text-white">Support</h2>
              <nav className="list-unstyled">
                <li className="list-space">
                  <a href="" className="list-menu">
                    Getting Started
                  </a>
                </li>
                <li className="list-space">
                  <a href="" className="list-menu">
                    Help Center
                  </a>
                </li>
                <li className="list-space">
                  <a href="" className="list-menu">
                    Server Status
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="border-color info-footer">
          <div className="">
            <hr className="hr" />
          </div>
          <div className="mx-auto d-flex flex-column flex-lg-row align-items-center footer-info-space gap-4">
            <div className="d-flex title-font font-medium align-items-center gap-4">
              <a href="">
                <img
                  className="social-media-c social-media-left"
                  width={30}
                  height={30}
                  src="/assets/icons/facebook-icon.svg"
                />
              </a>
              <a href="">
                <img
                  className="social-media-c"
                  width={30}
                  height={30}
                  src="/assets/icons/twitter-icon.svg"
                />
              </a>
              <a href="">
                <img
                  className="social-media-p"
                  width={30}
                  height={30}
                  src="/assets/icons/instagram-icon.svg"
                />
              </a>
              <a href="">
                <img
                  className="social-media-c"
                  width={30}
                  height={30}
                  src="/assets/icons/web-icon.svg"
                />
              </a>
            </div>
            <nav className="mx-auto d-flex flex-wrap align-items-center justify-content-center gap-4">
              <a
                href=""
                className="footer-link"
                style={{ textDecoration: "none" }}
              >
                Terms of Service
              </a>
              <span>|</span>
              <a
                href=""
                className="footer-link"
                style={{ textDecoration: "none" }}
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href=""
                className="footer-link"
                style={{ textDecoration: "none" }}
              >
                Licenses
              </a>
            </nav>
            <nav className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
              <p style={{ margin: 0 }}>Copyright © 2021 Analystic Max</p>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
