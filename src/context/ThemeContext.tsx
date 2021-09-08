import { FC, ReactNode, createContext, useState, useContext } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeContext = createContext({})

export const GlobalThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useGlobalTheme = () => useContext(ThemeContext)