// import { useQuery } from "@apollo/client"
// import {LOAD_CHARACTERS} from '../Graphql/Queries'

const Body = () => {
  // const {data } = useQuery(LOAD_CHARACTERS);
  // console.log(data)
  return (
    <div className="h-fit bg-zinc-800 py-6 flex justify-center">
      <div className="character-container h-100 w-3/4 flex flex-row flex-wrap 
          justify-between  max-[480px]:flex-col  max-[480px]:content-center">
        <article className="bg-[#3C3E44] h-48 w-5/12 rounded-lg m-2 flex max-[800px]:h-fit max-[480px]:flex-col 
          max-[480px]:w-9/12 max-[480px]:justify-content-center">
          <div className="img-wrapper w-2/5 h-full max-[480px]:w-full">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/38.jpeg"
              alt="Beth"
              className="h-full rounded-l-lg max-[480px]:rounded-r-lg "
            ></img>
          </div>
          <div id="content-wrapper" 
            className=" w-3/5 rounded-r-lg px-6 py-2 max-[480px]:w-full">
            <div className="mb-2.5">
              <p className="text-zinc-100">Beth Smith</p>
              <span className="text-sm text-zinc-100 w-full">
                <span id="status_icon"></span>
                "Alive" "-" "Human"
              </span>
            </div>
            <div className="mb-2.5">
              <span className="text-sm text-gray-900">
                Last known Location:
              </span>
              <p className="text-zinc-100">Earth(C-137)</p>
            </div>
            <div className="mb-2.5">
              <span className="text-gray-900 text-sm">First seen in:</span>
              <p className="text-zinc-100">Pilot</p>
            </div>
          </div>
        </article>
        <article className="bg-[#3C3E44] h-48 w-5/12 rounded-lg m-2 flex max-[800px]:h-fit max-[480px]:flex-col 
            max-[480px]:w-9/12 max-[480px]:justify-content-center">
          <div className="img-wrapper w-2/5 h-full max-[480px]:w-full">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/38.jpeg"
              alt="Beth"
              className="h-full rounded-l-lg max-[480px]:rounded-r-lg "
            ></img>
          </div>
          <div id="content-wrapper" 
            className=" w-3/5 rounded-r-lg px-6 py-2 max-[480px]:w-full">
            <div className="mb-2.5">
              <p className="text-zinc-100">Beth Smith</p>
              <span className="text-sm text-zinc-100 w-full">
                <span id="status_icon"></span>
                "Alive" "-" "Human"
              </span>
            </div>
            <div className="mb-2.5">
              <span className="text-sm text-gray-900">
                Last known Location:
              </span>
              <p className="text-zinc-100">Earth(C-137)</p>
            </div>
            <div className="mb-2.5">
              <span className="text-gray-900 text-sm">First seen in:</span>
              <p className="text-zinc-100">Pilot</p>
            </div>
          </div>
        </article>
        <article className="bg-[#3C3E44] h-48 w-5/12 rounded-lg m-2 flex max-[800px]:h-fit max-[480px]:flex-col max-[480px]:w-9/12 max-[480px]:justify-content-center">
          <div className="img-wrapper w-2/5 h-full max-[480px]:w-full">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/38.jpeg"
              alt="Beth"
              className="h-full rounded-l-lg max-[480px]:rounded-r-lg "
            ></img>
          </div>
          <div id="content-wrapper" 
            className=" w-3/5 rounded-r-lg px-6 py-2 max-[480px]:w-full">
            <div className="mb-2.5">
              <p className="text-zinc-100">Beth Smith</p>
              <span className="text-sm text-zinc-100 w-full">
                <span id="status_icon"></span>
                "Alive" "-" "Human"
              </span>
            </div>
            <div className="mb-2.5">
              <span className="text-sm text-gray-900">
                Last known Location:
              </span>
              <p className="text-zinc-100">Earth(C-137)</p>
            </div>
            <div className="mb-2.5">
              <span className="text-gray-900 text-sm">First seen in:</span>
              <p className="text-zinc-100">Pilot</p>
            </div>
          </div>
        </article>
        <article className="bg-[#3C3E44] h-48 w-5/12 rounded-lg m-2 flex max-[800px]:h-fit max-[480px]:flex-col max-[480px]:w-9/12 max-[480px]:justify-content-center">
          <div className="img-wrapper w-2/5 h-full max-[480px]:w-full">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/38.jpeg"
              alt="Beth"
              className="h-full rounded-l-lg max-[480px]:rounded-r-lg "
            ></img>
          </div>
          <div id="content-wrapper" 
            className=" w-3/5 rounded-r-lg px-6 py-2 max-[480px]:w-full">
            <div className="mb-2.5">
              <p className="text-zinc-100">Beth Smith</p>
              <span className="text-sm text-zinc-100 w-full">
                <span id="status_icon"></span>
                "Alive" "-" "Human"
              </span>
            </div>
            <div className="mb-2.5">
              <span className="text-sm text-gray-900">
                Last known Location:
              </span>
              <p className="text-zinc-100">Earth(C-137)</p>
            </div>
            <div className="mb-2.5">
              <span className="text-gray-900 text-sm">First seen in:</span>
              <p className="text-zinc-100">Pilot</p>
            </div>
          </div>
        </article>
      </div>
    </div>
    
  );
};

export default Body;

// max-[480px]:justify-self-auto