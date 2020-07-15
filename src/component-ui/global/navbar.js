import React, { Component } from 'react';
import LogoMob from '../images/logo-mob.svg'

import SignIn from './buttonGreen'
import ShowMenu from './menu'
import { Search , Menu } from '@material-ui/icons';

class navbar extends Component {

    state = {
        menu: false ,
    }

    handleMenu = () => {
        this.setState({menu: true})
    }    
    closeMenu = () => {
        this.setState({menu: false})
    }

   

    render() {

        const menuState = this.state.menu

        return (
            <div className='navbar'>
                <img className='nav-logo' src={LogoMob} alt=''/>
                <div className='nav-btn'>
                    <SignIn text='Sign in' type='link' function='/signin'/>
                    <Search style={{ fontSize: 20 }} />
                    <Menu style={{ fontSize: 20 }} onClick={this.handleMenu} />
                    { menuState ? <ShowMenu toClose={this.closeMenu}/> : null }
                </div>       
            </div>
        );
    }
}

export default navbar;