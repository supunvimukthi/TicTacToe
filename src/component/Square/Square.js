import React from 'react';
import '../../index.css';


export default class Square extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <button className="square" onClick={() =>this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}