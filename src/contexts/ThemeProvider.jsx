import { useMemo, createContext, useState, useCallback } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    //gets theme from localStorage if its first time visiting will be null
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const [sunIcon, setSunIcon] = useState(null);
    const [moonIcon, setMoonIcon] = useState(null);

    const themeCheck = useCallback(async () => {
        //if null get system theme as default theme
        if (localStorage.getItem('theme') === null) setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        setSunIcon(document.getElementById("sun"));
        setMoonIcon(document.getElementById("moon"));

        //put system theme in localStorage and show icon
        if (theme === "dark") {
            sunIcon.classList.toggle("-translate-x-36");
            localStorage.setItem("theme", "dark");
            return
        }
        moonIcon.classList.toggle("-translate-x-36");
        localStorage.setItem("theme", "light");
        //console.table({ sunIcon, moonIcon })
    }, [moonIcon, sunIcon, theme]);

    const themeChange = useCallback(async () => {
        if (theme === "dark") {
            setTheme("light");
            themeCheck();
            return;
        }
        setTheme("dark");
        themeCheck();
    }, [theme, themeCheck]);

    const value = useMemo(() => ({
        themeCheck,
        themeChange
    }), [themeCheck, themeChange])

    return (
        <ThemeContext.Provider value={value}>
            <div className={theme}>
                {
                    children
                }
            </div>
        </ThemeContext.Provider>
    );
};