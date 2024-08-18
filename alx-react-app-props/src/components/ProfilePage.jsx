// src/ProfilePage.jsx
import React, { useContext } from 'react';
import UserInfo from './UserInfo';
import UserContext from './UserContext'; // Import UserContext

function ProfilePage() {
  const { userData } = useContext(UserContext); // Use context

  return <UserInfo />;
}

export default ProfilePage;
