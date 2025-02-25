import React, { useState } from "react";

const PriorityList = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("Low");

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { text: input, priority }]);
      setInput("");
    }
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <h2>Priority List</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Task..."
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button onClick={addItem}>Add</button>
      <ul>
        {items.sort((a, b) => b.priority.localeCompare(a.priority)).map((item, index) => (
          <li key={index}>
            {item.priority} - {item.text}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriorityList;
