import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Pagination from "./Components/Pagination"
import { useQuery } from "@apollo/client"
import {LOAD_CHARACTERS} from './Graphql/Queries'


const App = () => {
  const {data, loading, error } = useQuery(LOAD_CHARACTERS);
  
  if (loading) return <p>Still Loading </p>
  // if (data) console.log (data)
else{console.log(error)}
  return (
    <>
     
      <Nav />
      <Header />
      <Body data={data} randomizeData={true}/> 
      <Pagination />
      <Footer />
      </>
  )
}

export default App;
