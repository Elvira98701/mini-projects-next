"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/shared/ThemeContext/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContext.Provider");
  }
  return context;
};
