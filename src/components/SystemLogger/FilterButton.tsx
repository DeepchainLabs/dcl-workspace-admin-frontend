import FilterIconSVG from "@/svg/Admin/SystemLogger/FilterIconSVG";

export default function FilterButton() {
  return (
    <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm">
      {/* <Filter className="h-4 w-4" /> Filter */}
      Filter
      <FilterIconSVG />
    </button>
  );
}
