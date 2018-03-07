import React from 'react';

export default class extends React.Component {
    render(){
        const square = this.props;
        return (
            <button className="square" onClick={square.onClick}>
                {square.value}
            </button>
        );
    }
}
