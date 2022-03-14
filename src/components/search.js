import React, {useState, useEffect} from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  console.log("I run with every render");

  useEffect(() => {
    console.log("I only after every render and at initial render");
  }, [term]);

  return (
    <div>
      <div className="ui container">
        <br />
        <div className="ui form">
          <h1>Search</h1>
          <label>Enter Search Term</label>

          <div>
            <input
              value={term}
              onChange={e => setTerm(e.target.value)}
              className="input"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
