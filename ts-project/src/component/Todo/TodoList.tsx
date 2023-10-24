import React from "react";
import { TodoListStyled, TodoItem, TodoDetailItem } from "@pages/Todo/style";
import { initialTodos } from "@assets/json/todolist";

function TodoList() {
  return (
    <TodoListStyled>
      {initialTodos.map((items) => (
        <div key={items.id}>
          <TodoItem>
            <div className="todo-checkbox"></div>
            <div className="todo-content">{items.text}</div>
          </TodoItem>
          <TodoDetailItem>
            {items.detail &&
              items.detail.map((detailItem) => (
                <div className="todo-detail" key={detailItem.id}>
                  <div className="todo-detail-checkbox"></div>
                  <div className="todo-content">{detailItem.text}</div>
                </div>
              ))}
          </TodoDetailItem>
        </div>
      ))}
    </TodoListStyled>
  );
}

export default TodoList;
