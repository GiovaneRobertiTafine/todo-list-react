import React, { useEffect, useMemo, useState } from 'react';
import { TodoListFilterComponentModel } from '../../model/components-interfaces/todo-list-filter-component-model.interface';
import { StatusFiltroTodoList } from '../../model/enum/status-filtro-todo-list.enum';

function TodoListFilterComponent({ items, handlerItemsFiltered, initialFilter }: TodoListFilterComponentModel) {
    const [filterValue, setFilterValue] = useState<StatusFiltroTodoList>((initialFilter as StatusFiltroTodoList));
    const filters = useMemo(() => {
        return Object.values(StatusFiltroTodoList)
            .filter((v) => isNaN(Number(v)))
            .map((v) => {
                let normalizedName = (v + '').toLowerCase();
                normalizedName = normalizedName.substring(0, 1).toUpperCase() + normalizedName.substring(1);
                const obj = {
                    name: normalizedName,
                    value: (StatusFiltroTodoList as any)[v]
                };
                return obj;
            });
    }, []);

    useEffect(() => {
        itensFilteredStatus(filterValue);
    }, [items]);

    useEffect(() => {
        itensFilteredStatus(filterValue);
    }, [filterValue]);

    const itensFilteredStatus = (value: StatusFiltroTodoList) => {
        switch (value) {
            case StatusFiltroTodoList.ALL:
                handlerItemsFiltered(items);
                break;
            case StatusFiltroTodoList.COMPLETED:
                handlerItemsFiltered(items.filter(v => v.completed === true));
                break;
            case StatusFiltroTodoList.PENDING:
                handlerItemsFiltered(items.filter(v => v.completed === false));
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <label htmlFor="filtro-select">Filtro Status:</label>
            <select name="filtro-select" id="filtro" onChange={(e) => { setFilterValue(+e.target.value); }} defaultValue={filterValue}>
                {
                    filters.map((v) => {
                        return (
                            <option key={v.value} value={v.value}>{v.name}
                            </option>
                        );

                    })
                }
            </select>
        </div>
    );
}

export default TodoListFilterComponent;