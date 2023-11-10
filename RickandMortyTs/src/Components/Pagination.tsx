import { useState } from "react"

const Pagination = () => {
    const [pageNumber, setPageNumber] = useState(1)


    const handlePrevBtn = () => {
      if (pageNumber > 1 ) {
         setPageNumber(pageNumber - 1);
      }
    };

    const handleNextBtn = ()=>{
      setPageNumber(pageNumber + 1)
    }
    

    const decrememt: string = "<"
    const increment: string = ">"

    
  return (
    <div className="flex bg-zinc-800 justify-center py-11">
      <div className="flex justify-self-center text-gray-50 ">
        <button
          className="w-8 h-6 bg-gray-500 rounded flex justify-center mx-10"
          onClick={handlePrevBtn}
        >
          {decrememt}
        </button>
        <p>{pageNumber}</p>
        <button
          className="w-8 h-6 bg-gray-500 rounded flex justify-center mx-10"
          onClick={handleNextBtn}
        >
          {increment}
        </button>
      </div>
    </div>
  );
}

export default Pagination