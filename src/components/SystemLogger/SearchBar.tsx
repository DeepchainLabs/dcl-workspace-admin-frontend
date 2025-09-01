import SearchIcon from "@/svg/CloudStorage/SearchIcon";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-2.5">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search.."
        className="pl-9 pr-4 py-2 border rounded-lg text-sm w-56"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
