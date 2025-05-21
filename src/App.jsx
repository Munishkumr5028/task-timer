import React, { useReducer } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useTaskTimer from "./hooks/useTaskTimer";
import { taskReducer, initialState } from "./reducers/taskReducer";
import './app.css'

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { time, start, pause, clear } = useTaskTimer();

  const handleAdd = (name) => dispatch({ type: "ADD_TASK", payload: name });

  const handleStart = (id) => {
    clear();
    dispatch({ type: "START_TASK", payload: id });
    start();
  };

  const handlePause = () => {
    pause();
    dispatch({ type: "PAUSE_TASK" });
  };

  const handleComplete = (id) => {
    clear();
    dispatch({ type: "COMPLETE_TASK", payload: id });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">🧠 Smart Task Timer</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskList
        tasks={state.tasks}
        activeTaskId={state.activeTaskId}
        time={time}
        onStart={handleStart}
        onPause={handlePause}
        onComplete={handleComplete}
      />
    </div>
  );
}

export default App;
