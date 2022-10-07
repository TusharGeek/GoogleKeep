import React, { useState } from "react";



const mouseoverDesign = {
  backgroundColor: "grey"
};
const defaultStyle = {
  backgroundColor: "#f5ba13"
};
function CreateArea(props) {
  const [Area, setArea] = useState({
    unit: 1,
    Title: "none",
    Add: false
  });
  const [Style, setStyle] = useState(defaultStyle);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleMouseover() {
    if (Style === defaultStyle) {
      setStyle(mouseoverDesign);
    } else if (Style === mouseoverDesign) {
      setStyle(defaultStyle);
    }
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handleClick() {
    setArea({
      unit: 3,
      Title: "block",
      Add: true
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{ display: Area.Title }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onClick={handleClick}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={Area.unit}
        />
         <form method="post">
         <button
            onMouseOver={handleMouseover}
            onMouseOut={handleMouseover}
            style={Style}
            onClick={submitNote}
            type="submit"
          >
         +
          </button>
         </form>
       
        
      </form>
    </div>
  );
}

export default CreateArea;
