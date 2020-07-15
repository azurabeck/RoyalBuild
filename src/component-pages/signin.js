import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Send from '../component-ui/global/buttonGreen'
import Logo from '../component-ui/images/full-logo.svg'

import { CallMerge } from '@material-ui/icons';

class signin extends Component {
    render() {
        return (
            <div className='pop'>
                <div className='pop-content'>
                    <div className='signin-list'>     
                    
                            <Link to='/'><img src={Logo} alt=''/></Link>  
                            <div className='title'>Sign In</div>
                            <form>
                                <div> <input type='email' placeholder='email'/></div>
                                <div> <input type='password' placeholder='password'/></div>
                                <div className='entering-btn'>
                                    <div className='forget'>Forget password?</div>
                                    <Send text='Enter'/>
                                </div>                                
                            </form>

                            <div className='create-text'>
                                <Link to='/signup'>
                                    If you're not a user, click here to sign up <br/>
                                    <CallMerge />                                
                                </Link>
                            </div> 

                        </div>                   
                </div>
                <Link className='close-pop' to='/'> <CallMerge/> </Link> 
            </div>
        );
    }
}

export default signin;