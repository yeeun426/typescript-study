export const initialTodos = [
  {
    id: 1,
    text: "typescript 공부",
    endtime: "19:00",
    category: "works",
    done: false,
    detail: [
      { id: 1, text: "투두리스트 기능 구현", done: false },
      { id: 2, text: "캘린더 기능 깔짝여보기", done: false },
    ],
  },
  {
    id: 2,
    text: "우테코",
    endtime: "12:30",
    category: "works",
    done: true,
    detail: [
      { id: 1, text: "3번째 기능 구현", done: true },
      { id: 2, text: "4번째 기능 구현", done: true },
    ],
  },
  {
    id: 3,
    text: "redux-saga 블로그 작성",
    endtime: "19:00",
    category: "works",
    done: false,
  },
  {
    id: 4,
    text: "집에 가기",
    endtime: "21:00",
    category: "personal",
    done: false,
  },
  {
    id: 5,
    text: "끝내주게 자기",
    endtime: "",
    category: "personal",
    done: false,
  },
];
