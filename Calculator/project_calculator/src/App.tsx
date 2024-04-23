import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState<Compute | null>(null);

  interface Compute {
    x: string;
    y: string;
    operation: string;
    result: string;
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/calculate?x=10&y=10&operation=mul")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="result">
      {data && (
        <div>
          <h1>Simple Calculator Sample</h1>
          <p>x: {data.x}</p>
          <p>y: {data.y}</p>
          <p>operation: {data.operation}</p>
          <p>result: {data.result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
