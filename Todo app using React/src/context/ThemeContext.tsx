import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme === "dark" ? "dark" : "light"
    })

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
            document.documentElement.classList.remove("light")
        } else {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === "dark" ? "dark" : "light"}>{children}</div>
        </ThemeContext.Provider>
    )
}

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
