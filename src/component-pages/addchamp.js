import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChamp } from '../component-conf/store/actions/champActions'
import Send from '../component-ui/global/buttonGreen';

class addchamp extends Component {

    state = {
        champClass: '',
        champName: '',
        champImage: '',
        skill1: null,
        skill2: null,
        skill3: null,
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
        
        const { champImage , skill1 , skill2 , skill3 , skill4 ,champClass , champName } = this.state
        const { auth , authError} = this.props

        return (
            <div className='add-champ'>

                <div className='add-champ-header'>Add Champ</div>

                <form onSubmit={this.handleSubmit}>

                    <input type='text' id='champName' onChange={this.handleChange} placeholder='insert champ name'/>

                    <input 
                        type='text' id='champImage' placeholder='insert img url' onChange={this.handleChange} value={champImage}/> 
                    <div className='clear' id='champImage' onClick={this.cleanField}>X</div>


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
                        onChange={this.handleChange} value={skill1}/> 
                    <input 
                        type='text' id='image' placeholder='insert img skill w/2'
                        onChange={this.handleChange} value={skill2}/> 
                    <input 
                        type='text' id='image' placeholder='insert img skill e/3'
                        onChange={this.handleChange} value={skill3}/> 
                    <input 
                        type='text' id='image' placeholder='insert img skill r/4'
                        onChange={this.handleChange} value={skill4}/> 
                    


                    <div className='card-preview'>

                        <img className='champ-image' src={champImage}  alt=''/> 
                        <div className='champ-details'>
                            <div className='champ-name'>{champName ? champName : null} / <span className='champ-class'>{champClass ? champClass : null} <img alt=''/></span></div>                           

                            <ul>
                                <li><img src={skill1 ? skill1 : null} alt=''/></li>
                                <li><img src={skill2 ? skill2 : null} alt=''/></li>
                                <li><img src={skill3 ? skill3 : null} alt=''/></li>
                                <li><img src={skill4 ? skill4 : null} alt=''/></li>
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