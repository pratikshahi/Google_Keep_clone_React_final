import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(note) {
    setNote((prevValue) => {
      return [...prevValue, note];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((element, index) => (
        <Note key={index} title={element.title} content={element.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
