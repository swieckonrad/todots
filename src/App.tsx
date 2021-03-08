import React, { FC, FormEvent, FormEventHandler, useState } from "react";
import { Todo } from "./Todos/Todo/Todo";
import { Todos } from "./Todos/Todos";
import { TodoForm } from "./TodoForm/TodoForm";

// interface CompProps {
//   text: string
// }

// const Comp: FC<CompProps> = props => {
//   return <div>
//     Text: {props.text.toUpperCase()}
//   </div>
// }

export type TodosType = string[];

const App: FC = () => {
  const [todos, setTodos] = useState<TodosType>([]);
  const [inputText, setInputText] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (todos.includes(inputText)) {
      alert("You can't have two same todos");
    } else {
      setTodos((prev) => [...prev, inputText]);
    }
  };

  return (
    <div className="App">
      {/* <Comp text="aa"/> */}
      <TodoForm
        handleSubmit={handleSubmit}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
