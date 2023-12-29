import React, { useState } from "react";

const Main = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(["hola", "hey"]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

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
    setEditing(false)
  };

  const deleteTask = (index) => {
    setTaskList((temp) => {
      return temp.filter((item, i) => i !== index);
    });
  };

  const startEdit = (index) => {
    setEditing(true)
    setTask(taskList[index])
    setEditIndex(index)
  };

  const handleEdit = (e) => {
    e.preventDefault()
    taskList[editIndex] = task;
    setTask("")
    setEditIndex(0)
    setEditing(false)
  }


  return (
    <div className="main-container">
      <div className="title-container">
        <h1>TODO List</h1>
      </div>
      <div className="box-container">
        {!editing ? (
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
        ) : (
          <form className="new-task-container edit">
            <label className="input-title">Edit task</label>
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
                  className="button confirm"
                  onClick={(e) => handleEdit(e)}
                >
                  Confirm
                </button>
                <button className="button cancel" onClick={(e) => resetForm(e)}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
        <div className="tasks-container">
          {taskList.map((taskItem, index) => {
            return (
              <div className="task-component" key={index}>
                <p className="task-text">
                  <span className="task-num">{index + 1}</span> {taskItem}
                </p>
                <div className="form-buttons task-buttons">
                  <button
                    className="button submit"
                    onClick={() => startEdit(index)}
                  >
                    Edit
                  </button>
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
