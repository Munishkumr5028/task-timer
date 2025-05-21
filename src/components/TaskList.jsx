import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  activeTaskId,
  time,
  onStart,
  onPause,
  onComplete,
}) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isActive={activeTaskId === task.id}
          time={time}
          onStart={onStart}
          onPause={onPause}
          onComplete={onComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
