import { useState, useEffect } from "react";
import "./App.css";
import Input from "./Searchbar.jsx";

function App() {
  const [searchChar, setSearchChar] = useState("");

  // Log whenever it changes
  useEffect(() => {
    console.log("Search Character:", searchChar);
  }, [searchChar]);

  return (
    <>
      {/* Pass props to Input */}
      <Input
        value={searchChar}
        onChange={(e) => setSearchChar(e.target.value)}
      />
    </>
  );
}

export default App;
