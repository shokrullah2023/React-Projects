
export default function SearchBar({ searchTerm, onSearch}) {
    return(
        <input
        type="text"
        value={searchTerm}
        onChange={(e)=> onSearch(e.target.value)}
        placeholder="Search users..."
        className="p-2 border rounded w-full mb-4"
        />
    )
}