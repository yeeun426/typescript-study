import { FC } from "react";
import CalendarComponent from "@component/main/CalendarContent";
import Todo from "@pages/Todo/index";
import MainTemplate from "@pages/main/style";

const Main: FC = () => {
  return (
    <MainTemplate>
      <CalendarComponent />
      <Todo />
    </MainTemplate>
  );
};

export default Main;
