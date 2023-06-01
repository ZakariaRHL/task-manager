import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./task-slice";

export const store = configureStore({ reducer: tasksReducer });
