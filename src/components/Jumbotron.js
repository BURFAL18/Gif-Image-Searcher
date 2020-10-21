import React from "react";
import SearchBar from "./SearchBar";
import Background from "../images/Forest.jpg";

var jumbotronStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPositon:"fixed"

};

var textStyle = {
  color: "white",
};

class Jumbotron extends React.Component {
  state = { searchType: "IMAGES" };

  render() {
    return (
      <div>
        <nav class="navbar justify-content-end">
          <i className="fas fa-moon" onClick={this.props.themeToggler}></i>
        </nav>
        <section className="jumbotron text-center mb-3" style={jumbotronStyle}>
          <div className="container">
            <h1 className="font-weight-bold" style={textStyle}>
              What do you want to search?
            </h1>
            <p>
              <a
                className="btn btn-primary my-2"
                onClick={() => this.setState({ searchType: "IMAGES" })}
              >
                Images
              </a>
              <a
                className="btn btn-secondary my-2"
                onClick={() => this.setState({ searchType: "GIFS" })}
              >
                Gifs
              </a>
            </p>
            <div></div>
            <SearchBar
              onSubmit={this.props.onSubmit}
              searchType={this.state.searchType}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Jumbotron;