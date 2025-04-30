import icon from "../assets/meals icon.svg";
import search from "../assets/search.svg";

const Header = () => {
  return (
    <div className="bg-[#edf3f7] p-4 flex justify-between items-center w-[60%]">
      {/* Header Title */}
      <div className="text-[#3a53f6] text-2xl font-semibold">
        <h1 className="flex flex-row">
          Healthy Menu <img src={icon} />
        </h1>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-sm">
        <img
          src={search}
          alt="Icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
        <input
          type="text"
          placeholder="Search a meal..."
          className="pl-10 py-2 w-full border border-gray-300 rounded-lg focus:outline-none bg-white"
        />
      </div>
    </div>
  );
};

export default Header;
