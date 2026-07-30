import React from 'react';
import { UserInfo } from '../UserInfo';
import { User } from '../../App';
import { TodoInfo } from '../TodoInfo';

type Todos = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  user?: User;
};

type P = {
  todos: Todos[];
};

export const TodoList: React.FC<P> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};
