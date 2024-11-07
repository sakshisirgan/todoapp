import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const TodoList = ({
  todos,
  selectedTodos,
  onToggleDone,
  onDeleteTodo,
  onToggleSelectTodo,
  onEditTodo,
  onMoveUp,
  onMoveDown
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isSelected={selectedTodos.includes(todo.id)}
          onToggleDone={onToggleDone}
          onDeleteTodo={onDeleteTodo}
          onToggleSelectTodo={onToggleSelectTodo}
          onEditTodo={onEditTodo}
          onMoveUp={() => onMoveUp(index)} // Pass the index for move up
          onMoveDown={() => onMoveDown(index)} // Pass the index for move down
          isFirst={index === 0}
          isLast={index === todos.length - 1}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  selectedTodos: PropTypes.arrayOf(PropTypes.number).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleSelectTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onMoveUp: PropTypes.func.isRequired,
  onMoveDown: PropTypes.func.isRequired,
};

export default TodoList;
