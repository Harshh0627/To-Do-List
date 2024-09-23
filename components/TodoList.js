import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Save todos to local storage whenever the todos array changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (todoToUpdate) => {
    setTodos(
      todos.map((todo) =>
        todo === todoToUpdate ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (todoToRemove) => {
    setTodos(todos.filter((todo) => todo !== todoToRemove));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
