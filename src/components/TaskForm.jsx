import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask, taskId} = useContext(TaskContext);
  

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: taskId,
      title,
      description,
    };
    createTask(newTask);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-700 p-2 mb-2">
        <h1 className="text-2xl text-white font-bold text-center mb-2">Crear nueva tarea</h1>
      <input
        type="text"
        placeholder="escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-300 focus:bg-slate-50 w-full mb-2 rounded-sm"
      />
      <input
        type="textArea"
        placeholder="descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 focus:bg-slate-50 w-full mb-2 rounded-sm"
      />
      <button className="bg-gray-500 text-gray-200 px-2 py-1 mt-2 rounded hover:bg-gray-400">Guardar</button>
    </form>
    </div>
  );
}
