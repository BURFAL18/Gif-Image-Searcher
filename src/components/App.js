import React from "react";
import unsplash from "../apis/unsplash";
import tenor from "../apis/tenor";
import Jumbotron from "./Jumbotron";
import ImageList from "./ImageList";
import GifList from "./GifList";

class App extends React.Component {
  state = { results: [], type: "IMAGES" };

  onSearchSubmit = async (term, searchType = "IMAGES") => {
    var response = [];
    if (searchType === "IMAGES") {
      response = await unsplash.get("/search/photos", {
        params: {
          query: term,
        },
      });
    } else {
      response = await tenor.get("/search", {
        params: {
          key: "MDCWA8LM91BG",
          q: term,
          media_filter: "basic",
        },
      });
    }
    this.setState({ results: response.data.results, type: searchType });
  };

  renderContent() {
    if (this.state.type === "IMAGES") {
      return (
        <div>
          <ImageList results={this.state.results} />
        </div>
      );
    } else {
      return (
        <div>
          <GifList results={this.state.results} />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Jumbotron onSubmit={this.onSearchSubmit} />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;