import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo({ task, priority, deadline, completed: false });
    setTask("");
    setPriority("Low");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
