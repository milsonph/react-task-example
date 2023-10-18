import { createContext, useState, useEffect } from "react";
import { task } from "../data/task.js";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(task.length);
  
  useEffect(() => {
    setTasks(task);
  }, []);

  function createTask(data) {
    setTasks([...tasks, data]);
    setTaskId(taskId + 1);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((tasks) => tasks.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskId,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
