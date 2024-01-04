// Message.js

import React from 'react';

const Message = ({ author, content }) => (
  <div className="message">
    <strong>{author}:</strong> {content}
  </div>
);

export default Message;