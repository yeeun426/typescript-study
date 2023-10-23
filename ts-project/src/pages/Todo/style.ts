import styled from "styled-components";

const TodoTemplate = styled.div`
  height: 600px;
  width: 380px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`;

const TodoHeader = styled.div`
  padding: 48px 32px 20px;
  border-bottom: 1px solid #e9ecef;

  .todo-day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .todo-remain {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoList = styled.div`
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TodoItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  .todo-checkbox {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    font-size: 24px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    cursor: pointer;
    border: 1px solid #38d9a9;
    color: #38d9a9;
  }

  .todo-content {
    flex: 1;
    font-size: 21px;
    color: #495057;
  }
`;

export { TodoTemplate, TodoHeader, TodoList, TodoItem };
