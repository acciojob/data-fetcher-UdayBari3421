import React, { useEffect, useState } from "react";
import "../styles/App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);

    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(JSON.stringify(response.data, null, 2));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <h1>Data Fetched from API</h1>
          <pre>{data}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
