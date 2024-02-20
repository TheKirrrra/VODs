import React, { createContext, useState, Dispatch, SetStateAction } from "react";

interface AuthContextProps {
  showLoginForm: boolean;
  showRegistrationForm: boolean;
  setShowLoginForm: Dispatch<SetStateAction<boolean>>;
  setShowRegistrationForm: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextProps>({
  showLoginForm: false,
  showRegistrationForm: false,
  setShowLoginForm: () => {},
  setShowRegistrationForm: () => {},
});

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  return (
    <AuthContext.Provider value={{ showLoginForm, showRegistrationForm, setShowLoginForm, setShowRegistrationForm }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;