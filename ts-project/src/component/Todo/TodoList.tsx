import { FC, useEffect, useRef, useState } from "react";
import { Todos } from "@interfaces/Todos";
import {
  TodoListStyled,
  TodoItem,
  TodoDetailItem,
} from "@component/Todo/style";
import { initialTodos } from "@assets/json/todolist";
import TodoInput from "@component/Todo/TodoInput";

const TodoList: FC = () => {
  const [todoList, setTodoList] = useState<Todos[]>(initialTodos);

  return (
    <>
      <TodoListStyled>
        {todoList.map((items) => (
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
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
};

export default TodoList;
