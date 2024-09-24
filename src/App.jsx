import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask (){
    if (newTask.length > 5) {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
    } else {
      alert(" kamida 6 belgidan iborat bo'lishi kerak!");
    }
  };

  function deleteTask (index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-blue-300 min-h-screen text-white flex flex-col items-center p-6">
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Add a new task"
          className="border border-gray-600 rounded-l-md p-2 bg-smoke-100 text-black"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-purple-500 px-4 py-2 rounded-r-md hover:bg-purple-700">
          Add
        </button>
      </div>

      <div className="w-full max-w-md">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-blue-800 p-4 mb-2 rounded-md shadow">
            <span className={task.done ? "line-through text-gray-500" : ""}>
              {task.text}
            </span>
            <div className="flex space-x-2">
              <button onClick={() => deleteTask(index)} className="text-white bg-red-600 px-3 pt-3 text-center">
              🗑Deleted
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
