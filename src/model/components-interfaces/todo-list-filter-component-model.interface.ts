import { StatusFiltroTodoList } from "../enum/status-filtro-todo-list.enum";
import { ItemTodoList } from "../interfaces/item-todo-list.interface";

export interface TodoListFilterComponentModel {
    items: ItemTodoList[];
    initialFilter?: string | number;
    handlerItemsFiltered: (items: ItemTodoList[]) => void;
}