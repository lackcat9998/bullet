// MessageForm.js

import React, { useState } from 'react';

const MessageForm = ({ onMessageSubmit }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.trim() && content.trim()) {
      onMessageSubmit({ author, content });
      setAuthor('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Write your message..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Post Message</button>
    </form>
  );
};

export default MessageForm;