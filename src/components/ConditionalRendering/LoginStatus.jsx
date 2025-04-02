import React, {useState} from 'react';

export default function LoginStatus(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="p-4 text-center">
            {isLoggedIn ? (
                <>
                    <h2 className="text-2xl font-bold text-green-600"> Welcome, User!</h2>
                    <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </button>
                </>
            ): (
                <>
                <h2 className="text-2xl font-bold text-red-600">Please Log In</h2>
                    <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setIsLoggedIn(true)}>
                        Login
                    </button>
                </>
            )}
        </div>
    )
}