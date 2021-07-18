import { createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

export const AuthProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AuthContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);