import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class TodoService {
  public get(todoId: string): Todo {
    return {
      id: todoId,
      title: "mock title",
      description: "modk todo",
      done: false,
    };
  }

  public create(TodoCreationParams: TodoCreationParams): Todo {
    return {
      id: "1", // Random
      title: "mock title",
      description: "modk todo",
      done: false,
    };
  }
}
