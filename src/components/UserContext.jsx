import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    termAccepted: false,
  });

  // Load saved data from local storage when component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userFormData"));
    if (savedData) setFormData(savedData);
  }, []);

  // Save data to local storage when formData changes
  useEffect(() => {
    localStorage.setItem("useFormData", JSON.stringify(formData));
  }, [formData]);

  // Clear form data from local storage
  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
      age: "",
      gender: "",
      termAccepted: false,
    });
  };

  return (
    <UserContext.Provider value={{ formData, setFormData, clearFormData }}>
      {children}
    </UserContext.Provider>
  );
};
