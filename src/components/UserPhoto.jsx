import { useState, useEffect } from "react";

function UserPhoto(){
    const [photos, setPhoto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
         .then((response) => {
            if(!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
         })
         .then((data) => {
                setPhoto(data);
                setLoading(false);
         })
         .catch((error)=> {
                setError(error);
                setLoading(false);
         })
    },[]); 

    if(loading){
        return <p>Loading photo...</p>;
    }

    if(error){
        return <p>Error: {error}</p>;
    }

    return(
        <div>
            <h2>User Posts</h2>
            <ul>
                {photos.map((photo) => {
                    <li key={photo.id} >
                        {photo.title} - {photo.body}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default UserPhoto;