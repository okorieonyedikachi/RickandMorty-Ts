import Header from "../Components/Header";
import Body from "../Components/Body";
import { useQuery } from "@apollo/client"
import {LOAD_CHARACTERS} from '../Graphql/Queries'


const Character = () => {
  const {data } = useQuery(LOAD_CHARACTERS);
  console.log(data)
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default Character;
