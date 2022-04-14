import { useState } from "react";
import "./App.scss";
import Dropdown from "./components/Dropdown";

function App() {
  const [menuAlign, setMenuAlign] = useState("left");

  const handleAlignment = () => {
    menuAlign == "left" ? setMenuAlign("right") : setMenuAlign("left");
  };

  return (
    <section className="App">
      <h1>React UI Dropdown Test</h1>
      <h2>João Avelino</h2>

      <hr />

      <button className="align-button" onClick={handleAlignment}>
        {`Align menu to the ${menuAlign == "left" ? "right" : "left"}`}
      </button>

      <div className="content">
        <Dropdown align={menuAlign} />
      </div>
    </section>
  );
}

export default App;
