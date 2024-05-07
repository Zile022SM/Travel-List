import ItemComponent from "./ItemComponent";

function PackingListComponent({items,onDeleteItem,onToogleItem}) {
  return (
    <div className="list">
        <ul>
            {items.length > 0 ? (
                
                items.map((item,key)=>{
                  return  <ItemComponent item={item} key={item.id} onDeleteItem={onDeleteItem} onToogleItem={onToogleItem} />
                })
                
            ) : (<li>No items in the list!</li>)}
        </ul>
    </div>
  );
}

export default PackingListComponent;