
export default function SortControl({ sortBy, setSortBy }){
    return (
        <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="mb-4 bg-gray-200 p-2 rounded-md"
        >
            <option value="">Sort by</option>
            <option value="name">Name</option>
            <option value="age">Sort by</option>
        </select>
    )
}