import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({
  todo,
  onToggleDone,
  onDeleteTodo,
  onToggleSelectTodo,
  isSelected,
  onEditTodo,
  isFirst,
  isLast,
  onMoveUp,
  onMoveDown
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditClick = () => {
    if (isEditing) {
      onEditTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${todo.done ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggleSelectTodo(todo.id)}
        className="select-checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div className="button-group">
        <button className="move-button" onClick={onMoveUp} disabled={isFirst}>↑</button>
        <button className="move-button" onClick={onMoveDown} disabled={isLast}>↓</button>
        <button className="done-button" onClick={() => onToggleDone(todo.id)}>
          {todo.done ? 'Undo' : 'Done'}
        </button>
        <button className="edit-button" onClick={handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="delete-button" onClick={() => onDeleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleSelectTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onMoveUp: PropTypes.func.isRequired,
  onMoveDown: PropTypes.func.isRequired,
};

export default TodoItem;
