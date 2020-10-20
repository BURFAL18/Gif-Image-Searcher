import React from "react";

class SearchBar extends React.Component {
  state = {term :''};
  
  onSubmitForm = (event) =>
  {
      event.preventDefault();
      this.props.onSubmit(this.state.term);
  }

  render() {
    return (

      <div className="d-flex container mt-4">
        <form className="input-group" onSubmit={(event)=>this.onSubmitForm(event)}>
          <input
            type="text"
            className="form-control"
            placeholder="Type something.."
            value={this.state.term}
            onChange={(event) => {
              this.setState({ term: event.target.value });
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
