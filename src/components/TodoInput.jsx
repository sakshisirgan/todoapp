// TodoInput.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText(''); // Clear the input after adding
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo(); // Add todo when "Enter" key is pressed
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress} // Listen for "Enter" key press
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTodo} className="add-button">Add</button>
    </div>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
