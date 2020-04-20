import React from "react";
import Login from "./Login";

let isLoggedIn = false;
const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/* //Ternary Operator */}
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}
      {/* //AND operator */}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
