import { observable, action } from "mobx"
import { UserType, TodoType } from "../types";
export class Provider {
    @observable users: UserType[];
    @observable todos: TodoType[];
    constructor() {
        this.users = [];
        this.todos = [];
        this.fetchTodos();
        this.fetchUsers();
    }

    @action.bound setUsers(data: UserType[]) {
        this.users = data;
    }

    @action.bound setTodos(data: TodoType[]) {
        this.todos = data;
    }

    fetchUsers() {
        return fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.setUsers(data);
            })
            .catch(console.log)
    }

    fetchTodos() {
        return fetch('http://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                this.setTodos(data);
            })
            .catch(console.log)
    }
}