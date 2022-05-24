import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
import "../../styles/home.css";

function Home() {
  return (
    <>
      <Header />
      <section
        className="h-100 w-100"
        style={{
          boxSizing: "border-box",
          backgroundColor: "#141432",
        }}
      >
        <div
          className="content-3-3 container-xxl mx-auto position-relative"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div className="d-flex flex-lg-row flex-column align-items-center">
            <div className="img-hero text-center justify-content-center d-flex">
              <img
                id="hero"
                className="img-fluid"
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-1.png"
                alt=""
              />
            </div>

            <div className="right-column d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
              <h2 className="title-text text-white">3 Keys Benefit</h2>
              <ul style={{ padding: 0, margin: 0 }}>
                <li className="list-unstyled" style={{ marginBottom: "2rem" }}>
                  <h4 className="title-caption text-white d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                    <span className="circle text-white d-flex align-items-center justify-content-center">
                      1
                    </span>
                    Trusted Mentor
                  </h4>
                  <p className="text-caption">
                    We have provided highly experienced mentors
                    <br className="d-sm-inline d-none" />
                    for several years.
                  </p>
                </li>
                <li className="list-unstyled" style={{ marginBottom: "2rem" }}>
                  <h4 className="title-caption text-white d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                    <span className="circle text-white d-flex align-items-center justify-content-center">
                      2
                    </span>
                    Access Forever
                  </h4>
                  <p className="text-caption">
                    Are you busy at work so it's hard to consult? don't
                    <br className="d-sm-inline d-none" />
                    worry because you can access anytime.
                  </p>
                </li>
                <li className="list-unstyled" style={{ marginBottom: "4rem" }}>
                  <h4 className="title-caption text-white d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                    <span className="circle text-white d-flex align-items-center justify-content-center">
                      3
                    </span>
                    Halfpenny
                  </h4>
                  <p className="text-caption">
                    We provide economical packages for those of you
                    <br className="d-sm-inline d-none" />
                    who are still in school or workers.
                  </p>
                </li>
              </ul>
              <button className="btn btn-learn text-white">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
