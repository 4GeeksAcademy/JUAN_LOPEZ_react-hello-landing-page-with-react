import React from "react";

// Navbar

const Navabar = () => {
  return (
    // etiqueta raiz
    <div>
      {/* Comienzo del navbar */}
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand text-light" href="#">
              Start Bootstrap
            </a>
          </div>
          <div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Link
                  </a>
                </li>
                <li>
                  <a className="nav-link text-white" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" aria-disabled="true">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navabar;
