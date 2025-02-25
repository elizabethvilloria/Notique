import React, { useState } from "react";

const NotesComponent = () => {
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h2>Notes</h2>
      <textarea 
        value={notes} 
        onChange={(e) => {
          setNotes(e.target.value);
          setSaved(false);
        }} 
        placeholder="Write your notes here..."
        rows="5"
        cols="40"
      />
      <button onClick={handleSave}>Save</button>
      {saved && <span style={{ color: 'green' }}>Saved!</span>}
    </div>
  );
};

export default NotesComponent;
