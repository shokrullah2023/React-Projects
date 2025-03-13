

function ReusableInputField({ type, name, value, label, onChange, options, checked }) {
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
        ): (
            /* Handle All other Input Types */
            <input
                type={type}
                name={name}
                value={type === "checkbox" ? undefined : value}
                checked = {type === "checkbox" ? checked : undefined}
                onChange={onChange}
                className="border p-2 w-full rounded" 
                />
        )}
    </div>
  ); 
};

export default ReusableInputField;