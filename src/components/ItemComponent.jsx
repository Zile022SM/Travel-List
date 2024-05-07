import { useState } from "react";

function ItemComponent({item,onDeleteItem,onToogleItem}) {

  return (
    <li>
      <input type="checkbox" name="item" value={item.packed} onChange={()=>{onToogleItem(item.id)}} />
        <span className={item.packed ? "crossed-out" : ""}>
          {item.quantity} {item.description}{item.packed}
        </span>
        <button onClick={()=>onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default ItemComponent;