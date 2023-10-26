import React from "react";
import { TodoHeaderStyled } from "@component/Todo/style";

function TodoHeader() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = week[today.getDay()];

  return (
    <TodoHeaderStyled>
      <div className="todo-date">{formattedDate}</div>
      <div className="todo-day">{dayOfWeek}요일</div>
      <div className="todo-remain">할 일 2개 남음</div>
    </TodoHeaderStyled>
  );
}

export default TodoHeader;
