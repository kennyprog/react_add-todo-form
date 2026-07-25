import React from 'react';
import { UserInfo } from '../UserInfo';
import { User } from '../../App';

type Todos = {
  id: number,
  title: string,
  completed: boolean,
  userId: number,
  user?: User
}

type P = {
  todos: Todos[]
}

export const TodoList: React.FC<P> = ({ todos }) => {
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
