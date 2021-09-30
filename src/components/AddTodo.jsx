import React from 'react';

const AddTodo = ({ setTodoTitle, handleAddTodo, todoTitle }) => {
    return (
        <div className="flex w-full mb-5 px-5">
            <input 
                type="text"
                className="w-3/4 p-2 text-black"
                onChange={(e) => setTodoTitle(e.target.value)}
                value={todoTitle}
            />
            <button className="bg-orange w-1/4" onClick={handleAddTodo}>Add Task</button>
        </div>
    );
};

export default AddTodo;