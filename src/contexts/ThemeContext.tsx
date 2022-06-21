import React from "react";
import { createContext, useState, useContext } from "react";
import { ThemeProps } from "src/types/PropTypes";

const defaultState = {
  isDark: true,
};

export const ThemeContext = createContext<ThemeProps>(defaultState);

export function useTheme() {
  return useContext(ThemeContext);
}

const ThemeContextProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
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
