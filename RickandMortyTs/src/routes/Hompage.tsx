import Nav from "../Components/Nav"
import Header from "../Components/Header"
import Body from "../Components/Body"
import Pagination from "../Components/Pagination"
import Footer from "../Components/Footer"
import { useQuery } from "@apollo/client"
import {LOAD_CHARACTERS} from '../Graphql/Queries'
import { 
    ApolloClient, 
    InMemoryCache, 
   ApolloProvider,
  } from "@apollo/client";



  const client = new ApolloClient ({
    cache: new InMemoryCache(),
    uri: 'https://rickandmortyapi.com/graphql'
  });
  
 

const Hompage = () => {
    

    const {data } = useQuery(LOAD_CHARACTERS);
    console.log(data)

   
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

export default Hompage;