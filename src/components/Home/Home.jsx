import React, { useState } from "react";

import "./Home.css";

const Home = ({ message, setMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    if (error) {
      setError("");
    }
    setInputValue(e.target.value);
  };

  const handleOnClick = () => {
    if (inputValue.length >= 3) {
      setMessage(inputValue);
      setInputValue("");
      setError("");
    } else {
      setError(" - Message min length 3 chars");
    }
  };
  return (
    <div className="home__wrapper">
      <h3 className="home__message">
        <span className="home__message-label">message: </span>
        {message}
      </h3>
      <div className="home__form">
        <label htmlFor="newMessageInput" className="home__form-label">
          Type new MESSAGE:
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          id="newMessageInput"
          className="home__form-input"
        />
        <div className="home__form-input-error">{error}</div>
        <button onClick={handleOnClick} className="home__form-button">
          Set new message
        </button>
      </div>
    </div>
  );
};

export default Home;
