import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [charData, setCharData] = useState("");
  const [category, setCategory] = useState("all");
  useEffect(() => {
    console.log("Updated charData:", charData);
  }, [charData]);

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
        <option value="technology">Technology</option>
        <option value="science">Science</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </select>
    </>
  );
}

export default App;
