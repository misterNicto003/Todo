import React, { useState } from "react";
import "./Todo.css";

const colors = [
  {
    id: 1,
    color: "#fc9d9d",
  },
  {
    id: 2,
    color: "#bd55ed",
  },
  {
    id: 3,
    color: "#9055ed",
  },
  {
    id: 4,
    color: "#7455ed",
  },
  {
    id: 5,
    color: "#55caed",
  },
  {
    id: 6,
    color: "#55ede3",
  },
  {
    id: 7,
    color: "#55edca",
  },
  {
    id: 8,
    color: "#6515cf",
  },
  {
    id: 9,
    color: "#578a53",
  },
];
export const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [changeColor, setChangeColor] = useState();

  const addTodo = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      return alert("Введите текст");
    }

    const newTodo = {
      id: todos.length + 1,
      text: text,
      iscompleted: false,
      color: changeColor?.color,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  const handleChange = (e) => {
    const abu = {
      id: Math.random(),
      text: text,
    };
    setText(e.target.value);
  };

  const hangleIscomplit = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, iscompleted: !todo.iscompleted };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const deleteIscomplit = (id) => {
    console.log(id);

    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const handleChangeColor = (todo, index) => {
    const newTodo = {
      color: todo,
      idx: index,
    };

    setChangeColor(newTodo);
  };

  return (
    <div className="todo">
      <form className="todo_form">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={addTodo}>Добавить</button>
      </form>
      <div className="todo_colors">
        {colors.map((todo, index) => (
          <div
            key={todo.color}
            style={{
              background: todo.color,
              border:
                changeColor?.idx === index
                  ? "3px solid #000"
                  : "3px solid transparent",
            }}
            onClick={() => handleChangeColor(todo.color, index)}
          ></div>
        ))}
      </div>
      <ul className="todo_list">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{ background: todo.color ? todo.color : "" }}
            >
              <span className={`${todo.iscompleted && "completed"}`}>
                {todo.text}
              </span>
              <div>
                <button onClick={() => hangleIscomplit(todo.id)}>
                  Завершить
                </button>
                <button onClick={() => deleteIscomplit(todo.id)}>
                  Удалить
                </button>
              </div>
            </li>
          ))
        ) : (
          <h1>задач пока нет</h1>
        )}
      </ul>
    </div>
  );
};
