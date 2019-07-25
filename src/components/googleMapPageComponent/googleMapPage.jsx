import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { NavLink } from "react-router-dom";
import Header from "../headerComponent/header";
const GOOGLE_API_KEY = "AIzaSyBziNyl5u9MpTP7QvfgcpHI_pb-rWNJMZc";

class GoogleMapPage extends Component {
  render() {
    const { longitude } = this.props.location.state;
    const { latitude } = this.props.location.state;

    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    return (
      <div>
        <Header />
        <header className="back-to-main-block">
          <NavLink className="back-to-main-text" to="/">
            Click to Go Back to Main Page
          </NavLink>
        </header>
        {longitude == null && latitude == null && (
          <header className="map-error-block">
            <div className="error-text">
              The map info pulled from the OpenBreweryAPI does not exist for
              this Brewery.
            </div>
          </header>
        )}

        <Map
          google={this.props.google}
          zoom={11}
          style={mapStyles}
          initialCenter={{ lat: latitude, lng: longitude }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(GoogleMapPage);
