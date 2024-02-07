import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
{
    countries(filter: { continent: { ne: "EU" },  name:{regex: "^T"}}) {
        code
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
    }
}
`

export {
    client,
    LIST_COUNTRIES
};