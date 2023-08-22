import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Pagination from "./Components/Pagination"
import { useQuery } from "@apollo/client"
import {LOAD_CHARACTERS} from './Graphql/Queries'


const App = () => {
  const {data } = useQuery(LOAD_CHARACTERS);
  console.log(data)
  return (
    <>
     
      <Nav />
      <Header />
      <Body /> 
      <Pagination />
      <Footer />
      </>
  )
}

export default App;
