"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mock title",
            description: "modk todo",
            done: false,
        };
    }
    create(TodoCreationParams) {
        return {
            id: "1",
            title: "mock title",
            description: "modk todo",
            done: false,
        };
    }
}
exports.TodoService = TodoService;
