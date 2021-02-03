import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
    searchType: "IMAGES",
    index: 0,
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term, this.state.searchType);
  };

  render() {
    return (
      <div className="d-flex container mt-4">
        <form class="input-group" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Type something.."
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
            class="form-control mr-lg-2"
            aria-label="Search"
          />
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.searchType}
            </button>

            <div class="dropdown-menu">
              <a
                class={`dropdown-item ${
                  this.state.index === 0 ? "active" : ""
                }`}
                onClick={() =>
                  this.setState({ index: 0, searchType: "IMAGES" })
                }
              >
                Images
              </a>
              <a
                class={`dropdown-item ${
                  this.state.index === 1 ? "active" : ""
                }`}
                onClick={() => this.setState({ index: 1, searchType: "GIFS" })}
                onSubmit={this.props.onSubmit}
              >
                Gifs
              </a>
            </div>
          </div>

          <button className="btn btn-primary">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
