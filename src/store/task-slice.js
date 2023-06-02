import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  selectedTask: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      const newTask = action.payload;
      state.tasks.push({
        ...newTask,
        id: Date.now(),
        title: newTask.title,
        description: newTask.description,
      });
    },
    updateTask(state, action) {
      const taskId = action.payload;
      const indexOf = state.tasks.findIndex((task) => task.id === taskId.id);
      if (indexOf !== -1) {
        state.tasks[indexOf] = taskId;
      }
      state.selectedTask = null;
    },
    deleteTask(state, action) {
      const taskId = action.payload;
      const removeTask = state.tasks.filter((item) => item.id !== taskId);
      state.tasks = removeTask;
    },
    setSelectedTask(state, action) {
      const taskId = action.payload;
      console.log(
        "payloa",
        state.tasks.find((task) => task.id === taskId)
      );
      state.selectedTask = state.tasks.find((task) => task.id === taskId);
    },
  },
});

export const tasksReducer = taskSlice.reducer;
export const { addTask, updateTask, deleteTask, setSelectedTask } =
  taskSlice.actions;
