import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import "./taskForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, setSelectedTask, updateTask } from "../../store/task-slice";
import TaskList from "../Task-List/TaskList";

const TaskForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const selectedTask = useSelector((state) => state.selectedTask);
  const [isUpdate, setIsUpdate] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const titleWatch = watch("title");
  const describeWatch = watch("description");

  const onSubmit = (data) => {
    if (isUpdate) {
      dispatch(updateTask({ ...selectedTask, ...data }));
    } else {
      dispatch(addTask(data));
    }
    reset();
    setIsUpdate(false);
  };

  const handleEditTask = (task) => {
    setValue("title", task.title);
    setValue("description", task.description);
    dispatch(setSelectedTask(task.id));
    setIsUpdate(true);
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
          {titleWatch && describeWatch && (
            <Button
              variant="contained"
              color="error"
              sx={{ margin: "12px", color: "white" }}
              onClick={() => reset()}
            >
              Cancel
            </Button>
          )}
        </div>
      </div>
      <section className="section-list">
        {tasks?.map((task) => (
          <TaskList
            data={task}
            key={task.id}
            handleEdit={() => handleEditTask(task)}
          />
        ))}
      </section>
    </form>
  );
};

export default TaskForm;
