import React, {
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";
import { replace, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(sessionStorage.getItem("user"));

    if (storedUser) {
      console.log(storedUser, "after logging...");

      setUser(storedUser);
    }

    setLoading(false);
  }, []);

  const login = (userData) => {
    const { token, user } = userData;
    const { rememberMe, ...userInfo } = user;

    const dataStorage = {
      token,
      user: userInfo,
    };

    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem("user", JSON.stringify(dataStorage));

    setUser(dataStorage);
  };

  const logout = () => {
    setIsLoggingOut(true);
    setUser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, isLoggingOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
