import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <input type="text" />
      <select id="category" name="category" style={{ marginLeft: "10px" }}>
        <option value="all" selected>
          All
        </option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </select>
    </>
  );
}

export default App;
