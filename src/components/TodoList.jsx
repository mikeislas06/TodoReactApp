import React from 'react';

const TodoList = ({ children }) => {
    return (
        <div className="bg-white min-h-73 px-10 rounded-tl-50 pt-6">
            <h2 className="text-black text-3xl underline">Tasks</h2>
            { children }
        </div>
    );
};

export default TodoList;