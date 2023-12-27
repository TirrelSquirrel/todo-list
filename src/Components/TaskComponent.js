import React from 'react';

const TaskComponent = () => {

    const task = "example task"
    return (
        <div className='tak-copmponent'>
            <p>{task}</p>
            <div className='task-buttons'>
                <i>Edit</i>
                <i>Delete</i>
            </div>
        </div>
    );
}

export default TaskComponent;
