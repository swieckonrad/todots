import React, { FC } from "react";
import { TodosType } from "../App";
import { Todo } from "./Todo/Todo";

interface TodosProps {
  todos: TodosType;
}

export const Todos: FC<TodosProps> = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <Todo key={todo} text={todo} />
      ))}
    </div>
  );
};
