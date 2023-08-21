import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Pagination from "./Components/Pagination"
import { 
  ApolloClient, 
  InMemoryCache, 
 ApolloProvider,
} from "@apollo/client";

 const client = new ApolloClient ({
    cache: new InMemoryCache(),
    uri: 'https://rickandmortyapi.com/graphql'
  });
  

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Header />
      <Body /> 
      <Pagination />
      <Footer />
      </ApolloProvider>
  )
}

export default App;
