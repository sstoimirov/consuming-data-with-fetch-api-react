import * as React from "react";
type SearchProps = {
    text: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}
export class Search extends React.PureComponent<SearchProps, {}>{
    render() {
        const { text, onChange } = this.props;
        return (
            <input type="text" placeholder={text} onChange={onChange}></input>
        )
    }
}