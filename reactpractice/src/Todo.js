import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDoneAll } from "react-icons/md";
const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer px-3`,
  buttons: `flex `,
  edit: `flex justify-between bg-white`,
};

const Todo = ({ todo, editTodo, toggleComplete, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo, text);
    setIsEditing(false);
  };

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        {isEditing ? (
          <div className={style.edit}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="border-l border-black px-2" onClick={handleEdit}>
              {<MdOutlineDoneAll />}
            </button>
          </div>
        ) : (
          <p
            onClick={() => toggleComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            {text}
          </p>
        )}
      </div>
      <div className={style.buttons}>
        <button onClick={() => setIsEditing(true)} className={style.button}>
          {<BiEdit />}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className={style.button}>
          {<FaRegTrashAlt />}
        </button>
      </div>
    </li>
  );
};

export default Todo;
