const Body = ({ data, isHomescreen }) => {
  return (
    <div className="h-fit bg-zinc-800 py-6 flex justify-center">
      <div
        className="character-container h-100 w-3/4 flex flex-row flex-wrap 
          justify-between  max-[480px]:flex-col  max-[480px]:content-center"
      >
        {data?.map((item, i) => {
          console.log(item);
          
          
          if (i > 5 && isHomescreen == true) {
            return;
          }
          return (
            <article
              key={i}
              className="bg-[#3C3E44] h-52 w-5/12 rounded-lg m-2 flex max-[800px]:h-fit max-[480px]:flex-col 
            max-[480px]:w-9/12 max-[480px]:justify-content-center"
            >
              <div className="img-wrapper w-2/5 h-full max-[480px]:w-full">
                <img
                  src={item.image}
                  alt="Beth"
                  className="h-full rounded-l-lg max-[480px]:rounded-r-lg "
                ></img>
              </div>
              <div
                id="content-wrapper"
                className=" w-3/5 rounded-r-lg px-6 py-2 max-[480px]:w-full"
              >
                <div className="mb-2.5">
                  <p className="text-zinc-100">{item?.name}</p>
                  <span className="text-sm text-zinc-100 w-full">
                    <span id="status_icon"></span>"{item?.status}" "-" "
                    {item.species}"
                  </span>
                </div>
                <div className="mb-2.5">
                  <span className="text-sm text-gray-900">Origin:</span>
                  <p className="text-zinc-100">{item?.origin?.name}</p>
                </div>
                <div className="mb-2.5">
                  <span className="text-gray-900 text-sm">Gender:</span>
                  <p className="text-zinc-100">{item?.gender}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
