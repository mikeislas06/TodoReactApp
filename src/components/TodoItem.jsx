import { stringify } from 'postcss';
import React from 'react';

const TodoItem = ({ title, status, index, todoArray, setTodoArray, filter }) => {

    const completeDeleteTodo = () => {
        const updatedTodos = [...todoArray];
        const updateLocalS = [...JSON.parse(localStorage.getItem("todoList"))];

        if(status){
            const deletedTodos = [...updatedTodos];
            //Add task to recycleBin in localStorage
            localStorage.setItem("recycleBin", JSON.stringify([...JSON.parse(localStorage.getItem("recycleBin")), deletedTodos[index]]));

            deletedTodos.splice(index, 1);
            setTodoArray(deletedTodos);

            //Delete completed task in Local Storage
            updateLocalS.splice(index, 1);
            localStorage.setItem("todoList", JSON.stringify(updateLocalS));

        }
        else{
            console.log(index);
            updatedTodos[index].status = true;
            setTodoArray(updatedTodos);
            
            //Update task status in Local Storage
            updateLocalS[index].status = true;
            localStorage.setItem("todoList", JSON.stringify(updateLocalS));
        }
    };

    return (
        <div className="flex justify-between items-center mt-5 border-b-2 border-orange py-2">
            <p className={`${status ? "line-through" : ""} w-3/4 text-black transition-all duration-100`}>{ title }</p>
            <div className="w-1/4">
                {
                    filter === "Recycle" ? <button className="button-shadow py-2 px-5 text-xs w-full text-black cursor-not-allowed">Completed</button> : 
                    <button onClick={completeDeleteTodo} className={`${status ? "text-red-600" : "text-green-500"} transition-all duration-100 button-shadow py-2 px-5 text-xs w-full`}>{status ? "Delete Task" : "Complete Task"}</button>
                }
            </div>
        </div>
    );
};

export default TodoItem;