import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth(); // Ensure the useAuth hook is returning a valid object

  return (
    // <div className="app-container">
    //   <header className="app-header">
    //     <h1>Real-Time Chat App</h1>
    //   </header>

    //   <main className="app-main">
    //     <section className="chat-window">
    //       {/* Chat window will go here */}
    //     </section>

    //     <section className="message-input">
    //       <input
    //         type="text"
    //         placeholder="Type your message..."
    //         className="input-field"
    //       />
    //       <button className="send-btn">Send</button>
    //     </section>
    //   </main>
    // </div>
    <Routes>
      {!user ? (
        <>
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Login />} />
        </>
      ) : (
        <>
          <Route path="/chat" element={<Chat />} />
          <Route path="/*" element={<Chat />} />
        </>
      )}
    </Routes>
  );
}

export default App;
