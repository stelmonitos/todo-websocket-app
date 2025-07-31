import React from "react";

const TaskList = () => {
  return (
    <div>
      <h2>Tasks</h2>

      <ul className="tasks-section__list" id="tasks-list">
        <li className="task">
          Shopping <button className="btn btn--red">Remove</button>
        </li>
        <li className="task">
          Go out with a dog <button className="btn btn--red">Remove</button>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;