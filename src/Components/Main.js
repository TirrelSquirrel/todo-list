import React from 'react';

const Main = () => {
    return (
      <div className="main-container">
        <div className="title-container">
          <h1>TODO List</h1>
        </div>
        <div className="box-container">
          <div className="new-task-container">
            <form>
              <label className="input-title">New task</label>
              <input type="text" />
              <button type='submit'>Add</button>
              <button type='cancel'>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Main;
