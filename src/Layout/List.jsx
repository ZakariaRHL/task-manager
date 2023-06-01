import React from "react";
import TaskList from "../Component/Task-List/TaskList";
import { useSelector } from "react-redux";

const List = () => {
  const tasks = useSelector((state) => state.task);
  return (
    <div>
      {tasks?.map((task) => (
        <TaskList data={task} />
      ))}
    </div>
  );
};

export default List;
