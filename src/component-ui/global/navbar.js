import React, { Component } from 'react';
import LogoMob from '../images/logo-mob.png'

import SignIn from './buttonGreen'
import { Search , Menu } from '@material-ui/icons';

class navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <img className='nav-logo' src={LogoMob} alt=''/>
                <div className='nav-btn'>
                    <SignIn text='Sign in'/>
                    <Search style={{ fontSize: 20 , color: '#fff' }} />
                    <Menu style={{ fontSize: 20 , color: '#fff' }} />
                </div>
                
            </div>
        );
    }
}

export default navbar;