import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { FormEventHandler } from "react";

interface TodoFormProps {
  handleSubmit: FormEventHandler;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
}

export const TodoForm: FunctionComponent<TodoFormProps> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.inputText}
        onChange={(e) => props.setInputText(e.target.value)}
      />
      <button type="submit">CLICK</button>
    </form>
  );
};
