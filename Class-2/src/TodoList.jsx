import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    return (
        <div>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />

            <button onClick={addTask}>Add Task</button>

            <hr />

            <h4>Tasks TO-DO</h4>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}