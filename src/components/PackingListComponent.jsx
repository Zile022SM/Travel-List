import ItemComponent from "./ItemComponent";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

function PackingListComponent({items}) {
  return (
    <div className="list">
        <ul>
            {items.length > 0 ? (
                
                items.map((item,key)=>{
                  return  <ItemComponent item={item} key={item.id} />
                })
                
            ) : (<li>Nema stavki u listi</li>)}
        </ul>
    </div>
  );
}

export default PackingListComponent;