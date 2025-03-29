import React from "react";
import Taskcard from "./Taskcard";

const TaskColumn = (props) =>{
  return (
    <section className="task_column">
      <h2 className="task_column_heading">{props.title}</h2>
      <Taskcard />
    </section>
  );
}

export default TaskColumn;
