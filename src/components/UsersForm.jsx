// import { useState } from "react";

// export default function UserForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     term: false,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (formData.name.length < 3)
//       newErrors.name = "Name must be at least 3 characters";
//     if (!formData.email.includes("@") || !formData.email.includes(".com"))
//       newErrors.email = "Email must contain @ and .com";
//     if (formData.age <= 0 || formData.age === "")
//       newErrors.age = "Enter a valid age";
//     if (!formData.gender) newErrors.gender = "Select your gender";
//     if (!formData.term) newErrors.term = "Please agree to terms and conditions";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert("Registration successful! \n" + JSON.stringify(formData, null, 2));
//       setFormData({ name: "", email: "", age: "", gender: "", term: false });
//       setErrors({});
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-blue shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">User Registeration</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Name Input */}
//         <div className="mb-4">
//           <label className="block font-semibold">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border p-2 w-full rounded"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>

//         {/* Email Input */}
//         <div className="mb-4">
//           <label className="block font-semibold">Email</label>
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border p-2 w-full rounded"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}
//         </div>

//         {/* Age Input */}
//         <div className="mb-4">
//           <label className="block font-semibold">Age</label>
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             className="border p-2 w-semifull rounded"
//           />
//           {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
//         </div>

//         {/* Gender Selection */}
//         <div className="mb-4">
//           <label className="block font-semibold">Gender</label>
//           <div>
//             <label className="mr-4">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 onChange={handleChange}
//               />
//               Male
//             </label>
//             <label className="mr-4">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 onChange={handleChange}
//               />
//               Female
//             </label>
//           </div>
//           {errors.gender && (
//             <p className="text-red-500 text-sm">{errors.gender}</p>
//           )}
//         </div>

//         {/* Terms and Conditions */}
//         <div className="mb-4">
//           <label className="block font-semibold">
//             <input type="checkbox" name="term" onChange={handleChange} />
//             <label className="p-2"> I accept the terms and conditions</label>
//           </label>
//           {errors.term && <p className="text-red-500 text-sm">{errors.term}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import InputField from "./InputField";

export default function RegistrationForm() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   age: "",
  //   gender: "",
  //   termsAccepted: false,
  // });

  const [formData, setFormData] = useContext(UserContext);

  const [errors, setErrors] = useState({});
  // const [isFormValid, setIsFormValid] = useState(false);

  // // Load data from localStorage on component mount
  // useEffect(() => {
  //   const savedData = JSON.parse(localStorage.getItem("userFormData"));
  //   if (savedData) setFormData(savedData);
  // }, []);

  // // Save data to localStorage when formData changes
  // useEffect(() => {
  //   localStorage.setItem("userFormData", JSON.stringify(formData));
  // }, [formData]);

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters.";
    if (!formData.email.includes("@") || !formData.email.includes(".com"))
      newErrors.email = "Invalid email format.";
    if (formData.age <= 0 || formData.age === "")
      newErrors.age = "Enter a valid age.";
    if (!formData.gender) newErrors.gender = "Select your gender.";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(
        "Registration Successful! 🎉\n" + JSON.stringify(formData, null, 2)
      );
      // setFormData({
      //   name: "",
      //   email: "",
      //   age: "",
      //   gender: "",
      //   termsAccepted: false,
      // });
      // setErrors({});
      // localStorage.removeItem("userFormData"); // Clear stored data
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <InputField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Name"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        {/* Email Field */}
        <InputField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Age Field */}
        <InputField
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          label="Age"
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}

        {/* Gender Field */}
        <InputField
          type="radio"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          label="Gender"
          options={["Male", "Female"]}
        />
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender}</p>
        )}

        {/* Terms & Conditions Checkbox */}
        <InputField
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          label="I accept the terms & conditions"
        />
        {errors.termsAccepted && (
          <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          disabled={errors.length > 0}
        >
          Register
        </button>
      </form>
    </div>
  );
}
