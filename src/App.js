import React, { useState, useEffect, useRef } from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading..." : "Loaded!"}</h2>
      <button onClick={refetch}>Refetch!</button>
      <p>{loading === false ? JSON.stringify(data) : "..."}</p>
    </div>
  );
};

export default App;
