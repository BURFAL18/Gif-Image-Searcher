import React from "react";
import pixabay from "../apis/pixabay";
import tenor from "../apis/tenor";


import ImageList from "./ImageList";
import GifList from "./GifList";

class App extends React.Component {
  state = { results: [], type: "IMAGES"};

 

  onSearchSubmit = async (term, searchType = "IMAGES") => {
    var response = [];
    if (searchType === "IMAGES") {
      response = await pixabay.get("", {
        params: {
          key: "18789879-231187672e9da4d0fc075ff91",
          q: term,
          per_page: 80,
        },
      });
      this.setState({ results: response.data.hits, type: searchType });
    } else {
      response = await tenor.get("/search", {
        params: {
          key: "MDCWA8LM91BG",
          q: term,
          media_filter: "basic",
        },
      });
      this.setState({ results: response.data.results, type: searchType });
    }
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
            <Jumbotron
              onSubmit={this.onSearchSubmit}
              themeToggler={this.themeToggler}
            />
            {this.renderContent()}
          </div>
      
    );
  }
}

export default App;