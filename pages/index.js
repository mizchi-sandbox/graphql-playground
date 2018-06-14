import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_USER = gql`
  {
    user {
      id
      name
    }
  }
`;

export default () => {
  return (
    <Query query={GET_USER} ssr={true}>
      {props => {
        if (props.loading) {
          return "Loading...";
        }
        return `Hello, ${props.data.user.name} - ${props.data.user.id}`;
      }}
    </Query>
  );
};
