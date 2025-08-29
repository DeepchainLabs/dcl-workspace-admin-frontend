// import { Search } from "lucide-react";

import SearchIcon from "@/svg/CloudStorage/SearchIcon";

export default function SearchBar() {
  return (
    <div className="relative">
      {/* <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" /> */}
      <div className="absolute left-3 top-2.5 ">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search.."
        className="pl-9 pr-4 py-2 border rounded-lg text-sm w-56"
      />
    </div>
  );
}
