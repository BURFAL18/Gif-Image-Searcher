import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            GIS
          </a>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  About US
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More Projects
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    class="dropdown-item"
                    href="https://burfal18.github.io/Atsuko-Store/"
                  >
                    ATSUKO : CLOTH SHOP
                  </a>

                  <a
                    class="dropdown-item"
                    href="https://github.com/BURFAL18/BitPrice/"
                  >
                    BIT COIN PRICE APP
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
