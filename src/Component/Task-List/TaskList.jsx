import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { updateTask } from "../../store/task-slice";

import "./taskList.css";

const TaskList = ({ data }) => {
  const { id, title, description } = data;
  const dispatch = useDispatch();

  const update = () => {
    dispatch(updateTask(data));
  };

  return (
    <div className="container-list" key={id}>
      <div className="list-txt">
        <h1 className="title-list">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="btn-list">
        <Button
          variant="contained"
          color="success"
          sx={{ color: "white" }}
          onClick={update}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ margin: "12px", color: "white" }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default TaskList;
