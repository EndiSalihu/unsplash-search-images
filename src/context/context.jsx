import { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

const getInitDarkMode = () => {
  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const storedDarkTheme = localStorage.getItem('darkTheme') === 'true';

  return storedDarkTheme || prefersDarkTheme;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitDarkMode());
  const [term, setTerm] = useState("programming");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    localStorage.setItem('darkTheme', newDarkTheme)
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, term, setTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
