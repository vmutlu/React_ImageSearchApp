import React from "react";
import axios from "axios";
import Search from "./Search";
import ImageList from "./ImageList";

const apiKey = {
  key: "24970598-5a6c8b1a2ba6a6784e05428c3",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${apiKey.key}&q=${entry}&image_type=photo`
    );

    this.setState({
      images: response.data.hits,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <Search onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
