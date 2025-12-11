import { createContext, useState, useEffect } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const [token, setToken] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", true);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const value = {
    doctors,
    currencySymbol,
    token,
    setToken,
    userData,
    setUserData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
