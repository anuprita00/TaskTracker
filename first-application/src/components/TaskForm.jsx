import React from "react";
import "./TaskForm.css";
import Tag from './tag.jsx';

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
        />

        <section className="task_form_bottom_line">
          <div>
            <Tag tagName ="HTML"/>
            <Tag tagName ="CSS"/>
            <Tag tagName ="Javascript"/>
            <Tag tagName ="React"/>
          </div>

          <div>
            <select className="task_select">
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              Add Task
            </button>
          </div>
        </section>
      </form>
    </header>
  );
};

export default TaskForm;
