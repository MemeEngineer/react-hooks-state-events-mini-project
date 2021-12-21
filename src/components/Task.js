import React from "react";


function Task({text, category, removeTask}) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" value={text} onClick={(e)=> removeTask(e)}>X</button>
    </div>
  );
}

export default Task;