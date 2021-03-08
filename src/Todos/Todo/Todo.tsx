import React, { FC } from "react";

interface TodoProps {
  text: string;
}

export const Todo: FC<TodoProps> = (props) => {
  return <div>{props.text}</div>;
};
