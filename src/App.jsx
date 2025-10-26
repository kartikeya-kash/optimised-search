import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [charData, setCharData] = useState("");
  const [category, setCategory] = useState("all");
  const [data, setData] = useState("");
  useEffect(() => {
    console.log(charData + "," + category);
  }, [charData, category]);

  useEffect(() => {});

  return (
    <>
      <input
        type="text"
        value={charData}
        onChange={(e) => {
          setCharData(e.target.value);
        }}
        placeholder="Type something..."
      />
      <select
        id="category"
        name="category"
        style={{ marginLeft: "10px" }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="id">id</option>
        <option value="name">name</option>
        <option value="city">city</option>
        <option value="state">state</option>
        <option value="pincode">pincode</option>
        <option value="country">country</option>
      </select>

      <p></p>
    </>
  );
}

export default App;
