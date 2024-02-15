import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
  {
      countries(filter: { continent: { ne: "EU" }}) {
          continent{
            name
          }
          name
          code
          native
          capital
          emoji
          currency
          phone
          awsRegion
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