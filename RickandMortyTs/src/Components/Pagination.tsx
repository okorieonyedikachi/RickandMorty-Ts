
type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({page, setPage}:PaginationProps) => {
     
      const decrememt: string = "<";
      const increment: string = ">";
      const handlePrevBtn = () => {
        if (page > 1) {
          setPage(page - 1);
        }
      };
      const handleNextBtn = () => {
        setPage(page + 1);
      };
 

    
  return (
    <div className="flex bg-zinc-800 justify-center py-11">
      <div className="flex justify-self-center text-gray-50 ">
        <button
          className="w-8 h-6 bg-gray-500 rounded flex justify-center mx-10"
          onClick={handlePrevBtn}
        >
          {decrememt}
        </button>
        <p>{page}</p>
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