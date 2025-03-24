import React, { useContext } from "react";
import { UserContext } from "./UserContext";


export default function UserProfile() {
  const { formData, clearFormData } = useContext(UserContext);

  if (!formData.name) {
    return (
      <p className="text-center text-gray-500 mt-4">No user registered yet</p>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">User Profile</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Age:</strong> {formData.age}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>

      <button onClick={clearFormData} className="mt-4 bg-red-500 p-2 text-white rounded hover:bg-red-600">
        Clear User
      </button>


    </div>
  );
}
