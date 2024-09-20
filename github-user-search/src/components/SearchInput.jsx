import React from 'react';

const SearchInput = ({ onSearch }) => {
  const [username, setUsername] = React.useState('');

  const handleSearch = () => {
    onSearch(username); // Call the parent function to search
    setUsername(''); // Clear the input
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub Users"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
