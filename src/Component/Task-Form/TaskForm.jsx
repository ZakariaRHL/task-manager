import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import "./taskForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/task-slice";
import TaskList from "../Task-List/TaskList";

const TaskForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset();
  };

  return (
    <form className="form-task" onSubmit={handleSubmit(onSubmit)}>
      <div className="container-task">
        <div className="input-task">
          <div className="form-input">
            <label style={{ padding: "8px" }}> Title</label>
            <input
              className="inputs"
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="form-input">
            <label style={{ padding: "8px" }}> Description</label>
            <input
              className="inputs"
              type="text"
              placeholder="Description"
              {...register("description", { required: true })}
            />
          </div>
        </div>
        <div className="btn-task">
          <Button
            variant="contained"
            color="success"
            sx={{ color: "white" }}
            type="submit"
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ margin: "12px", color: "white" }}
          >
            Cancel
          </Button>
        </div>
      </div>
      <section className="section-list">
        {tasks?.map((task) => (
          <TaskList data={task} key={task.id} />
        ))}
      </section>
    </form>
  );
};

export default TaskForm;
