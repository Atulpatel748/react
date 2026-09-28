import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([
        { task: "sample-task", id: uuidv4() }
    ]);

    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        setTodos([
            ...todos,
            { task: newTodo, id: uuidv4() }
        ]);

        setNewTodo("");
    };

    let deleteTodo = (id) => {
        setTodos((todos) =>
            todos.filter((todo) => todo.id != id)
        );
    };

    let upperCaseAll = () => {
        setTodos(
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            })
        )
    }

    let upperCaseOne = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                } else {
                    return todo
                }
            })
        )
    }


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
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                        <button onClick={() => upperCaseOne(todo.id)}>
                            CAPS
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    );
}