import React, { Component } from "react";
import axios from "axios";
import Card from "./cardComponent/card";

const API = "https://api.openbrewerydb.org/breweries?";
const DEFAULT_QUERY = "by_city=Hanover&by_state=Pennsylvania";

class FetchBreweries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweries: []
    };
  }

  componentDidMount() {
    axios.get(API + DEFAULT_QUERY).then(res => {
      console.log(res);
      this.setState({ breweries: res.data });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="app-card-list" id="app-card-list">
          {this.state.breweries.map(brewery => (
            <Card
              key={brewery.name.toString()}
              name={brewery.name}
              type={brewery.brewery_type}
              address={
                brewery.street +
                " " +
                brewery.city +
                ", " +
                brewery.state +
                " " +
                brewery.postal_code
              }
              website={brewery.website_url}
              longitude={brewery.longitude}
              latitude={brewery.latitude}
            />
          ))}{" "}
        </div>
      </div>
    );
  }
}

export default FetchBreweries;
