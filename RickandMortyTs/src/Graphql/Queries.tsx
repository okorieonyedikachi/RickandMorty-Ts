import { gql } from "@apollo/client";

export const LOAD_CHARACTERS = gql `
    query {
        characters {
            results {
                name
            }
        }
    }
`
console.log(LOAD_CHARACTERS)