import { useState } from "react";


export default function ControlledForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
        setName("");
        setEmail("");
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto bg-white shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">Controlled Form</h2>

            <input
              type="text"
             value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full mb-3"
                placeholder="Enter name"
            />
            <input type="email"
            value={email}
                onChange= {(e) => setEmail(e.target.value)}
                className="border p-2 w-full mb-3"
                placeholder="Enter email"
             />

             <button className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
        </form>
    )


}