import { createContext, useState, useEffect } from "react";

// Create UserContext
export const UserContext = createContext();

// Context Provider Component
export function UserProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    termsAccepted: false,
  });

  // Load saved data from localStorage when the app starts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userFormData"));
    if (savedData) setFormData(savedData);
  }, []);

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("userFormData", JSON.stringify(formData));
  }, [formData]);

  // Clear user data function
  const clearUser = () => {
    setFormData({
      name: "",
      email: "",
      age: "",
      gender: "",
      termsAccepted: false,
    });
    localStorage.removeItem("userFormData");
  };

  return (
    <UserContext.Provider value={{ formData, setFormData, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}
