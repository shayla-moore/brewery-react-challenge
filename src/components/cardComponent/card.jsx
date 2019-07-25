import React, { Component } from "react";
import CardHeader from "./cardHeaderComponent/cardHeader";
import CardBody from "./cardBodyComponent/cardBody";

/**
 * This class creates a card object and passes information to a 
 * collapsible CardBody component within it.
 */
class Card extends Component {
  render() {
    return (
      <article className="card">
        <CardHeader />

        <div className="card-body">
          <div className="card-title">{this.props.name}</div>

          <CardBody
            name={this.props.name}
            type={this.props.type}
            address={this.props.address}
            website={this.props.website}
            latitude={this.props.latitude}
            longitude={this.props.longitude}
          />
        </div>
      </article>
    );
  }
}

export default Card;
