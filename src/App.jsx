import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [charData, setCharData] = useState("");
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]); //text input //final data to be shown

  useEffect(() => {
    console.log(charData + "," + category);
  }, [charData, category]);

  //get data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5001/data"); // call backend
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await res.json(); // parse JSON
        setData(jsonData); // update state
        console.log("Fetched data:", jsonData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData(); // call the async function
  }, []);

  const categoryfun = (e) => {
    const newCategory = e.target.value; // the category just selected
    setCategory(newCategory);

    if (newCategory === "all") {
      setfilteredData(data);
    } else if (newCategory === "id") {
      const filtered = data.filter((item) =>
        item.id.toString().includes(charData)
      );
      setfilteredData(filtered);
      console.log("Filtered by id:", filtered);
    }
  };

  return (
    <>
      <input
        type="text"
        value={charData}
        onChange={(e) => {
          const chard = e.target.value;
          setCharData(chard);
        }}
        placeholder="Type something..."
      />
      <select
        id="category"
        name="category"
        style={{ marginLeft: "10px" }}
        value={category}
        onChange={categoryfun}
      >
        <option value="">select option</option>
        <option value="all">All</option>
        <option value="id">id</option>
        <option value="name">name</option>
        <option value="city">city</option>
        <option value="state">state</option>
        <option value="pincode">pincode</option>
        <option value="country">country</option>
      </select>
      <br />

      <h1>Filtered Data</h1>
      {filteredData.map((item) => (
        <li key={item.id}>
          <strong>ID:</strong> {item.id} | <strong>Name:</strong> {item.name} |{" "}
          <strong>City:</strong> {item.city} | <strong>State:</strong>{" "}
          {item.state} | <strong>Pincode:</strong> {item.pincode} |{" "}
          <strong>Country:</strong> {item.country}
        </li>
      ))}
      <br />

      <h1>All Data</h1>
      {data.map((item) => (
        <li key={item.id}>
          <strong>ID:</strong> {item.id} | <strong>Name:</strong> {item.name} |{" "}
          <strong>City:</strong> {item.city} | <strong>State:</strong>{" "}
          {item.state} | <strong>Pincode:</strong> {item.pincode} |{" "}
          <strong>Country:</strong> {item.country}
        </li>
      ))}
    </>
  );
}

export default App;
