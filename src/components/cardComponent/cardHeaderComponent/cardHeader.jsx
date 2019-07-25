import React, { Component } from "react";

class CardHeader extends Component {
  render() {
    //Free Stock Photo
    const image =
      "https://images.pexels.com/photos/1638349/pexels-photo-1638349.jpeg";

    var style = {
      backgroundImage: "url(" + image + ")"
    };

    return <header style={style} id={image} className="card-header" />;
  }
}

export default CardHeader;
