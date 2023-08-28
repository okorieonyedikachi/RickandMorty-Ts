import { gql } from "@apollo/client";

export const LOAD_CHARACTERS = gql `
    query {
        characters {
            results {
                name
                status
                image
            }
        }
    }
`

export const LOAD_EPISODES = gql `
    query {
        episodes{
        results{
        id
        name
        air_date
        }
        
        }
  
    }
`