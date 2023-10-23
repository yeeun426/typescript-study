import { FC, useEffect } from "react";
import Calendar from "@toast-ui/calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { CalendarStyle } from "./style";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

const CalendarContent: FC = () => {
  useEffect(() => {
    const calendar = new Calendar("#calendar", {
      defaultView: "month",
      useDetailPopup: true,
      useFormPopup: true,
      usageStatistics: false,
      month: {
        isAlways6Weeks: false,
      },
    });

    // 샘플 스케줄 추가
    calendar.createEvents([
      {
        id: "1",
        calendarId: "1",
        title: "연차",
        start: "2023-10-19",
        end: "2023-10-19",
        isAllday: true,
        category: "allday",
      },
      {
        id: "2",
        calendarId: "2",
        title: "재택",
        start: "2023-10-20",
        end: "2023-10-20",
        isAllday: true,
        category: "allday",
      },
    ]);
  }, []);

  return (
    <CalendarStyle>
      <div id="calendar"></div>
    </CalendarStyle>
  );
};
export default CalendarContent;
