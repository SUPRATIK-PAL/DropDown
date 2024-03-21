import { useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown";

function App() {
  const [selected, setSelected] = useState("Select");

  return (
    <div className="App">
      <h1>which framework do you like?</h1>
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
