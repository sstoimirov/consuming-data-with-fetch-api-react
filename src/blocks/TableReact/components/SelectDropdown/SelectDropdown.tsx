import * as React from "react";

export class SelectDropdown extends React.PureComponent<{
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    name: string,
    userName: string,
    email: string
}, {}>{

    render() {
        const { name, userName, email } = this.props;
        return (
            <select className="select-options" onChange={this.props.onChange} >
                <option value="name">{name}</option>
                <option value="username">{userName}</option>
                <option value="email">{email}</option>
            </select>
        )
    }
}