import React, { useState, useEffect } from 'react';

export default function QuoteApp(){
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchQuote = async () => {
        setLoading(true);
        try {
          const res = await fetch("https://api.quotable.io/random");
          if (!res.ok) {
            throw new Error(`HTTP error! Status:  + ${res.status}`);
          }
          const data = await res.json();
          setQuote(data);
        } catch (error) {
          console.error("Failed to fetch quote:", error);
          setQuote(null);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchQuote();
      }, []);


    return (
        <div>
        <div>
            <h1> Quote of the Day</h1>
            {loading ? (
                <p className='text-gray-500'>Loading...</p>
            ) : quote ? (
                <>
                    <p className="text-xl font-semibold mb-4">{quote.content}</p>
                    <p className="text-sm text-gray-600 mb-6">{quote.author}</p>
                </>
            ): (
                <p className="text-red-500">Couldn't fetch a quote.</p>
            )}

            <button onClick={fetchQuote} className='bg-indigo-500 text-white px-4 py-2 round hover:bg-indigo-600 transition'>New Quote</button>
        </div>
        </div>
    )

}