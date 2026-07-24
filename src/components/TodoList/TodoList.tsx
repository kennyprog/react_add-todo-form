import React from "react";
import { UserInfo } from "../UserInfo";

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <article
          key={todo.id}
          data-id={todo.id}
          className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
        >
          <h2 className="TodoInfo__title">{todo.title}</h2>
          <UserInfo user={todo.user} />
        </article>
      ))}
    </section>
  );
};
