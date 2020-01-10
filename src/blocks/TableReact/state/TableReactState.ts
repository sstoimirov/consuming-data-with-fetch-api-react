import { Provider } from "../../../Provider";
import { Dict, dict } from "../dict";
import { sortType, UserType, TodoType } from "../../../types";
import { action, computed, observable, Lambda, observe } from "mobx";
import { sortUsers } from "../../../helpers/sorting"

export class TableReactState {
    private provider: Provider;
    dict: Dict
    @observable sortOrder: sortType;
    @observable users: UserType[]
    @observable todos: TodoType[];
    @observable inputValue: string;
    @observable optionValue: string;

    private disposeUsers: Lambda;
    private disposeTodos: Lambda;
    constructor(provider: Provider) {
        this.provider = provider;
        this.dict = dict;
        this.sortOrder = "ASC";
        this.users = provider.users;
        this.todos = provider.todos;

        this.disposeUsers = observe(this.provider, "users", u => {
            this.setUsers(u.newValue);
        });

        this.disposeTodos = observe(this.provider, "todos", t => {
            this.setTodos(t.newValue);
        })
        this.inputValue = "";
        this.optionValue = "name";
    }

    @action.bound setUsers(u: UserType[]) {
        this.users = u
    }
    @action.bound setTodos(t: TodoType[]) {
        this.todos = t
    }
    @action.bound setOrder(s: sortType) {
        return this.sortOrder = s
    }
    @action.bound updateOptionValue(el: React.FormEvent<HTMLSelectElement>) {
        this.optionValue = el.currentTarget.value
    }
    @action.bound updateInputValue(e: React.FormEvent<HTMLInputElement>) {
        this.inputValue = e.currentTarget.value.toUpperCase();
    }

    // @computed get todosData() {
    //     return this.todos.sort(sortTodos[this.sortOrder])
    // }
    @computed get usersData() {
        return this.users.sort(sortUsers[this.sortOrder])
    }
    deactivate() {
        this.disposeUsers();
        this.disposeTodos();
    }
}