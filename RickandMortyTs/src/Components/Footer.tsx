
const Footer = () => {
    function getCurrentYear(): number{
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear
    }
    const currentYear = getCurrentYear()
   
  return (
    <footer className="bg-zinc-900 h-max w-full sticky bottom-0">
        <div>
            <p className="text-zinc-100 flex justify-center py-4">
                by Dannie {currentYear}
            </p>
        </div>
    </footer>
  )
}

export default Footer