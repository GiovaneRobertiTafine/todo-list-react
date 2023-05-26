import React, { useEffect, useState } from 'react';
import './todo-list-itens.component.css';
import { TodoListItensComponentModel } from '../../model/components-interfaces/todo-list-itens-component-model.interface';
import { ItemTodoList } from '../../model/interfaces/item-todo-list.interface';

function TodoListItensComponent({ items, handlerUpdateListItem, handlerDeleteListItem }: TodoListItensComponentModel) {
    const [editCurrent, setEditCurrent] = useState<string | null>(null);

    const changeItemCompleted = (item: ItemTodoList) => {
        item.completed = !item.completed;
        handlerUpdateListItem(item);
    };

    const changeItemEdit = (item: ItemTodoList) => {
        setEditCurrent(null);
        item.value = (document.getElementById('edit-item-value-input') as HTMLInputElement)?.value;
        handlerUpdateListItem(item);
    };

    useEffect(() => {
        setEditCurrent(null);
    }, [items]);

    return (
        <div>
            <ul style={{ 'listStyle': 'none' }}>
                {
                    items.map((v, index) => {
                        return (
                            <li key={index}>
                                <input type="checkbox" name={'completed' + index} id={'item' + v.id} checked={v?.completed}
                                    onChange={() => changeItemCompleted(v)} />
                                {
                                    editCurrent === v.id ?
                                        (
                                            <>
                                                <input type="text" id='edit-item-value-input' defaultValue={v.value} />
                                                <button onClick={() => changeItemEdit(v)}>Save</button>
                                            </>
                                        ) :
                                        (
                                            <>
                                                <span className={(v?.completed ? 'item-completed' : '')}>{v.value} </span>
                                                <button onClick={() => editCurrent ? setEditCurrent(null) : setEditCurrent(v.id)}>Edit</button>
                                            </>
                                        )
                                }
                                <button onClick={() => handlerDeleteListItem(v.id)}>X</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default TodoListItensComponent;