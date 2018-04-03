import React, { Component } from 'react';
import Todo from "./Todo";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: "",
            todo: []
        };
    }

    addTodo = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTodo = () => {
        const { todo } = this.state;
        todo.push(this.state.newTodo);
        this.setState({ todo, newTodo: "" });
    };

    render() {
        return(
            <div>
                <Todo {...this.state} />
                <input
                    type="text"
                    name="newTodo"
                    value={this.state.newTodo}
                    onChange={this.addTodo}
                    placeholder="add new todo item"
                />
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        );
    }

}

export default TodoList;