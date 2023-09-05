import { gql } from "@apollo/client";

export const LOAD_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        status
        image
        species
        gender
        origin {
          name
        }
        episode {
            id
        }
      }
    }
  }
`;

export const LOAD_EPISODES = gql`
  query {
    episodes {
      results {
        name
        episode
        air_date
        created
      }
    }
  }
`;
