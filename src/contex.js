import { createContext, useState } from "react";

export const ModeContext = createContext();

export default function ModeContexProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
}
