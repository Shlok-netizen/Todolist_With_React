import styles from './TodoItems.module.css';
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems ,onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
