
function ItemComponent({item}) {
  return (
    <li>
        <span className={item.packed ? "":"crossed-out"}>
          {item.quantity} {item.description}{item.packed}
        </span>
        <button>❌</button>
    </li>
  );
}

export default ItemComponent;