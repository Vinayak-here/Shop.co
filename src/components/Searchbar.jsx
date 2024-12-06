import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="relative w-60">
      {/* Input Box */}
      <input
        className="bg-slate-100 w-full h-9 rounded-md pl-3 pr-10"
        placeholder="What are you looking for?"
      />

      {/* Search Icon */}
      <CiSearch style={{ strokeWidth: "1.5" }} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-xl" />    </div>
  );
};

export default SearchBar;
