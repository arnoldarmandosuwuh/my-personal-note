function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a href="#">
        <img
          style={{ marginRight: "0.75rem" }}
          src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-3.png"
          alt=""
        />
      </a>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#targetModal-item"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="modal-item modal fade"
        id="targetModal-item"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="targetModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content border-0"
            style={{ backgroundColor: "#141432" }}
          >
            <div
              className="modal-header border-0"
              style={{ padding: "2rem", paddingBottom: 0 }}
            >
              <a className="modal-title" id="targetModalLabel">
                <img
                  style={{ marginTop: "0.5rem" }}
                  src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-3.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="close btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{ padding: "2rem", paddingTop: 0, paddingBottom: 0 }}
            >
              <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#" style={{ color: "#E7E7E8" }}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="modal-footer border-0 gap-3"
              style={{ padding: "2rem", paddingTop: "0.75rem" }}
            >
              <button className="btn btn-default btn-no-fill">Log In</button>
              <button className="btn btn-fill border-0 text-white">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#" style={{ color: "#E7E7E8" }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Feature
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <div className="gap-3">
          <button className="btn btn-default btn-no-fill">Log In</button>
          <button className="btn btn-fill text-white border-0">Try Now</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
