import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChamp } from '../component-conf/store/actions/champActions'
import Send from '../component-ui/global/buttonGreen';

class addchamp extends Component {

    state = {
        image: '',
        skill1: null,
        skill2: null,
        skill3: null,
        champClass: '',
        name: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }    

    cleanField = (e) => {
        this.setState({ [e.target.id]: '' })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createChamp(this.state)
    }

    
    render() {
        
        const { image , skill1 , skill2 , skill3 , skill4 ,champClass , name } = this.state
        const { auth , authError} = this.props

        return (
            <div className='add-champ'>

                <div className='add-champ-header'>Add Champ</div>

                <form onSubmit={this.handleSubmit}>

                    <input type='text' id='name' onChange={this.handleChange} placeholder='insert champ name'/>

                    <input 
                        type='text' id='image' placeholder='insert img url'
                        onChange={this.handleChange} value={this.state.image}/> 
                    <div className='clear' id='image' onClick={this.cleanField}>X</div>


                    <select name='class' id='champClass' onChange={this.handleChange} style={{width: '220px'}}>
                        <option disabled selected value> -- select a champion class -- </option>
                        <option value='warrior'>Warrior</option>
                        <option value='hunter'>Hunter</option>
                        <option value='tank'>Tank</option>
                        <option value='assassin'>Assassin</option>
                        <option value='healer'>Healer</option>
                        <option value='mage'>Mage</option>
                    </select>

                    <input 
                        type='text' id='image' placeholder='insert img skill q/1'
                        onChange={this.handleChange} value={this.state.skill1}/> 
                    <input 
                        type='text' id='image' placeholder='insert img skill w/2'
                        onChange={this.handleChange} value={this.state.skill2}/> 
                    <input 
                        type='text' id='image' placeholder='insert img skill e/3'
                        onChange={this.handleChange} value={this.state.skill3}/> 
                    <input 
                        type='text' id='image' placeholder='insert img skill r/4'
                        onChange={this.handleChange} value={this.state.skill4}/> 
                    


                    <div className='card-preview'>

                        <img className='champ-image' src={image ? image : null} /> 
                        <div className='champ-details'>
                            <div className='champ-name'>{name ? name : null} / <span className='champ-class'>{champClass ? champClass : null} <img alt=''/></span></div>                           

                            <ul>
                                <li><img alt=''/></li>
                                <li><img alt=''/></li>
                                <li><img alt=''/></li>
                                <li><img alt=''/></li>
                            </ul>
                        </div>


                    </div>
                    

                    <div className='entering-btn'>
                        <Send type='button' buttonType='submit' text='Enter'/>
                        { authError ? <div className='text-red'> {authError} </div> : null } 
                    </div>    
                </form>
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
      createChamp: (champ) => dispatch(createChamp(champ)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(addchamp)