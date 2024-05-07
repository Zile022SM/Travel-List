import { useState } from "react";
import ItemComponent from "./ItemComponent";

function FormComponent({onAddItems}) {

    const [description,setDescription] = useState("");
    const [quantity,setQuantity] = useState("");
    

  function handleSubmit(e){
    e.preventDefault();

    if(!description) return;

    const newItem = {description,quantity,packed:false,id:Date.now()};
    //console.log(newItem);

    setDescription("");
    setQuantity(1);

    onAddItems(newItem);
  }

  return (
    <form className="add-form flex flex-wrap items-center justify-center" onSubmit={handleSubmit}>
      <h3>What do you need for your 😎  trip</h3>

      <select name="quantity" id="" value={quantity} onChange={(e)=>setQuantity(+e.target.value)}>
        <option value="">-- Quantity --</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input type="text" name="item" id="" placeholder="Item ..." value={description} onChange={(e)=>{
        setDescription(e.target.value)
      }}/>
      <button>Add</button>
    </form>
  );
}

export default FormComponent;