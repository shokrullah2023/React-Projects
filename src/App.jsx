// import React, { useState } from "react";
import PropsPassing from "./components/PropsPassing";
import Input from "./components/Input";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
// import UserPhoto from "./components/UserPhoto";
import Usersform from "./components/UsersForm";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <div className="card">
        {/* <PropsPassing />
        <Input />
        <Counter count={count} setCount={setCount} />
        <Counter count={count} setCount={setCount} /> */}
        <h1>Welcome to User Directory</h1>
        {/* <UserList />
        <UserForm /> */}
        {/* <UserList /> */}
        {/* <UserPhoto /> */}
        <Usersform />
      </div>
    </div>
  );
}

export default App;
