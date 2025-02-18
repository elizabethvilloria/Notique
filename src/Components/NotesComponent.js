import React, { useState } from "react";

const NotesComponent = () => {
  const [notes, setNotes] = useState("");

  return (
    <div>
      <h2>Notes</h2>
      <textarea 
        value={notes} 
        onChange={(e) => setNotes(e.target.value)} 
        placeholder="Write your notes here..."
        rows="5"
        cols="40"
      />
    </div>
  );
};

export default NotesComponent;
