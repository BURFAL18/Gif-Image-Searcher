
import React from "react";
import SearchBar from "./SearchBar";
import Background from "../images/Mountains.jpg";

var jumbotronStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "fixed",
  backgroundRepeat: "no-repeat",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
};

var textStyle = {
  color: "white",
};

class Jumbotron extends React.Component {
  state = { searchType: "IMAGES" };

  render() {
    return (
      <section className="jumbotron text-center" style={jumbotronStyle}>
        <div className="container">
          <h1 className="font-weight-bold" style={textStyle}>
            What do you want to search?
          </h1>
          <p>
            <a
              className="btn btn-primary my-2 "
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
          <SearchBar
            onSubmit={this.props.onSubmit}
            searchType={this.state.searchType}
          />
        </div>
      </section>
    );
  }
}

export default Jumbotron;