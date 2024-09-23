import React from "react";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.task} - {todo.priority} Priority (Due: {todo.deadline})
      </span>
      <button onClick={() => removeTodo(todo)}>Delete</button>
    </div>
  );
};

export default TodoItem;
