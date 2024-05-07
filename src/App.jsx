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

  function handleToogleItem(id){
    setItems(items=>items.map((item)=>item.id===id?{...item,packed:!item.packed}:item));
  }
    

  function handleDeleteItem(id){
      setItems(items=>items.filter(item=>item.id!==id));
  }

  return (
    <div className="app">
      <LogoComponent />
      <FormComponent onAddItems={handleAddItems} />
      <PackingListComponent items={items} onDeleteItem={handleDeleteItem} onToogleItem={handleToogleItem}/>
      <StatsComponent />
    </div>
  );
}

export default App;
