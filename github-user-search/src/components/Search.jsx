import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
cd
    if (!username) return;

    try {
      const user = await fetchUserData(username);
      console.log(user);
    } catch (error) {
      console.error("User not found", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="github-username"
        name="githubUsername"
        placeholder="Search GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
