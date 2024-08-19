import React, { createContext, useState, ReactNode, FC } from 'react';

// Define the User interface
interface User {
  name: string;
  // Add more user properties as needed
}

// Define the AppState interface
interface AppState {
  user: User | null;
  isAuthenticated: boolean;
}

// Define the AppContextProps interface
interface AppContextProps {
  state: AppState;
  login: (userData: User) => void;
  logout: () => void;
}

// Create the context
export const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create the provider component
export const AppProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}
>) => {
  const [state, setState] = useState<AppState>({hello:'test'})


  return (
    <AppContext.Provider value={{ state}}>
      {children}
    </AppContext.Provider>
  );
};
