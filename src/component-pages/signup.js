import React, { Component } from 'react';
import { Link , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../component-conf/store/actions/authActions'
import Send from '../component-ui/global/buttonGreen'
import Logo from '../component-ui/images/full-logo.svg'

import { CallMerge } from '@material-ui/icons';

class signup extends Component {

    state = {
        email:'',
        password: '',
        match:'',
        nickname: '',
        favoriteClass:''
  
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {

        const { auth , authError} = this.props
        if(auth.uid) { return <Redirect to='/' /> }

        console.log(auth)
        console.log(authError)

        return (
            <div className='pop'>
                <div className='pop-content'>
                    <div className='signin-list'>     
                    
                            <Link to='/'><img src={Logo} alt=''/></Link>  
                            <div className='title'>Sign Up</div>
                            <form  onSubmit={this.handleSubmit}>
                                <div> <input type='text' id='nickname' placeholder='nickname'  onChange={this.handleChange}/></div>
                                <div> <select name='class' id='favoriteClass' onChange={this.handleChange}>
                                        <option disabled selected value> -- select a favorite class -- </option>
                                        <option value='warior'>Warior</option>
                                        <option value='hunter'>Hunter</option>
                                        <option value='tank'>Tank</option>
                                        <option value='assassin'>Assassin</option>
                                        <option value='healer'>Healer</option>
                                        <option value='mage'>Mage</option>
                                      </select>
                                </div>
                                <div> <input type='email' id='email' placeholder='email'  onChange={this.handleChange}/></div>
                                <div> <input type='password' id='password' placeholder='password'  onChange={this.handleChange}/></div>
                                <div> <input type='password' id='match' placeholder='repeat password'  onChange={this.handleChange}/></div>
                                <div className='entering-btn'>
                                    <Send type='button' buttonType='submit' text='Enter'/>
                                    <div className='text-red'> { authError ? <p>{authError}</p> : null } </div>
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(signup)