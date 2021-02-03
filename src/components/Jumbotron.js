import React from "react";
import SearchBar from "./SearchBar";
import Background from "../images/nasa_bg.jpg";

var jumbotronStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "fixed",
};

var textStyle = {
  color: "white",
};

class Jumbotron extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar justify-content-end">
          <i className="fas fa-moon" onClick={this.props.themeToggler}></i>
        </nav>
        <div style={{ paddingBottom: "2rem" }}>
          <div class="jumbotron jumbotron-fluid" style={jumbotronStyle}>
            <div className="container">
              <h1 class="display-4" style={textStyle}>
                What do you want to search?
              </h1>
              <p class="lead">
                <SearchBar onSubmit={this.props.onSubmit} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
