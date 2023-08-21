import Header from "../Components/Header";
import Body from "../Components/Body";
import { ApolloProvider,ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient ({
  cache: new InMemoryCache(),
  uri: 'https://rickandmortyapi.com/graphql'
});
const Character = () => {
  
  return (
    <ApolloProvider client={client}>
      <Header />
      <Body />
    </ApolloProvider>
  );
};

export default Character;
