import * as React from 'react';
import { observer } from "mobx-react";
import { TableReactState } from '../../state';
import { UserType, sortType } from '../../../../types';
import * as CMP from "../../components";
@observer
export class Table extends React.PureComponent<{ dataProvider: TableReactState }, TableReactState>{
    constructor(props) {
        super(props)
        this.state = this.props.dataProvider
    }
    getUsers() {
        const allowedKeys = ["name", "username", "email"];
        return (
            this.state.usersData.map((user: UserType) => (
                <div key={`${user.id}`} className="user">
                    {Object.keys(user)
                        .filter(key => allowedKeys.includes(key))
                        .filter(x => user[this.state.optionValue].toUpperCase().indexOf(this.state.inputValue) > -1)
                        .map(key => {
                            return <div key={key} className="user-info">{`${user[key]}`}</div>
                        })
                    }
                </div>
            ))
        )
    }

    // getTodos() {
    //     return (
    //         this.state.todosData.map((todo: TodoType) => (
    //             <div key={`${todo.id}`} className="todo">
    //                 <div className="todo-info">Id: {todo.id}</div>
    //                 <div className="todo-info">Title: {todo.title}</div>
    //             </div>
    //         ))
    //     )
    // }

    getUserKeys() {
        let userKeys: UserType[] = [], keys, j
        const allowedKeys = ["name", "username", "email"];

        for (let i = 0; i < this.state.usersData.length; i++) {
            keys = Object.keys(this.state.usersData[i]).filter(x => allowedKeys.includes(x));
            for (j = 0; j < keys.length; j++) {
                if (userKeys.indexOf(keys[j]) === -1) {
                    userKeys.push(keys[j])
                }
            }
        }
        return userKeys.map(x => <div key={`key__${x}`} className="user-key-value">{x}</div>)
    }

    render() {
        const selectMenuProps = {
            onChange: this.state.updateOptionValue,
            name: this.state.dict.Name,
            userName: this.state.dict.UserName,
            email: this.state.dict.Email
        }
        return (
            <div className="table-wrapper">
                <div className="table-buttons">
                    <CMP.Search text={`Search items by ${this.state.optionValue}`} onChange={this.state.updateInputValue} />
                    <CMP.SelectDropdown {...selectMenuProps} />

                    <CMP.Btn onClick={e => {
                        let sort: sortType = this.state.sortOrder === "ASC" ? "DESC" : "ASC"
                        this.state.setOrder(sort)
                    }} text={`Sort by ${this.state.sortOrder}`} />
                </div>

                <div className="table-info">
                    <div className="users-wrapper">
                        <h2>{this.state.dict.Users}</h2>

                        <div className="user-keys-wrapper">
                            {this.getUserKeys()}
                        </div>

                        {this.getUsers()}
                    </div>

                    {/* <div className="todos-wrapper">
                        <h2>{this.state.dict.Todos}</h2>
                        {this.getTodos()}
                    </div> */}
                </div>
            </div>

        )
    }
}