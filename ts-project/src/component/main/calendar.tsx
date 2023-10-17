import { FC, useEffect } from "react";
import Calendar from "@toast-ui/calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "@toast-ui/calendar/dist/toastui-calendar.css";

const CalendarContent: FC = () => {
  useEffect(() => {
    const calendar = new Calendar("#calendar", {
      defaultView: "month",
      useFormPopup: true,
    });

    // 샘플 스케줄 추가
    calendar.createEvents([
      {
        id: "1",
        calendarId: "1",
        title: "Sample Event",
        category: "time",
        dueDateClass: "",
        start: "2023-10-17T09:00:00",
        end: "2023-10-17T10:00:00",
      },
    ]);
  }, []);
  return (
    <div>
      <div id="calendar"></div>
    </div>
  );
};
export default CalendarContent;
