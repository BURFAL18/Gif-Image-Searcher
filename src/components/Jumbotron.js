import React from "react";
import SearchBar from "./SearchBar";
import Background from "../images/Mountains.jpg";

var jumbotronStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPositionY: "-300px",
};

var textStyle = {
  color: "white",
};

const Jumbotron =() => {
  return (
    <section className="jumbotron text-center" style={jumbotronStyle}>
      <div className="container">
        <h1 className="font-weight-bold" style={textStyle}>
          What do you want to search?
        </h1>
        <p>
          <a className="btn btn-primary my-2">Images</a>
          <a className="btn btn-secondary my-2">Gifs</a>
        </p>
        <SearchBar/>
      </div>
    </section>
  );
};

export default Jumbotron;
