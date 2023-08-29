import Header from "../Components/Header";
import Body from "../Components/Body";
import { useQuery } from "@apollo/client"
import {LOAD_CHARACTERS} from '../Graphql/Queries'
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";


const Character = () => {
  const {data} = useQuery(LOAD_CHARACTERS);
  console.log(data)
  console.log("data")
  if (data) console.log (data.characters.results)
  return (
    <>
      <Header />
      <Body data={data} />
      <Pagination />
      <Footer/>
    </>
  );
};

export default Character;
