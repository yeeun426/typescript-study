import React from "react";
import { TodoTemplate } from "@pages/Todo/style";
import TodoHeader from "@component/Todo/TodoHeader";
import TodoList from "@component/Todo/TodoList";

function Todo() {
  return (
    <TodoTemplate>
      <TodoHeader />
      <TodoList />
    </TodoTemplate>
  );
}

export default Todo;
