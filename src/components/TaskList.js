import React from "react";
import Task from './Task'

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task, i) => <Task task={task} deleteTask={() => deleteTask(task)} key={i} />)}
    </div>
  );
}

export default TaskList;
