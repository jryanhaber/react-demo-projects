import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);




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

      setResults(data.query.search);
      console.log(data.query.search)
    };

// define timeout id to cancel if resetting
     const timeoutId = setTimeout(() =>{
       if(term){
         search()
       }
     }, 500)
     // return cleanup function as intrinsic option for function call before re render of component on change
     return (() => )
  }, [term]);






    const listItems = results.map((result) =>{

      return (
        <div className="item" key={result.pageid}>

        <div className="right floated content">
          <a
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          className="ui button">Go</a>
        </div>
        <div className="content">
        <div className="header">
        {result.title}

        </div>
          <span dangerouslySetInnerHTML= {{__html:result.snippet}}></span>

        </div>
        <br/>
    </div>
    )
  }
);



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
          <br/>

          <div className="ui container">
          {listItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
