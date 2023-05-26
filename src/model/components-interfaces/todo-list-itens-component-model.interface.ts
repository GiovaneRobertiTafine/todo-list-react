import { ItemTodoList } from "../interfaces/item-todo-list.interface";

export interface TodoListItensComponentModel {
    items: ItemTodoList[];
    handlerUpdateListItem: (items: ItemTodoList) => void;
    handlerDeleteListItem: (id: string) => void;
}