import React from "react";
import Task from "./Task";

function TaskList({tasks, updateTask}) {

  function removeTask(event){
    //filter will return in text array without selected text
const deleteTask= tasks.filter((task) => task.text != event.target.value);
 updateTask(deleteTask)
  }
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
<Task key={task.text} category={task.category} text= {task.text} removeTask={removeTask}/>

        ))}
    </div>
  );
}

export default TaskList;