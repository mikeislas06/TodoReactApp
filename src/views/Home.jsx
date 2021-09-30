import React, { useState, useEffect } from 'react';

//Components
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import FilterTodo from '../components/FilterTodo';

// const list = [
//     {
//         title: "Alimentar Mandarina",
//         status: false,
//     },
//     {
//         title: "Estudiar JS",
//         status: true,
//     },
//     {
//         title: "Preparar la comida",
//         status: false,
//     },
// ]

const Home = () => {

    const [todoTitle, setTodoTitle] = useState("");
    const [todoArray, setTodoArray] = useState([]);
    const [filter, setFilter] = useState("All");

    const handleAddTodo = () => {
        if(todoTitle !== ""){
            setLocalStorage();
            setTodoArray([...todoArray, {title: todoTitle, status: false}]);
            setTodoTitle("");
        }
        else {
            alert("Task field is empty!");
        }
    };

    //Set local storage array for todoList
    const setLocalStorage = () => {
        const localArray = [...JSON.parse(localStorage.getItem("todoList"))];
        localStorage.setItem("todoList", JSON.stringify([...localArray, {title: todoTitle, status:false}]));
    };

    //Create localStorage item if not created yet and initialize it
    useEffect(() => {
        if(JSON.parse(localStorage.getItem("todoList")) && JSON.parse(localStorage.getItem("recycleBin"))){
            setTodoArray(JSON.parse(localStorage.getItem("todoList")));
        }
        else{
            setTodoArray(localStorage.setItem("todoList", JSON.stringify([])));
            setTodoArray(localStorage.setItem("recycleBin", JSON.stringify([])));
        }
    }, []);

    //Filter array 
    const renderSwitch = (state) => {
        switch(state){
            case "All":
                return(
                    JSON.parse(localStorage.getItem("todoList")).map((task, i) => (
                        <TodoItem title={task.title} status={task.status} index={i} todoArray={todoArray} setTodoArray={setTodoArray} filter={filter} key={i} />
                    ))
                )
            case "Completed":
                return(
                    JSON.parse(localStorage.getItem("todoList")).filter((task) => task.status === true).map((task, i) => (
                        <TodoItem title={task.title} status={task.status} index={i} todoArray={todoArray} setTodoArray={setTodoArray} filter={filter} key={i} />
                    ))
                )
            case "Pending":
                return(
                    JSON.parse(localStorage.getItem("todoList")).filter((task) => task.status === false).map((task, i) => (
                        <TodoItem title={task.title} status={task.status} index={i} todoArray={todoArray} setTodoArray={setTodoArray} filter={filter} key={i} />
                    ))
                )
            case "Recycle":
                return(
                    JSON.parse(localStorage.getItem("recycleBin")).map((task, i) => (
                        <TodoItem title={task.title} status={task.status} index={i} todoArray={todoArray} setTodoArray={setTodoArray} filter={filter} key={i} />
                    ))
                )
            default:
                alert("Option not supported");
                break;
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-main_purple w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-white rounded h-4/5 overflow-y-auto shadow-out">
                <h2 className="text-left text-3xl px-10 pt-10 pb-5">TODO List</h2>
                
                <AddTodo setTodoTitle={setTodoTitle} handleAddTodo={handleAddTodo} todoTitle={todoTitle} />
                <FilterTodo filter={filter} setFilter={setFilter} />
                <TodoList>
                    {
                        (todoArray?.length > 0 || JSON.parse(localStorage.getItem("recycleBin")).length > 0) &&
                            renderSwitch(filter)
                    }
                </TodoList>
            </div>
        </div>
    );
};

export default Home;