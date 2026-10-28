import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem("darkMode");

        if (storedDarkMode !== null) {
            return JSON.parse(storedDarkMode);
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode === "dark");
        localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    };

    return [isDarkMode, toggleDarkMode];
};
