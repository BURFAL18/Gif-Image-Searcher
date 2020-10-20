import React from "react";

class SearchBar extends React.Component {
  state = {};
  render() {
    return (
      <div className="d-flex container mt-4">
        <div className="input-group">
          <input type="text" className="form-control" />
          <button className="btn btn-primary">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
