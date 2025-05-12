// import React, { useState } from "react";
// import PropsPassing from "./components/StateReusability/PropsPassing";
// import Input from "./components/StateReusability/Input";
// import Counter from "./components/StateReusability/Counter";
// import UserList from "./components/StateReusability/UserList";
// import UserForm from "./components/StateReusability/UserForm";
// import UserPhoto from "./components/StateReusability/UserPhoto";
// import Usersform from "./components/StateReusability/UsersForm";
// import { UserContext, UserProvider } from "./components/StateReusability/UserContext";
// import UserProfile from "./components/StateReusability/UserProfile";

import ItemList from "./components/ConditionalRendering/ItemList";
import LoginStatus from "./components/ConditionalRendering/LoginStatus";
import ToggleMessage from "./components/ConditionalRendering/ToggleMessage";
import UserList from "./components/ConditionalRendering/UserList";
import ManageUser from "./components/ConditionalRendering/MangeUser";
import QuoteApp from "./components/QuoteApp";
import Day8App from "./components/Pages/Day8_ListRendering/Day8App";
import Day09UseContextDemo from "./components/Pages/Day9_GlobalStateManagement/Day09UseContextDemo";
import Day10_UseReducerDemo from "./components/Pages/Day10_UseReducer/Day10_UseReducerDemo";
import Day11_ReactRouter from "./components/Pages/Day11_ReactRouter/Day11_ReactRouter";
import Day12_ControlledUncontrolled from "./components/Pages/Day12_ControlledUncontrolled/Day12_ControlledUncontrolled";
import QuoteFetcher from "./components/Pages/Day13_CustomHooks/components/QuoteFetcher";

function App() {
  // const [count, setCount] = useState(0);

  // Code 1 - 5
  //   return (
  //     <div>
  //       <div className="card">
  //         {/* <PropsPassing />
  //         <Input />
  //         <Counter count={count} setCount={setCount} />
  //         <Counter count={count} setCount={setCount} /> */}
  //         <h1>Welcome to User Directory</h1>
  //         {/* <UserList />
  //         <UserForm /> */}
  //         {/* <UserList /> */}
  //         {/* <UserPhoto /> */}
  //         {/* <Usersform /> */}
  //         <UserProvider>
  //           <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
  //             <UserForm />
  //             <UserProfile />
  //           </div>
  //         </UserProvider>
  //       </div>
  //     </div>
  //   );

  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-6">
        {/* <ToggleMessage />
      <LoginStatus />
      <ItemList /> */}
        {/* <ManageUser />
        <QuoteApp /> */}
        {/* <Day8App /> */}
        {/* <Day09UseContextDemo />
         */}
         {/* <Day10_UseReducerDemo /> */}
         {/* <Day11_ReactRouter /> */}
         {/* <Day12_ControlledUncontrolled /> */}
         <QuoteFetcher />
      </div>
    </div>
  );
}

export default App;
