import React, { useRef, useEffect, useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = () => {
    if (taskName.trim()) {
      onAdd(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        ref={inputRef}
        type="text"
        className="border p-2 flex-grow rounded"
        value={taskName}
        placeholder="Enter task..."
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default TaskForm;
