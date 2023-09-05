import './App.css';

const Todo = ({ todoList, deleteTodo, updateTodo }) => {
  return (
    <div className="todoContainer">
      <div>{todoList.title}</div>
      <div>{todoList.content}</div>
      <button onClick={() => deleteTodo(todoList.id)}>삭제하기</button>
      <button onClick={() => updateTodo(todoList.id)}>
        {todoList.isDone ? '취소' : '완료'}
      </button>
    </div>
  );
};

export default Todo;
