import React, { useState } from "react";

const Main = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const sendTask = (e) => {
    e.preventDefault();
    if (task === "") return;
    taskList.push(task);
    console.log(taskList);
    setTask("");
  };

  const resetForm = (e) => {
    e.preventDefault();
    setTask("");
  };

  const deleteTask = (index) => {
    let tempTaskList = taskList;
    tempTaskList.splice(index, 1);
    setTaskList(tempTaskList);
  };

  return (
    <div className="main-container">
      <div className="title-container">
        <h1>TODO List</h1>
      </div>
      <div className="box-container">
        <form className="new-task-container">
          <label className="input-title">New task</label>
          <div className="form">
            <input
              className="new-task-input"
              type="text"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <div className="form-buttons">
              <button
                type="submit"
                className="button submit"
                onClick={(e) => sendTask(e)}
              >
                Add
              </button>
              <button className="button cancel" onClick={(e) => resetForm(e)}>
                Cancel
              </button>
            </div>
          </div>
        </form>
        <div className="tasks-container">
          {taskList.map((taskItem, index) => {
            return (
              <div className="task-component" key={index}>
                <p className="task-text">{taskItem}</p>
                <div className="form-buttons task-buttons">
                  <button className="button submit">Edit</button>
                  <button
                    className="button cancel"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
