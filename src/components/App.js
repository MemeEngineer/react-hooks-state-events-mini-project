import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState([...TASKS]);
  const [currentCat, setCurrentCat] = useState("All");

  function updateTask(newTaskList) {
    setTask([...newTaskList]);
  }
function updateCat(update){
  setCurrentCat(update)
}

const filteredTask = tasks.filter((task)=> {
  if (category === "All" || category === task.category) return true
});

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} updateCat={updateCat} currentCat={currentCat} />
      <NewTaskForm />
      <TaskList tasks={filteredTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
