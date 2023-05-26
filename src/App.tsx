import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TodoListFilterComponent from './components/todo-list-filter/todo-list-filter.component';
import { StatusFiltroTodoList } from './model/enum/status-filtro-todo-list.enum';
import TodoListCreateComponent from './components/todo-list-create/todo-list-create.component';
import { ItemTodoList } from './model/interfaces/item-todo-list.interface';
import TodoListItensComponent from './components/todo-list-itens/todo-list-itens.component';
import TodoListStatusComponent from './components/todo-list-status/todo-list-status.component';

function App() {
    const [items, setItems] = useState<ItemTodoList[]>([]);
    const [itemsFiltered, setItemsFiltered] = useState<ItemTodoList[]>([]);

    const handlerFilterValue = (items: ItemTodoList[]) => {
        setItemsFiltered(items);
    };

    const handlerItemCreate = (item: ItemTodoList) => {
        setItems([...items, item]);
    };

    const handlerUpdateListItem = (item: ItemTodoList) => {
        const itemsRef: ItemTodoList[] = items.map<ItemTodoList>(v => item.id === v.id ? v = item : v);
        setItems([...itemsRef]);
    };

    const handlerDeleteListItem = (id: string) => {
        const index: number = items.findIndex(v => v.id === id);
        items.splice(index, 1);
        setItems([...items]);
    };

    useEffect(() => {
        setItemsFiltered(items);
    }, []);

    return (
        <div className="App">
            <TodoListStatusComponent items={items} />
            <TodoListFilterComponent items={items} handlerItemsFiltered={handlerFilterValue} initialFilter={StatusFiltroTodoList.ALL} />
            <TodoListCreateComponent handlerItemCreate={handlerItemCreate} />
            <TodoListItensComponent items={itemsFiltered} handlerUpdateListItem={handlerUpdateListItem} handlerDeleteListItem={handlerDeleteListItem} />
        </div>
    );
}

export default App;
