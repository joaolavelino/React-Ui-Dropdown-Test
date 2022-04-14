import { useState } from "react";
import "./App.scss";
import AlignButton from "./components/AlignButton/AlignButton";
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

      <AlignButton menuAlign={menuAlign} setMenuAlign={setMenuAlign} />

      <div className="content">
        <Dropdown align={menuAlign} />
      </div>
    </section>
  );
}

export default App;
