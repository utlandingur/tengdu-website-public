import React, { useState, createContext } from "react";
import { useIsHeroInView } from "../Hooks/useIsHeroInView";

const HeaderThemeContext = createContext<{
  theme: "dark" | "light" | "transparent";
  textTheme: string;
  buttonTheme: string;
  isTrayOpen: boolean;
  setIsTrayOpen: (isOpen: boolean) => void;
} | null>(null);

export const useHeaderTheme = () => {
  const context = React.useContext(HeaderThemeContext);
  if (!context) {
    throw new Error("useHeaderTheme must be used within a HeaderThemeProvider");
  }
  return context;
};

export const HeaderThemeProvider = (props: React.PropsWithChildren) => {
  const isHeroInView = useIsHeroInView();
  const [isTrayOpen, setIsTrayOpen] = useState(false);

  const theme = isTrayOpen ? "dark" : isHeroInView ? "transparent" : "light";

  const textTheme =
    theme === "dark" || theme === "transparent"
      ? "text-white hover:text-primaryBackground"
      : "text-primaryBackground hover:text-black";

  const buttonTheme =
    theme === "dark"
      ? "bg-white text-black hover:bg-primaryBackground hover:text-white"
      : theme === "transparent"
      ? "bg-white text-black hover:bg-primaryBackground hover:text-white"
      : "bg-primaryBackground text-white hover:bg-black hover:text-white";

  return (
    <HeaderThemeContext.Provider
      value={{ theme, textTheme, buttonTheme, isTrayOpen, setIsTrayOpen }}
    >
      {props.children}
    </HeaderThemeContext.Provider>
  );
};
