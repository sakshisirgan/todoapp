import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = { id: Date.now(), text, done: false };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const deleteSelectedTodos = () => {
    setTodos(todos.filter(todo => !selectedTodos.includes(todo.id)));
    setSelectedTodos([]); // Clear selected todos after deletion
  };

  const toggleSelectTodo = (id) => {
    setSelectedTodos((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((todoId) => todoId !== id)
        : [...prevSelected, id]
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  const markAllAsDone = () => {
    setTodos(todos.map(todo => ({ ...todo, done: true })));
  };

  const clearAll = () => {
    setTodos([]);
  };

  const onMoveUp = (index) => {
    if (index === 0) return; // Don't move up if it's already the first item
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[index - 1];
    newTodos[index - 1] = temp;
    setTodos(newTodos);
  };

  const onMoveDown = (index) => {
    if (index === todos.length - 1) return; // Don't move down if it's already the last item
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[index + 1];
    newTodos[index + 1] = temp;
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        selectedTodos={selectedTodos}
        onToggleDone={toggleDone}
        onDeleteTodo={deleteTodo}
        onToggleSelectTodo={toggleSelectTodo}
        onEditTodo={(id, newText) => {
          setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
        }}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
      />
      <div className="actions">
        <button className="action-button" onClick={deleteSelectedTodos}>Delete Selected</button>
        <button className="action-button" onClick={clearCompleted}>Clear Completed</button>
        <button className="action-button" onClick={markAllAsDone}>Mark All as Done</button>
        <button className="action-button" onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
};

export default App;
