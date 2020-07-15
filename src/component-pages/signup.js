import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Send from '../component-ui/global/buttonGreen'
import Logo from '../component-ui/images/full-logo.svg'

import { CallMerge } from '@material-ui/icons';

class signup extends Component {
    render() {
        return (
            <div className='pop'>
                <div className='pop-content'>
                    <div className='signin-list'>     
                    
                            <Link to='/'><img src={Logo} alt=''/></Link>  
                            <div className='title'>Sign Up</div>
                            <form>
                                <div> <input type='text' placeholder='nickname'/></div>
                                <div> <input type='email' placeholder='email'/></div>
                                <div> <input type='password' placeholder='password'/></div>
                                <div> <input type='password' placeholder='repeat password'/></div>
                                <div className='entering-btn'>
                                    <Send text='Enter'/>
                                </div>                                
                            </form>

                            <div className='create-text'>
                                <Link to='/signin'>
                                    Already a member? click here to login <br/>
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

export default signup;