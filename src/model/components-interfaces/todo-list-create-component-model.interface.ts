import { ItemTodoList } from "../interfaces/item-todo-list.interface";

export interface TodoListCreateComponentModel {
    handlerItemCreate: (item: ItemTodoList) => void;
}