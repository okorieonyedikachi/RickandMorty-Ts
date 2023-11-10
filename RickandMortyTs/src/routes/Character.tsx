import Header from "../Components/Header";
import Body from "../Components/Body";
import { useQuery } from "@apollo/client"
import {LOAD_CHARACTERS} from '../Graphql/Queries'
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";
import { useState } from "react";


const Character = () => {
   const [page, setPage] = useState(1);
  const {data} = useQuery(LOAD_CHARACTERS, {variables:{page}})
  if (!data) {
    return null
  }
  const characters = data?.characters?.results;
 
  


  return (
    <>
      <Header />
      <Body data={characters} isHomescreen={false} />
      <Pagination page={page} setPage = {setPage} />
     
      <Footer />
    </>
  );
};

export default Character;
