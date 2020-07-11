import React, { Component } from 'react';

class buttonGreen extends Component {
    render() {
        return (
            <div className='btn-green'> {this.props.text} </div>
        );
    }
}

export default buttonGreen;