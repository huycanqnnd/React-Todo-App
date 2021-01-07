import React from "react";

function Note(props) {
  return (
    <div>
      <div className="note" >
        
        {/* <button className = "button" ></button> */}
        {props.text}
        <input type="radio" onClick={props.deleteMethod} className="checked" name="optradio" /> 

        
      </div>
    </div>
  );
}
export default Note;
