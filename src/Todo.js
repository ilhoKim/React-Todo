import React from "react";

const Todo = props => {
    return (
        <div>
            <h1>{props.newTodo}</h1>
                {props.Todo.map((Todo, index) => (
                    <div key={Todo + index}>{Todo}</div>
                ))}
                </div>
    );
};

export default Todo;