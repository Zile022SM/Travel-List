
function StatsComponent({items}) {

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100 || 0);

  return (
    <footer className="stats">
      {percentage ===100 ? (
        <em> 🧳  You got everything! Ready to go <span className="text-6xl text-red-500 ">🛫</span> </em>
      ):(
        <em> 🧳  You have {numItems} items on your list, and you already packed {numPacked} ({percentage}%) </em>
      )}
    
    </footer>
  );
}

export default StatsComponent;