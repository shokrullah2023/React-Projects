import React, { useState } from "react";

export default function ItemList(){
const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Dates", "Elderberry"]);

return(
    <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">
            Item List
        </h2>
            {items.length > 0 ? (
            <ul className="mt-3">
            {items.map((item, index) => (
                <li key={index} className="text-lg"> 
                    {item}
                </li>
            ))}  
            </ul>
        ) : (
            <p className="text-lg text-red-600"> No Items available.</p>
        )}
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setItems([])}
            disabled={items.length === 0}
                >
                Clear Items
            </button>
    </div>
)}