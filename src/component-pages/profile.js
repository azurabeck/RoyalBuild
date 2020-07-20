import React, { Component } from 'react';
import Categories from '../component-ui/global/categories'
import Img from '../component-ui/images/icons/ass-icon-oran.png'

class profile extends Component {
    render() {
        return (
            <div className='profile'>
                <div className='profile-header'>
                    <div className='user'>
                        <img src={Img} className='user-img' alt=''/>
                        <div className='user-text'>
                            <div className='title'> Welcome Azurabeck</div>
                            <div className='desc'> Creation data 17 de julho de 2020 </div>
                        </div>
                    </div>
                    <div className='history'>
                        <div className='history-info'>
                            <div className='title'>Total Created</div>
                            <div className='desc'> 00 </div></div>
                        <div className='history-info'>
                            <div className='title'>Highest score</div>
                            <div className='desc'> 00 </div></div>
                        <div className='history-info'>
                            <div className='title'>Total Saved</div>
                            <div className='desc'> 00 </div></div>
                    </div>               
                </div>
                <Categories />
            </div>
        );
    }
}

export default profile;