// src/UserContext.js
import React, { createContext } from 'react';

// Create the UserContext with a default value
const UserContext = createContext();

// Export the UserContext and its provider component
export const UserProvider = UserContext.Provider;
export default UserContext;
