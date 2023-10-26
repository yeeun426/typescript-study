import { FC, useEffect, useRef, useState } from "react";
import { TodoInputStyle, InsertForm } from "@component/Todo/style";
import { initialTodos } from "@assets/json/todolist";
import { Todos } from "@interfaces/Todos";

interface TodoInputProps {
  todoList: Todos[];
  setTodoList: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoInput: FC<TodoInputProps> = ({ todoList, setTodoList }) => {
  const [open, setOpen] = useState(true);
  const [textValue, setTextValue] = useState("");
  const nextId = useRef(initialTodos.length + 1);
  //   const [todoList, setTodoList] = useState<Todos[]>(initialTodos);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newList: Todos = {
        id: nextId.current,
        text: textValue,
        endTime: "9:00",
        category: "works",
        done: false,
        detail: [],
      };
      setTodoList([...todoList, newList]);
      setTextValue("");
      nextId.current++;
      //   setOpen(false);
    }
  };

  return (
    <>
      {open && (
        <form>
          <InsertForm>
            <input
              type="text"
              onChange={onChange}
              value={textValue}
              placeholder="입력"
              onKeyDown={onSubmit}
            />
          </InsertForm>
        </form>
      )}
      {/* <button onClick={onToggle} open={open}>
        <MdAdd />
      </button> */}
    </>
  );
};

export default TodoInput;
