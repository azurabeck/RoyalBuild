import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class buttonGreen extends Component {
    render() {

        const type = this.props.type
        let button 

        if(type === 'link') {
            button = <Link className='btn-green' to={this.props.function}> {this.props.text} </Link>
        } else {
            button = <div className='btn-green' onClick={this.props.function}> {this.props.text} </div>
        }

        return button;
    }
}

export default buttonGreen;