import React from 'react';
import SearchInput from './components/SearchInput';

const App = () => {
  const handleSearch = (username) => {
    console.log('Searching for:', username);
    // Add your API call logic here
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchInput onSearch={handleSearch} />
    </div>
  );
};

export default App;
