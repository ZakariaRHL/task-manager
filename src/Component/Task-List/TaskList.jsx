import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, deleteTask } from "../../store/task-slice";

import "./taskList.css";

const TaskList = ({ data, handleEdit }) => {
  const { id, title, description } = data;
  const dispatch = useDispatch();

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
          onClick={handleEdit}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ margin: "12px", color: "white" }}
          onClick={() => dispatch(deleteTask(id))}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default TaskList;
