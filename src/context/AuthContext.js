import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create the AuthContext
const AuthContext = createContext();

// Hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component that will wrap your application
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // State to hold user data
  const navigate = useNavigate(); // useNavigate hook from react-router-dom to handle navigation

  // useEffect to initialize user state from localStorage when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser)); // Restore user data from localStorage
    }
  }, []);

  // Function to handle login
  const login = (userData, token) => {
    setUser(userData); // Set the user data in the state
    localStorage.setItem("user", JSON.stringify(userData)); // Save user data to localStorage
    localStorage.setItem("token", token); // Save the token to localStorage
    navigate("/chat"); // Navigate to the chat page after successful login
  };

  // Function to handle logout
  const logout = () => {
    setUser(null); // Clear the user data in the state
    localStorage.removeItem("user"); // Remove user data from localStorage
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login"); // Navigate to the login page after logout
  };

  // The value that the AuthContext will provide to its consumers
  const value = {
    user, // The current user data
    login, // The login function to allow components to trigger login
    logout, // The logout function to allow components to trigger logout
  };

  // AuthContext.Provider wrapping children components and providing the context value
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
