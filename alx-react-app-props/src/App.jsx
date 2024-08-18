// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext'; // Ensure this import is correct

function App() {
  return (
    <Router>
      <UserProvider> {/* Wrap everything that needs access to the context */}
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
