import React from "react";

function Task(props) {
  
  // const [removeText, setRemoveText]= useState('')
  // const [removeCat, setRemoveCat]= useState('')

  const {index, text, category, onClick} = props;
  
  // console.log(id)
  // function handleText(id) {
  //   console.log(id)
  //   //setRemoveText(event.target.value)
  //   // event.currentTarget.parentElement.remove();
    
  // }

  // function handleCat(event) {
  
  //   setRemoveCat(event.target.value)
  //   console.log(event.target.value)
  // }

  // const taskRemove = props.filter((prop) => {
  //   if (remove === true) {
  //     return true;
  //   } else {
  //     return prop.text === newArray;
  //   }
  // });

  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text" >{text}</div>
      <button className="delete" onClick={() => onClick(index)}>
        X
      </button>
    </div>
  );
}

export default Task;
