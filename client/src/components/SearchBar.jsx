import { useState } from "react";

function SearchBar({ onSearch }) {
  const [name, setName] = useState("");

  const handleClick = () => {
    console.log("Searching:", name);
    onSearch(name || "ISS");
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search satellite..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;