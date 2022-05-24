import "../../../styles/header.css";
import Navbar from "../../molecules/Navbar";

function Header() {
  return (
    <section
      className="h-100 w-100"
      style={{ boxSizing: "border-box", backgroundColor: "#141432" }}
    >
      <div
        className="container-xxl mx-auto p-0  position-relative header-2-3"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Navbar />
        <div>
          <div className="mx-auto d-flex flex-lg-row flex-column hero">
            <div className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
              <p className="text-caption">FREE 30 DAY TRIAL</p>
              <h1 className="title-text-big">
                The best way
                <br className=" d-lg-block d-none" /> to organize your online
                learning
              </h1>
              <div className="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
                <button className="btn d-inline-flex mb-md-0 btn-try text-white border-0">
                  Try it free
                </button>
                <button className="btn btn-outline">
                  <div className="d-flex align-items-center">
                    <img
                      className="me-2"
                      src="/assets/icons/play.svg"
                      width={13}
                      height={12}
                    />
                    Watch the video
                  </div>
                </button>
              </div>
            </div>
            <div className="right-column text-center d-flex justify-content-center pe-0">
              <img
                id="img-fluid"
                className="h-auto mw-100"
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
