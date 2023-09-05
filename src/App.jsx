import { v4 as uuid } from 'uuid';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  const [title, setTitle] = useState(''); // 제목 저장
  const [content, setContent] = useState(''); // 내용 저장

  const saveTitle = (event) => {
    setTitle(event.target.value);
  };

  const saveContent = (event) => {
    setContent(event.target.value);
  };

  const saveTodo = () => {
    const todo = { id: uuid(), title: title, content: content, isDone: false };
    dispatch({ type: 'TODO_ADD', payload: todo });
  };

  const deleteTodo = (id) => {
    // const filteredTodoList = todos.filter((todo) => todo.id !== id);
    // setTodoList(filteredTodoList);
    dispatch({ type: 'TODO_DELETE', payload: id });
  };

  const updateTodo = (id) => {
    // const updateTodoList = todos.map((todo) => {
    //   if (todo.id === id) todo = { ...todo, isDone: !todo.isDone };
    //   return todo;
    // });
    // setTodoList(updateTodoList);
    dispatch({ type: 'TODO_UPDATE', payload: id });
  };

  return (
    <div>
      <div className="title">
        제목
        <input onChange={saveTitle} />
        내용
        <input onChange={saveContent} />
        <button onClick={saveTodo}>추가하기</button>
      </div>
      <div>
        <div>Working.. 🔥</div>
        {todos
          .filter((value) => !value.isDone)
          .map((todo) => (
            <Todo
              key={todo.id}
              todoList={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        <div>Done..! 🎉</div>
        {todos
          .filter((value) => value.isDone)
          .map((todo) => (
            <Todo
              key={todo.id}
              todoList={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
      </div>
    </div>
  );
}
export default App;
