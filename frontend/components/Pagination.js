import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import Link from "next/link";
import Error from "./ErrorMessage";
import PaginationStyles from "./styles/PaginationStyles";
import { perPage } from "../config";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, error, loading }) => {
      if (error) return <Error error={error} />;
      if (loading) return <p>Loading...</p>;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = props.page;
      return (
        <PaginationStyles>
          <Head>
            <title>
              Easy Market! Page {page} of {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: "items",
              query: { page: page - 1 }
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              Previous
            </a>
          </Link>
          <p>
            page {props.page} of {pages}
          </p>
          <p>{count} items total</p>
          <Link
            prefetch
            href={{
              pathname: "items",
              query: { page: page + 1 }
            }}
          >
            <a className="next" aria-disabled={page >= pages}>
              Next
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
