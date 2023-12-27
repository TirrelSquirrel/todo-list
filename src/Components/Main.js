import React from 'react';

const Main = () => {
    return (
      <div className="main-container">
        <div className="title-container">
          <h1>TODO List</h1>
        </div>
        <div className="box-container">
          <form className="new-task-container">
            <label className="input-title">New task</label>
            <div className='form'>
              <input className='new-task-input' type="text" />
              <div className="form-buttons">
                <button type="submit" className='button'>Add</button>
                <button type="cancel" className='button'>Cancel</button>
              </div>
            </div>
          </form>
          <div className="tasks-container"></div>
        </div>
      </div>
    );
}

export default Main;
