import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../images/full-logo.svg'

import { CallMerge } from '@material-ui/icons';

class menu extends Component {

    render() {

        return (
            <div className='menu'>
                <div className='menu-content'>
                    <div className='menu-list'>
                       <ul>
                            <Link to='/'><li><img src={Logo} alt=''/></li></Link>
                            <Link to='/'><li>Events</li></Link>
                            <li>
                                Championt Build
                                
                                <div className='sub-menu'>
                                    <Link to='/'>Leo - </Link>
                                    <Link to='/'>Morgan - </Link>
                                    <Link to='/'>Stepan - </Link>
                                    <Link to='/'>Alícia - </Link>
                                    <Link to='/'>Coric - </Link> 
                                    <Link to='/'>Sonya - </Link>
                                    <Link to='/'>Bella - </Link>
                                    <Link to='/'>Cheff - </Link>
                                    <Link to='/'>Selkie - </Link>
                                    <Link to='/'>Faísca - </Link>
                                    <Link to='/'>Melia - </Link>
                                    <Link to='/'>Bastine - </Link>
                                    <Link to='/'>Odri - </Link>
                                    <Link to='/'>Nina - </Link>
                                    <Link to='/'>Eden - </Link>
                                    <Link to='/'>Rukh - </Link>
                                    <Link to='/'>Violeta</Link> 
                                </div>
                            
                            </li>
                            <li>
                                Discover Itens
                            
                                <div className='sub-menu'>
                                    <Link to='/'>Parchments - </Link>
                                    <Link to='/'>Runes - </Link>
                                    <Link to='/'>Wood Itens - </Link>
                                    <Link to='/'>Consumable</Link>
                                </div>
                            </li>
                            <Link to='/'><li>Discover Maps</li></Link>
                            <Link to='/'><li>Create your build</li></Link>
                            <Link to='/'><li>See your profile</li></Link>

                            <li className='menu-auth'>
                                <Link to='/'>Sign in</Link> 
                                <span> or </span>
                                <Link to='/'>Sign in</Link> 
                            </li>
                        </ul>  
                    </div>
                   
                </div>
                <div className='close-menu' onClick={this.props.toClose}> 
                    <CallMerge/> 
                </div>       
            </div>
        );
    }
}

export default menu;