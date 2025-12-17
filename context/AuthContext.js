import React, { createContext, useState } from 'react';
import { View, Text } from 'react-native'; // ✅ Importe Text

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ id: 1, name: 'Utilisateur Test' });
  };

  const logout = () => {
    setUser(null);
  };

  // ✅ NE PAS mettre de texte ici directement
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}