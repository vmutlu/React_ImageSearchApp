import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }

  onInputChange(event) {
    this.setState({ entry: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                onChange={(event) => this.onInputChange(event)}
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
