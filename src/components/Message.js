import React from "react";

function Message({ text, isOwnMessage }) {
  return (
    <div className={`message ${isOwnMessage ? "own-message" : ""}`}>{text}</div>
  );
}

export default Message;
