import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardBody extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="cart">
        <button className="btn btn--with-icon" onClick={this.toggle.bind(this)}>
          <i />
          Find Out More
        </button>
        <div id="demo" className={"collapse" + (this.state.open ? " in" : "")}>
          <div>
            <li>Type: {this.props.type}</li>
            <li>Address: {this.props.address}</li>
            <li>
              Website:{" "}
              <a
                href={this.props.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/map",
                  state: {
                    longitude: this.props.longitude,
                    latitude: this.props.latitude
                  }
                }}
              >
                Find this Brewery on a Map
              </Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBody;
