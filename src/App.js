import * as React from "react";

import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import { Pagination } from "@mui/material";

export default function App() {
  
  const[query,setQuery]=useState('')








  // Landing page
  const frontPageDataApi =
    `https://hn.algolia.com/api/v1/search?tags=front_page&query=${query}`;

  const [apiDataLanding, setApiDataLanding] = useState([]);
  const [loading, setLoading] = useState(false);

  // semi generic fetchData function using axios taking the urlPath and useState as parameters
  const fetchData = (urlPath, setDataFunc) => {
    axios
      .get(urlPath)
      .then((landingResponse) => setDataFunc(landingResponse.data))
      .then(() => setLoading(true))
      .catch((err) => console.log(err));
  };

  // Landing page fetch
  useEffect(() => {
    fetchData(frontPageDataApi, setApiDataLanding);
  }, [frontPageDataApi]);
 
  const handleChange = (e, p) => {
    console.log(e,p)
    setQuery(`&page=${p}`);
  };

  return (
    <>
      <Navbar query={query} setQuery={setQuery}/>
      {loading ? (
        <>
          <div>
            {apiDataLanding.hits.map((e) => {
              return (
                <>
                  <div key={e.objectID}>
                    <Cards {...e} stateChanger={setApiDataLanding} />
                  </div>
                </>
              );
            })}
          </div>
          <Pagination count={3} color="primary" onChange={handleChange}/>
        </>
      ) : (
        <div className="loading">
          <CircularProgress />
        </div>
      )}
    </>
  );
}

