import React, { useState, useEffect, useRef } from "react";
import { createWebSocket } from "../utils/websocket";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = createWebSocket((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socketRef.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      const message = { text: inputMessage };
      socketRef.current.send(JSON.stringify(message));
      setMessages((prevMessages) => [...prevMessages, message]);
      setInputMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className="chat-message">
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;
