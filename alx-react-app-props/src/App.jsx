// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext'; // Import UserProvider

function App() {
  return (
    <Router>
      <UserProvider> {/* Wrap the application with UserProvider */}
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
