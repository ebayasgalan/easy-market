import React, { Component } from "react";
import gql from "graphql-tag";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

class SingleItem extends Component {
  render() {
    return <p>This is single item component</p>;
  }
}

export default SingleItem;
