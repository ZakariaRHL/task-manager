import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
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
      const taskId = action.payload.id;
      state.tasks.findIndex((task) => task.id === taskId);
    },
  },
});

export const tasksReducer = taskSlice.reducer;
export const { addTask, updateTask } = taskSlice.actions;
