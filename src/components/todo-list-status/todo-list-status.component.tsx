import React, { useEffect, useState } from 'react';
import { TodoListStatusComponentModel } from '../../model/components-interfaces/todo-list-status-component-model.interface';

function TodoListStatusComponent({ items }: TodoListStatusComponentModel) {
    const [totalItems, setTotalItems] = useState<number>(0);
    const [itemsCompleted, setItemsCompleted] = useState<number>(0);
    const [itemsNotCompleted, setItemsNotCompleted] = useState<number>(0);
    const [percentCompleted, setPercentCompleted] = useState<number>(0);

    useEffect(() => {
        setTotalItems(items.length);
        setItemsCompleted(items.filter(v => v.completed).length);
        setItemsNotCompleted(items.filter(v => !v.completed).length);
        if (!items.length) {
            setPercentCompleted(0);
        } else {
            setPercentCompleted(+((items.filter(v => v.completed).length * 100) / items.length).toFixed(1));
        }
    }, [items]);

    return (
        <div>
            <ul>
                <li><strong>Total de items: </strong> <span>{totalItems}</span></li>
                <li><strong>Items completed: </strong> <span>{itemsCompleted}</span></li>
                <li><strong>Items not completed: </strong> <span>{itemsNotCompleted}</span></li>
                <li><strong>Percent completed: </strong> <span>{percentCompleted}%</span></li>
            </ul>
        </div>
    );
}

export default TodoListStatusComponent;