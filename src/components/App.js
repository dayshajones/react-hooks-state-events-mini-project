import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const addTask = (task) => {
    setTasks((tasks) => {
      return [...tasks, task]
    })
  }

  const deleteTask = (t) => {
    setTasks((tasks) => {
      return tasks.filter((task) => {
        return task !==t;
      })
    })
  }

  const filterCategories = category === "All" ? tasks : tasks.filter((task) => {
    return task.category === category;
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setCategory={setCategory} categories={CATEGORIES}/>
      <NewTaskForm addTask={addTask}  categories={CATEGORIES.filter((c) => c !== "All")} />
      <TaskList tasks={filterCategories} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
