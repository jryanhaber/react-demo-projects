import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  console.log("I run with every render");

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term
        }
      });
    };
    search();
  }, [term]);

  const url = "en.wikipedia.org/w/api.php";

  return (
    <div>
      <div className="ui container">
        <br />
        <div className="ui form">
          <h1>Search Widget</h1>
          <h4>Challenge</h4>
          <p>
            Allow the user to search Wikipedia, and render the results on
            screen.
          </p>
          <h4>Skills Leveraged</h4>
          <p>
            Axios: for structured Api call simplification, functional components
            with hooks including useEffect, component level state
          </p>
          <p></p>
          <h4>Widget</h4>

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
