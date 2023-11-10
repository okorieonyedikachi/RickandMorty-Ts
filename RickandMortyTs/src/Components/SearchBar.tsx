import { ChangeEvent, useState } from "react"

const SearchBar = () => {
  const [search, setSearch] = useState("")

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearch(input);
    console.log(input);
  };
 
  

  return (
    <div>
        <input className="w-80 h-10 rounded-lg bg-gray-200 ml-20 mr-8 px-4 max-[480px]:w-20 max-[480px]:ml-3 max-[480px]:mr-3" 
            placeholder="Search" type="text" onChange={handleInput} value={search}/>
        <button className="w-10 h-10 rounded-lg bg-green-200">Go</button>
    </div>
  )
}

export default SearchBar