


const Header = () => {
        return(
            <div className="bg-[#343c6a] p-4 flex justify-between items-center">
            {/* Header Title */}
            <div className="text-white text-2xl font-semibold">
              FitVora
            </div>
      
            {/* Search Bar */}
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <input 
                type="text" 
                placeholder="Search..." 
                className="outline-none px-2 py-1 w-64 text-gray-700" 
              />
              <button className="bg-[#ffd700] text-white px-4 py-2 rounded-lg ml-2">
                Search
              </button>
            </div>
          </div>
        )
   
}

export default Header;