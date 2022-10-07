import React, { useState } from "react";
const defaultStyle ={
  backgroundColor: "White"
}
const mouseoverDesign ={
  backgroundColor: "#f5b915",
  color:"White"
}
function Note(props) {
  const [Style, setStyle] = useState(defaultStyle);
  function handleClick() {
    props.onDelete(props.id);
    setStyle(mouseoverDesign);
  }
 function handleMouseOver(){
  setStyle(mouseoverDesign);
 }
 function handleMouseLeave(){
  setStyle(defaultStyle);
 }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    
      <button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={Style} onClick={handleClick}>
      Del
      </button>
      
    
    </div>
  );
}

export default Note;
