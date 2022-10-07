import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useEffect } from "react";



function App() {
  const [notes, setNotes] = useState([]);

  function addNote(notes) {
  // Using Fetch API
fetch('https://sheltered-caverns-35946.herokuapp.com/articles', {
  method: 'POST',
  body: JSON.stringify({
    title: notes.title,
    content: notes.content
  }),
  
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
   .then((response) => response.json())
   .then((data) => {
      console.log(data);
      
      // Handle data
   })
   .catch((err) => {
      console.log(err.message);
   });
   
  }
  
 
 
  useEffect(()=> {getData()},[notes]);
 function getData(){
  fetch(`https://sheltered-caverns-35946.herokuapp.com/articles`)
  .then((response) => response.json()).then(data => {
   setNotes(data);
  });
 }

 function deleteNote(id) {
    
  fetch('https://sheltered-caverns-35946.herokuapp.com/articles', {
    method: 'DELETE',
    body: JSON.stringify({
      ObjectId:id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json()).then((data) => {
      setNotes(data);
     })
     .catch((err) => {
        console.log(err);
     }); 
}



  
 
   
  return (
    <div >
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
