import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();
export function useTheme() {
  return useContext(ThemeContext);
}

const ThemeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
