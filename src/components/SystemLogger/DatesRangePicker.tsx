export default function DateRangePicker() {
  return (
    <div className="flex items-center gap-2">
      <button className="px-3 py-2 border rounded-lg text-sm">{"<"}</button>
      <span className="text-sm text-gray-700">Aug 15–31 2025</span>
      <button className="px-3 py-2 border rounded-lg text-sm">{">"}</button>
      <button className="ml-2 px-3 py-2 border rounded-lg text-sm">
        Today
      </button>
    </div>
  );
}
