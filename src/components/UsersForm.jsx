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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name && !formData.email && !formData.age) {
      alert("Please fill the form");

      if (formData.name.length < 3) {
        alert("Name must be at least 3 characters");
        return;
      }
      if (formData.email.includes("@") === false) {
        alert("Email must contain @");
        return;
      }
      if (formData.age > 0) {
        alert("Age must be a positive number");
        return;
      }
      if (formData.term === false) {
        alert("Please agree to terms and conditions");
        return;
      }
    }

    return (
      <div>
        <h2>Form Submission</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
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
