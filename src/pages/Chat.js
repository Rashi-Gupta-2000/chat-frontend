import React from "react";
import ChatBox from "../components/ChatBox";
import { useAuth } from "../context/AuthContext";

function Chat() {
  const { user, logout } = useAuth();

  return (
    <div className="chat-page">
      <header className="chat-header">
        {/* <h2>Welcome, {user.username}</h2> */}
        {/* <button onClick={logout}>Logout</button> */}
      </header>
      <ChatBox />
    </div>
  );
}

export default Chat;
