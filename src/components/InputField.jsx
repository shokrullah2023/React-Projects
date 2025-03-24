function InputField({ type, name, value, label, onChange, options, checked }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold">{label}</label>

      {/* Handle Radio Inputs */}
      {type === "radio" ? (
        options.map((option) => (
          <label key={option} className="mr-4">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
              className="mr-1"
            />
            {option}
          </label>
        ))
      ): type === "checkbox" ? (
        <input type="checkbox" name={name} checked={checked} onChange={onChange} />
      ) : (
        <input type={type} name={name} value={value} onChange={onchange} className="w-full p-2 border rounded"/>
      )}
    </div>
  );
}

export default InputField;
