import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch() {
    setLoading(true);
    setError(null); // Reset any previous error
    try {
      const data = await fetchUserData(username);
      if (data.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setUsers(data);
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    }
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      handleSearch();
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Search by username"
          className="w-full p-2 border border-gray-300 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Conditional rendering for different states */}
      {loading && <h1>Loading...</h1>}

      {error && <h1>{error}</h1>}

      {!loading && !error && users.length > 0 && (
        <div className="mt-4 space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center space-x-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">{user.login}</h2>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
