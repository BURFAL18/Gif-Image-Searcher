import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term, this.props.searchType);
  };

  render() {
    return (
      <div className="d-flex container mt-4">
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Type something.."
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          />

          <button className="btn btn-primary">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;