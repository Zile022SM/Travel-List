import { useState } from "react";
import FormComponent from "./components/FormComponent";
import LogoComponent from "./components/LogoComponent";
import PackingListComponent from "./components/PackingListComponent";
import StatsComponent from "./components/StatsComponent";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => {
      return [...items, item];
    });
  }

  return (
    <div className="app">
      <LogoComponent />
      <FormComponent onAddItems={handleAddItems} />
      <PackingListComponent items={items} />
      <StatsComponent />
    </div>
  );
}

export default App;
