import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-slate-700 text-white p-3 rounded-md shadow-md">
      <h1 className="text-xl font-bold capitalize text-center">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        onClick={(e) => deleteTask(task.id)}
        className="bg-gray-500 text-gray-200 px-2 py-1 mt-2 rounded hover:bg-gray-400"
      >
        Eliminar Tarea
      </button>
    </div>
  );
}
