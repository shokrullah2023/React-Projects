import { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    term: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validationForm = () => {
    let newErrors = {};
    if (formData.name.length < 3) newErrors.name = "Name must be at least 3 characters";
    if (formData.email.includes("@") || formData.email.includes(".com"))
      newErrors.email = "Email must contain @ and .com";
    if (formData.aga < 0 || formData.age === "") newErrors.age = "Enter a valid age";
    if (formData.gender) newErrors.gender = "Select your gender";
    if (!formData.term) newErrors.term = "Please agree to terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationForm()){
      alert("Registration successful! \n" + JSON.stringify(formData, null, 2));
      setFormData({name: "", email: "", age: "", gender:"", term: false});
      setErrors({});
    }
    }

    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Form Submission</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </div>

          {/* Email Input */}
          <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>

          {/* Age Input */}
          <div className="mb-4">
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          </div>
          
          <radiobutton type="radio" />
          <checkbox
            type="checkbox"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
}

export default UserForm;
