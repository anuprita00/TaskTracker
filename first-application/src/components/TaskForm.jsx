import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // const handleChangeTask = e => {
  //   setTask(e.target.value);
  // }

  // const handleChangeStatus = e => {
  //   setStatus(e.target.value);
  // }

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      //checks if the tag exists in that array.
      // If the tag exists, it means the user is trying to deselect it.
      const filterTags = taskData.tags.filter((item) => item !== tag); //creates a new array without the selected tag.
      setTaskData((prev) => {
        //Then, we update the state using setTaskData(), removing the tag.
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        //updates the state with the new list of selected tags.
        return { ...prev, tags: [...prev.tags, tag] }; // Adds the new tag to the array.
      });
    }
  };
  console.log(taskData.tags);

  const handleChange = (e) => {
    const { name, value } = e.target; // Extract 'name' and 'value' from the input/select
    // const name = e.target.name;
    // const value = e.target.value;

    console.log(name, value);

    setTaskData((prev) => {
      return {
        ...prev, // Keep existing state
        [name]: value,
      }; // Update the changed field dynamically
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log(e);

    setTaskData({ task: "", status: "todo", tags: [] }); // Reset form after submission
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          className="task_input"
          placeholder="Enter your task"
          value={taskData.task}
          // onChange={handleChangeTask}
          onChange={handleChange}
        />

        <section className="task_form_bottom_line">
          <div>
            {/*pass true of false for each tag selected  */}
            <Tag tagName="HTML" selectTag={selectTag} selected={"HTML"} />
            <Tag tagName="CSS" selectTag={selectTag} selected={"CSS"} />
            <Tag tagName="Javascript" selectTag={selectTag} selected={"Javascript"} />
            <Tag tagName="React" selectTag={selectTag} selected={"React"} />
          </div>

          <div>
            <select
              className="task_select"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
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
