import React from "react";
import Taskcard from "./Taskcard";

const TaskColumn = ({ title, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">{title}</h2>
      {/* Loops through tasks.
      If task.status matches status, renders <Taskcard />.
      Uses short-circuiting (&&),
       so if the condition is false, nothing is rende */}
      {tasks.map(
        (task, index) => task.status === status && 
        <Taskcard key={index} title={task.task} tags={task.tags} 
        handleDelete ={handleDelete} index={index}/>
        
      )}
    </section>
  );
};

export default TaskColumn;
