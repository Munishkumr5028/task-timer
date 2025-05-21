import React from "react";

const TaskItem = ({
  task,
  isActive,
  time,
  onStart,
  onPause,
  onComplete,
}) => {
  return (
    <li
      className={`p-3 rounded border flex justify-between items-center ${
        task.completed ? "bg-green-100 line-through" : "bg-white"
      }`}
    >
      <span>{task.name}</span>
      <div className="flex gap-2">
        {isActive ? (
          <>
            <button onClick={onPause} className="bg-yellow-400 px-3 rounded">
              Pause
            </button>
            <span className="text-blue-700 font-bold">{time}s</span>
          </>
        ) : !task.completed ? (
          <button
            onClick={() => onStart(task.id)}
            className="bg-blue-500 text-white px-3 rounded"
          >
            Start
          </button>
        ) : null}
        {!task.completed && (
          <button
            onClick={() => onComplete(task.id)}
            className="bg-green-500 text-white px-3 rounded"
          >
            Done
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
