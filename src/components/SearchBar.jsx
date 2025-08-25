export default function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search exercises..."
      onChange={(e) => setSearch(e.target.value)}
      className="input mb-6"
    />
  );
}
