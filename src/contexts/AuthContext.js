import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Mock user state for scaffolding. Replace with real auth (Firebase/Auth) later.
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Attempt to restore session from local storage (placeholder)
    // In production, hook into Firebase Auth or Supabase here.
    const stored = null;
    if (stored) setUser(stored);
  }, []);

  const signIn = async (email, password) => {
    // Mock sign in
    const mock = {
      id: 'u1',
      name: 'Sarah Joy',
      email,
      faithBio: { favoriteVerse: 'Romans 8:28', denomination: 'Non-denominational' },
      following: [],
      streak: 3,
      completedBooks: []
    };
    setUser(mock);
    return mock;
  };

  const signOut = () => {
    setUser(null);
  };

  const updateProfile = (patch) => {
    setUser((u) => ({ ...u, ...patch }));
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
