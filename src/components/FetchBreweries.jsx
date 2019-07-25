import React, { Component } from "react";
import axios from "axios";
import Card from "./cardComponent/card";

/**
 * API variable holds the link to the OpenBreweryAPI
 */
const API = 'https://api.openbrewerydb.org/breweries?';
/**
 * This query gather data by city and state for Hanover, PA
 */
const DEFAULT_QUERY = 'by_city=Hanover&by_state=Pennsylvania';

/**
 * A class that fetches Brewery data from OpenBreweryAPI then
 * makes a list of Card objects.
 *
 * @param state The state is set to an array of Brewery objects
 */
class FetchBreweries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweries: []
    };
  }

  /**
   * This function takes an URL and a query and gets data from
   * the API and sets the data to the breweries list.
   */
  componentDidMount() {
    axios.get(API + DEFAULT_QUERY).then(res => {
      console.log(res);
      this.setState({ breweries: res.data });
    });
  }

  /**
   * Uses the data stored in state.breweries and renders a list of
   * Card objects that will use this data as props for its own Component
   */
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
