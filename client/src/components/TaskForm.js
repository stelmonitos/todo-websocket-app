import React from "react";

const TaskForm = () => {
    return (
        <div>
            <form id="add-task-form">
                <input className="text-input" autoComplete="off" type="text" placeholder="Type your description" id="task-name" />
                <button className="btn" type="submit">Add</button>
            </form>
        </div>
    )
}

export default TaskForm;