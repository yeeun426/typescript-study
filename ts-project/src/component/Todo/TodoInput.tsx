import { FC, useRef, useState } from "react";
import { TodoInputStyle, InsertForm } from "@component/Todo/style";
import { initialTodos } from "@assets/json/todolist";
import { Todos } from "@interfaces/Todos";
import { MdAddCircle } from "react-icons/md";

interface TodoInputProps {
  todoList: Todos[];
  setTodoList: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoInput: FC<TodoInputProps> = ({ todoList, setTodoList }) => {
  const [open, setOpen] = useState(true);
  const [textValue, setTextValue] = useState("");
  const nextId = useRef(initialTodos.length + 1);

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
      setOpen(false);
    }
  };

  // const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <TodoInputStyle>
      {open && (
        <InsertForm>
          <input
            type="text"
            onChange={onChange}
            value={textValue}
            placeholder="할 일을 입력 후, Enter를 누르세요"
            onKeyDown={onSubmit}
          />
        </InsertForm>
      )}
      <button>
        <MdAddCircle />
      </button>
    </TodoInputStyle>
  );
};

export default TodoInput;
