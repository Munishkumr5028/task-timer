export const initialState = {
  tasks: [],
  activeTaskId: null,
};

export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), name: action.payload, completed: false },
        ],
      };
    case "START_TASK":
      return { ...state, activeTaskId: action.payload };
    case "PAUSE_TASK":
      return { ...state, activeTaskId: null };
    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: true } : task
        ),
        activeTaskId: null,
      };
    default:
      return state;
  }
}
