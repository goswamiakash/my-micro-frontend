// App.js
import React, { useState } from 'react';
import UserInput from './UserInput';
import Greeting from './Greeting';

const App = () => {
  const [greeting, setGreeting] = useState('');

  const handleSayHello = (name) => {
    if (name.trim() !== '') {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting('Please enter your name.');
    }
  };

  return (
    <div>
      <h1>Welcome to the Dummy Micro Frontend App</h1>
      <UserInput onSayHello={handleSayHello} />
      <Greeting greeting={greeting} />
    </div>
  );
};

export default App;
