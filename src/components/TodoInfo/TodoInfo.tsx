import React from "react";
import { UserInfo } from "../UserInfo";

export const TodoInfo = ({ todo }) => {
  <article data-id={todo.id} className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
};
