import React, { Component } from "react";
import Downshift from "downshift";
import Router from "next/router";
import gql from "graphql-tag";
import debounce from "lodash.debounce";
import { ApolloConsumer } from "react-apollo";
import { DropDown, DropDownItem, SearchStyles } from "./styles/DropDown";

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: { title_contains: $searchTerm, description_contains: $searchTerm }
    )
  }
`;

class Search extends Component {
  render() {
    return (
      <SearchStyles>
        <div>
          <input type="search" />
        </div>
        <DropDown>
          <p>Items will go here</p>
        </DropDown>
      </SearchStyles>
    );
  }
}

export default Search;
