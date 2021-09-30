import React from 'react';

const FilterTodo = ({ filter, setFilter }) => {
    return (
        <div className="flex justify-between px-10 mb-5">
            <button className={`${filter === "All" ? "underline" : ""}`} onClick={() => setFilter("All")}>All</button>
            <button className={`${filter === "Completed" ? "underline" : ""}`} onClick={() => setFilter("Completed")}>Completed</button>
            <button className={`${filter === "Pending" ? "underline" : ""}`} onClick={() => setFilter("Pending")}>Pending</button>
            <button className={`${filter === "Recycle" ? "underline" : ""}`} onClick={() => setFilter("Recycle")}>🗑</button>
            <button className={`${filter === "Recycle" ? "underline" : ""}`} onClick={() => localStorage.setItem("recycleBin", JSON.stringify([]))}>Clear 🗑</button>
        </div>
    );
};

export default FilterTodo;