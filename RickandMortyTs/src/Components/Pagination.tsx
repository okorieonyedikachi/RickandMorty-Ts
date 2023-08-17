

const Pagination = () => {
    const decrememt: string = "<"
    const increment: string = ">"
  return (
    <div className="flex bg-zinc-800 flex justify-center py-11">
     <div className="flex justify-self-center text-gray-50 ">
        <button className="w-8 h-6 bg-gray-500 rounded flex justify-center mx-10">{decrememt}</button>
        <p>1</p>
        <button className="w-8 h-6 bg-gray-500 rounded flex justify-center mx-10">{increment}</button>
      </div>
    </div>
  )
}

export default Pagination