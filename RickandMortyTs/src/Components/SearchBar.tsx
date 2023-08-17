

const SearchBar = () => {
  return (
    <div>
        <input className="w-80 h-10 rounded-lg bg-gray-200 ml-20 mr-8 px-4 max-[480px]:w-20 max-[480px]:ml-3 max-[480px]:mr-3" 
            placeholder="Search" type="text"/>
        <button className="w-10 h-10 rounded-lg bg-green-200">Go</button>
    </div>
  )
}

export default SearchBar