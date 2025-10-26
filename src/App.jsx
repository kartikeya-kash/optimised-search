import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [charData, setCharData] = useState("");
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]); //text input //final data to be shown

  useEffect(() => {
    console.log(charData + "," + category);
    switch (category) {
      case "":
        return setfilteredData([]);
      case "all":
        return setfilteredData(data);
      case "id":
        const filteredById = data.filter(
          (item) => item.id.toString() === charData.toString()
        );
        if (filteredById.length === 0) {
          return setfilteredData([]);
        }
        return setfilteredData(filteredById);
      case "name":
        const filteredByname = data.filter((item) =>
          item.name.toString().startsWith(charData.toString())
        );
        if (filteredByname.length === 0 || charData === "") {
          return setfilteredData([]);
        }
        return setfilteredData(filteredByname);
      case "city":
        const filteredBycity = data.filter((item) =>
          item.city.toString().startsWith(charData.toString())
        );
        if (filteredBycity.length === 0 || charData === "") {
          return setfilteredData([]);
        }
        return setfilteredData(filteredBycity);
      case "state":
        const filteredBystate = data.filter((item) =>
          item.state.toString().startsWith(charData.toString())
        );
        if (filteredBystate.length === 0 || charData === "") {
          return setfilteredData([]);
        }
        return setfilteredData(filteredBystate);
      case "pincode":
        const filteredBypincode = data.filter((item) =>
          item.pincode.toString().startsWith(charData.toString())
        );
        if (filteredBypincode.length === 0 || charData === "") {
          return setfilteredData([]);
        }
        return setfilteredData(filteredBypincode);
      case "country":
        const filteredBycountry = data.filter((item) =>
          item.country.toString().startsWith(charData.toString())
        );
        if (filteredBycountry.length === 0 || charData === "") {
          return setfilteredData([]);
        }
        return setfilteredData(filteredBycountry);
    }
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
        onChange={(e) => {
          const newCategory = e.target.value; // the category just selected
          setCategory(newCategory);
        }}
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
      {filteredData.length === 0 && <p>No data found</p>}
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
