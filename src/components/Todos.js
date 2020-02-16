import React, { Fragment, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../actions/todos.actions";

const Todos = () => {
  const [value, setValue] = useState("");

  const todos = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();

  const onClick = () => {
    if (value) {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <Fragment>
      {todos.map(todo => (
        <div key={todo}>{todo}</div>
      ))}
      <input type='text' value={value} onChange={e => setValue(e.target.value)} />
      <button className='btn btn-primary' onClick={onClick}>
        Add Todo
      </button>
    </Fragment>
  );
};

export default Todos;
