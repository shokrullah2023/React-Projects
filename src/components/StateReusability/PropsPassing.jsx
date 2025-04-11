import { useState } from "react";

function Child({ updateMessage }) {
  return (
    <button onClick={() => updateMessage("Hello from Child")}>Click Me</button>
  );
}

function Parent() {
  const [message, setMessage] = useState("Hello from Parent");

  return (
    <div>
      <h2>{message}</h2>
      <Child updateMessage={setMessage} />
    </div>
  );
}

export default Parent;
