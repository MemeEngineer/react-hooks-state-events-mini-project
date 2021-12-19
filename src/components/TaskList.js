import React, { useState } from "react";
import Task from "./Task";

function TaskList(props) {
  const [taskList, setTaskList] = useState(props.tasks);

  function removeTask(index) {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);
  }

  return (
    <div className="tasks">
      {taskList.map((task, index) => (
        <Task
          index={index}
          key={index}
          text={task.text}
          category={task.category}
          onClick={(index) => removeTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
