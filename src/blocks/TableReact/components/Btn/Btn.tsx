import * as React from 'react';

export class Btn extends React.PureComponent<{ text: string, onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; }, {}>{
    render() {
        return (
            <button type="button" onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}