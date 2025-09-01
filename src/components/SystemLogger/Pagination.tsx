export default function Pagination() {
  return (
    <div className="flex justify-between items-center py-3 border ">
      <button className="px-3 py-1 border rounded-md text-sm">
        ← Previous
      </button>
      <div className="flex gap-2">
        <button className="px-3 py-1 border rounded-md text-sm bg-blue-50 text-blue-600">
          1
        </button>
        <button className="px-3 py-1 border rounded-md text-sm">2</button>
        <span className="px-3 py-1 text-sm">...</span>
        <button className="px-3 py-1 border rounded-md text-sm">6</button>
      </div>
      <button className="px-3 py-1 border rounded-md text-sm">Next →</button>
    </div>
  );
}
