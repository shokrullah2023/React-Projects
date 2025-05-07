import { useRef } from "react";


export default function UncontrolledForm() {
 const nameRef = useRef();
 const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        alert(`Name: ${name}, Email: ${email}`);
        nameRef.current.value = "";
        emailRef.current.value = "";
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-sm bg-white shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">Uncontrolled Form</h2>

            <input 
             type="text"
             ref={nameRef} 
             placeholder="Enter name"
             className="border p-2 w-full mb-3"
             />
            <input
                type="email"
                ref={emailRef}
                placeholder="Enter email"
                className="border p-2 w-full mb-3"
                />
            <button className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
        </form>
    )

}