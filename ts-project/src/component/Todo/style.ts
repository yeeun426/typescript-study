import styled from "styled-components";

const TodoHeaderStyled = styled.div`
  padding: 48px 32px 20px;
  border-bottom: 1px solid #e9ecef;

  .todo-date {
    font-size: 26px;
    font-weight: bold;
    margin: 10px 0;
  }
  .todo-day {
    margin-top: 4px;
    color: #868e96;
    font-size: 20px;
  }

  .todo-remain {
    color: #7a20c9;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoListStyled = styled.div`
  padding: 20px 25px;
  padding-bottom: 48px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TodoItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  .todo-checkbox {
    width: 25px;
    height: 25px;
    border-radius: 16px;
    font-size: 24px;
    cursor: pointer;
    border: 1px solid #a938d9;
    color: #a938d9;
  }

  .todo-content {
    flex: 1;
    font-size: 18px;
    color: #495057;
  }
`;

const TodoDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 44px;
  padding-top: 10px;

  .todo-detail-checkbox {
    width: 15px;
    height: 15px;
    border: 1px solid #a938d99c;
    cursor: pointer;
  }

  .todo-detail {
    align-items: center;
    display: flex;
    gap: 10px;
  }
`;

const TodoInputStyle = styled.div`
  padding: 0 20px 30px;
  button {
    background: none;
    border: none;
  }
`;

const InsertForm = styled.div`
  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
  }
`;

export {
  TodoHeaderStyled,
  TodoListStyled,
  TodoItem,
  TodoDetailItem,
  InsertForm,
  TodoInputStyle,
};
