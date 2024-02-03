import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("loading...");

  function fetchData() {
    setLoading(true);

    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(JSON.stringify(response.data, null, 2));
        setLoading(false);
        setMsg("loading...");
      })
      .catch((err) => {
        console.log(err);
        setMsg("An error occurred: ");
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <p>{msg}</p>
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
