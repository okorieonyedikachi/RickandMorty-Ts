
const Nav = () => {
  return (
    <div className=" h-24 flex justify-end ">
        <ul className="px-2 text-black flex h-12 items-center self-center text-xl max-[480px]:text-sm">
            <li className="mx-1"><a href="#">Characters</a></li>
            <li className="mx-2"><a href="#">Episodes</a></li>
        </ul>
    </div>
  )
}

export default Nav