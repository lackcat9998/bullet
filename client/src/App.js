// App.js

import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import './styles.css';
const App = () => {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="app">
      <h1>Bulletin Board</h1>
      <MessageList messages={messages} />
      <MessageForm onMessageSubmit={handleNewMessage} />
    </div>
  );
};

export default App;