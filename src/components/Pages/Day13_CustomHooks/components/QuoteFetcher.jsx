import useFetch from "../hooks/useFetch";

export default function QuoteFetcher() {
    const {loading, data, error} = useFetch("https://api.quotable.io/random");

    return (
        <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Quote of the Day</h2>

            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {data && (
            <blockquote className="italic border-l-4 pl-4 text-gray-700">
                "{data.content}"<br />
                <span className="block mt-2 text-right font-semibold">- {data.author}</span>
            </blockquote>
        )}
        </div>
    )

}