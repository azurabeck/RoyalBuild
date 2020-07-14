import React, { Component } from 'react';
import Categories from '../component-ui/global/categories'
import Background from '../component-ui/images/carrossel02.jpg'


class home extends Component {

    render() {

        const bgStyle = { background: `url(${Background})` };

        return (
            <div>
                <div className='bg-img' style={bgStyle} />
                <Categories/>
            </div>
        );
    }
}

export default home;