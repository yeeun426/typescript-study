export interface Todos {
  id: number;
  text: string;
  endTime?: string;
  category: string;
  done: boolean;
  detail: DetailTodos[];
}

export interface DetailTodos {
  id: number;
  text: string;
  done: boolean;
}
