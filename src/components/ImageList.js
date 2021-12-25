import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img
        key={image.id}
        style={{ width: "220px", height: "220px", marginRight: "2px" }}
        src={image.webformatURL}
      ></img>
    );
  });
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      {images}
    </div>
  );
};

export default ImageList;
