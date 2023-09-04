import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Pagination from "./Components/Pagination"
import { useQuery } from "@apollo/client"
import {LOAD_CHARACTERS} from './Graphql/Queries'


const App = () => {
  const {data} = useQuery(LOAD_CHARACTERS);
  if (!data) {
    return null
  }
  const homeCharac = data?.characters?.results;
  // console.log(typeof [homeCharac]);
  
  return (

    <>
     
      <Nav />
      <Header />
      <Body data={homeCharac} isHomescreen = {true} /> 
      <Pagination />
      <Footer />
      </>
  )
}

export default App;
