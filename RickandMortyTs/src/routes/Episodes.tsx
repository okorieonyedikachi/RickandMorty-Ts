// import Header from "../Components/Header"
// import Body from "../Components/Body"

import Header from "../Components/Header"
// import { useQuery } from "@apollo/client"
// import { LOAD_EPISODES } from "../Graphql/Queries";
import EpisodeBody from "../Components/EpisodeBody";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

const Episodes = () => {
  // const {data } = useQuery(LOAD_EPISODES);
  return (
    <>
        <Header />
        <EpisodeBody />
        <Pagination />
        <Footer />
    </>
  )
}

export default Episodes