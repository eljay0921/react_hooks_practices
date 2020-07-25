import React, { useState, useEffect, useRef } from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(loading, JSON.stringify(data), error);
  return <div className="App"></div>;
};

export default App;
