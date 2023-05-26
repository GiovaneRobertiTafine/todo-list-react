import React, { useState } from 'react';
import { TodoListCreateComponentModel } from '../../model/components-interfaces/todo-list-create-component-model.interface';

function TodoListCreateComponent({ handlerItemCreate }: TodoListCreateComponentModel) {
    const [itemInput, setItemInput] = useState<string>('');
    const [idCurrent, setIdCurrent] = useState<number>(0);

    const addItem = () => {
        if (itemInput) {
            handlerItemCreate({ id: idCurrent.toString(), value: itemInput, completed: false });
            setItemInput('');
            setIdCurrent(idCurrent + 1);
        }
    };

    return (
        <div>
            <input type="text" value={itemInput} onChange={(e) => setItemInput(e.target.value)} />
            <button onClick={() => addItem()}>Add</button>
        </div>
    );
}

export default TodoListCreateComponent;