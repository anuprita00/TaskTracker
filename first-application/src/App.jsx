import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log("task", tasks);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        {/* passing the task and filtering on its status */}
        <TaskColumn title="To Do" tasks={tasks} status="todo" />
        <TaskColumn title="Doing" tasks={tasks} status="doing" />
        <TaskColumn title="Done" tasks={tasks} status="done" />
      </main>
    </div>
  );
};

export default App;
