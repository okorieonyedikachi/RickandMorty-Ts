// type BodyProps = {
//     name: string
//     image: string
//     status: string

// }

const Body = () => {
  return (
    <div className="h-auto bg-zinc-800 py-6 flex justify-center">
      <div className="h- w-3/4 flex flex-row flex-wrap justify-between">
        <article className="bg-[#3C3E44] h-48 w-5/12 rounded-lg m-2 flex">
          <div className="img-wrapper w-2/5 h-full">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/38.jpeg" alt="Beth"
              className="h-full rounded-l-lg"
            ></img>
          </div>
          <div
            id="content-wrapper"
            className=" w-3/5 rounded-r-lg px-6 py-2"
          >
            <div className="mb-2.5">
              <p className="text-zinc-100">Beth Smith</p>
              <span className="text-sm text-zinc-100">
                <span id="status_icon"></span>
                "Alive" "-" "Human"
              </span>
            </div>
            <div className="mb-2.5">
              <span className="text-sm text-gray-900">Last known Location:</span>
              <p className="text-zinc-100">Earth(C-137)</p>
            </div>
            <div className="mb-2.5">
              <span className="text-gray-900 text-sm">First seen in:</span>
              <p className="text-zinc-100">Pilot</p>
            </div>
          </div>
        </article>
        <article className="bg-[#3C3E44] h-48 w-5/12 rounded-lg m-2 flex">
          <div className="img-wrapper w-2/5 h-full">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/135.jpeg"
              className="h-full rounded-l-lg"
            ></img>
          </div>
          <div
            id="content-wrapper"
            className=" w-3/5 rounded-r-lg px-6 py-2"
          >
            <div className="mb-2.5">
              <p className="text-zinc-100">Beth Smith</p>
              <span className="text-sm text-zinc-100">
                <span id="status_icon"></span>
                "Alive" "-" "Human"
              </span>
            </div>
            <div className="mb-2.5">
              <span className="text-sm text-gray-900">Last known Location:</span>
              <p className="text-zinc-100">Earth(C-137)</p>
            </div>
            <div className="mb-2.5">
              <span className="text-gray-900 text-sm">First seen in:</span>
              <p className="text-zinc-100">Pilot</p>
            </div>
          </div>
        </article>
        <article className="bg-[#3C3E44] h-48 w-5/12 rounded-lg m-2 flex">
          <div className="img-wrapper w-2/5 h-full">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/332.jpeg" alt="Stacy"
              className="h-full rounded-l-lg"
            ></img>
          </div>
          <div
            id="content-wrapper"
            className=" w-3/5 rounded-r-lg px-6 py-2"
          >
            <div className="mb-2.5">
              <p className="text-zinc-100">Beth Smith</p>
              <span className="text-sm text-zinc-100">
                <span id="status_icon"></span>
                "Alive" "-" "Human"
              </span>
            </div>
            <div className="mb-2.5">
              <span className="text-sm text-gray-900">Last known Location:</span>
              <p className="text-zinc-100">Earth(C-137)</p>
            </div>
            <div className="mb-2.5">
              <span className="text-gray-900 text-sm">First seen in:</span>
              <p className="text-zinc-100">Pilot</p>
            </div>
          </div>
        </article>
        <article className="bg-[#3C3E44] h-48 w-5/12 rounded-lg m-2 flex">
          <div className="img-wrapper w-2/5 h-full">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/600.jpeg" alt="Beth"
              className="h-full rounded-l-lg"
            ></img>
          </div>
          <div
            id="content-wrapper"
            className=" w-3/5 rounded-r-lg px-6 py-2"
          >
            <div className="mb-2.5">
              <p className="text-zinc-100">Beth Smith</p>
              <span className="text-sm text-zinc-100">
                <span id="status_icon"></span>
                "Alive" "-" "Human"
              </span>
            </div>
            <div className="mb-2.5">
              <span className="text-sm text-gray-900">Last known Location:</span>
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
