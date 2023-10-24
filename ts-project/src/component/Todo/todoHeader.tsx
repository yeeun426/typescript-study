import React from "react";
import { TodoHeaderStyled } from "@pages/Todo/style";

function TodoHeader() {
  return (
    <TodoHeaderStyled>
      <div className="todo-date">2023년 10월 23일</div>
      <div className="todo-day">월요일</div>
      <div className="todo-remain">할 일 2개 남음</div>
    </TodoHeaderStyled>
  );
}

export default TodoHeader;
