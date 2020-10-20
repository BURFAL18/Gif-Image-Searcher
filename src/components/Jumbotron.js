import React from "react";
import SearchBar from "./SearchBar";
import Background from "../images/Mountains.jpg";

var style = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
};

const Jumbotron = () => {
  return (
    <section className="jumbotron text-center">
      <div className="container" style={style}>
        <h1>What do you want to search?</h1>
        <p>
          <a className="btn btn-primary my-2">Images</a>
          <a className="btn btn-secondary my-2">Gifs</a>
        </p>
        <SearchBar />
      </div>
    </section>
  );
};

export default Jumbotron;
