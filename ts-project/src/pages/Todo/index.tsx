import React from "react";
import {
  TodoTemplate,
  TodoList,
  TodoHeader,
  TodoItem,
} from "@pages/Todo/style";

function Todo() {
  return (
    <TodoTemplate>
      <TodoHeader>
        <h1 className="todo-date">2023년 10월 23일</h1>
        <div className="todo-day">월요일</div>
        <div className="todo-remain">할 일 2개 남음</div>
      </TodoHeader>
      <TodoList>
        <TodoItem>
          <div className="todo-checkbox"></div>
          <div className="todo-content">아침 산책</div>
        </TodoItem>
        <TodoItem>
          <div className="todo-checkbox"></div>
          <div className="todo-content">오늘의 뉴스 읽기</div>
        </TodoItem>
        <TodoItem>
          <div className="todo-checkbox"></div>
          <div className="todo-content">샌드위치 사먹기</div>
        </TodoItem>
        <TodoItem>
          <div className="todo-checkbox"></div>
          <div className="todo-content">리액트 공부하기</div>
        </TodoItem>
      </TodoList>
    </TodoTemplate>
  );
}

export default Todo;
