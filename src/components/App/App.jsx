import React, { useState } from "react";
import Home from "../Home/Home";

import './App.css'

const App = () => {
  const [message, setMessage] = useState("Hello, it`s me Mario!!!");
  return (
    <div className="app__wrapper">
      <Home message={message} setMessage={setMessage} />
    </div>
  );
};

export default App;
