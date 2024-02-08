// UserInput.js
import React, { useState } from 'react';

const UserInput = ({ onSayHello }) => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSayHello = () => {
    onSayHello(name);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        type="text"
        id="nameInput"
        placeholder="Your Name"
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={handleSayHello}>Say Hello</button>
    </div>
  );
};

export default UserInput;
