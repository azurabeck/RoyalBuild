import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import Background from '../component-ui/images/carrossel02.jpg'

import WarIcon from '../component-ui/images/icons/war-icon.png'
import HunIcon from '../component-ui/images/icons/hun-icon.png'
import MagIcon from '../component-ui/images/icons/mag-icon.png'
import TanIcon from '../component-ui/images/icons/tan-icon.png'
import HeaIcon from '../component-ui/images/icons/hea-icon.png'
import AssIcon from '../component-ui/images/icons/ass-icon.png'

import WarIconOran from '../component-ui/images/icons/war-icon-oran.png'
import HunIconOran from '../component-ui/images/icons/hun-icon-oran.png'
import MagIconOran from '../component-ui/images/icons/mag-icon-oran.png'
import TanIconOran from '../component-ui/images/icons/tan-icon-oran.png'
import HeaIconOran from '../component-ui/images/icons/hea-icon-oran.png'
import AssIconOran from '../component-ui/images/icons/ass-icon-oran.png'

class home extends Component {

    state = {
        showWarrior: true, showHunter: true, showMage: true, showTank: true, showHealer: true, showAssassin: true
    }

    handleChange(e) {
        let isChecked = e.target.checked;
        this.setState({[e.target.id]: isChecked})
    }
     

    render() {

        const bgStyle = { background: `url(${Background})` };
        const { warrior , hunter , mage , tank , healer , assassin } = this.props
        const { showWarrior , showHunter , showMage , showTank , showHealer , showAssassin } = this.state

        return (
            <div>
                <div className='bg-img' style={bgStyle} />

                <ul className='cat-btn' >
                    <li>
                        <input type="checkbox" defaultChecked={showWarrior} id="showWarrior" onChange={e => this.handleChange(e)} value="showWarrior" />                         
                        <label htmlFor="showWarrior"><img alt='' src={ showWarrior ? WarIconOran : WarIcon } /></label>  
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked={showHunter} id="showHunter"  onChange={e => this.handleChange(e)} value="showHunter"/> 
                        <label htmlFor="showHunter"><img alt='' src={ showHunter ? HunIconOran : HunIcon } /></label>  
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked={showMage} id="showMage"   onChange={e => this.handleChange(e)} value="showMage"/> 
                        <label htmlFor="showMage"><img alt='' src={showMage ? MagIconOran : MagIcon} /> </label> 
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked={showTank} id="showTank"  onChange={e => this.handleChange(e)} value="showTank"/> 
                        <label htmlFor="showTank"><img alt='' src={showTank ? TanIconOran : TanIcon} /></label>   
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked={showHealer} id="showHealer"  onChange={e => this.handleChange(e)} value="showHealer"/> 
                        <label htmlFor="showHealer"><img alt='' src={showHealer ? HeaIconOran : HeaIcon} /></label>  
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked={showAssassin} id="showAssassin"  onChange={e => this.handleChange(e)} value="showAssassin"/> 
                        <label htmlFor="showAssassin"><img alt='' src={showAssassin ? AssIconOran : AssIcon} /></label>  
                    </li>
                </ul>

                <div className='champs-img'>    
                    {   showWarrior ? warrior && warrior.map((champ, index) => {                       
                        return ( <div key={index}>
                                      <input type='checkbox' id={champ.champName} />
                                      <label className='champ-label' htmlFor={champ.champName}><img src={champ.champImage} alt='' /></label> 
                                 </div> 
                            )   }) : null }
                    {   showHunter ? hunter && hunter.map((champ, index) => {                       
                        return ( <div key={index}>
                                      <input type='checkbox' id={champ.champName} />
                                      <label className='champ-label' htmlFor={champ.champName}><img src={champ.champImage} alt='' /></label> 
                                 </div> 
                            )   }) : null }
                    {   showMage ? mage && mage.map((champ, index) => {                       
                        return ( <div key={index}>
                                      <input type='checkbox' id={champ.champName} />
                                      <label className='champ-label' htmlFor={champ.champName}><img src={champ.champImage} alt='' /></label> 
                                 </div> 
                            )   }) : null }
                    {   showTank ? tank && tank.map((champ, index) => {                       
                        return ( <div key={index}>
                                      <input type='checkbox' id={champ.champName} />
                                      <label className='champ-label' htmlFor={champ.champName}><img src={champ.champImage} alt='' /></label> 
                                 </div> 
                            )   }) : null }
                    {   showHealer ? healer && healer.map((champ, index) => {                       
                        return ( <div key={index}>
                                      <input type='checkbox' id={champ.champName} />
                                      <label className='champ-label' htmlFor={champ.champName}><img src={champ.champImage} alt='' /></label> 
                                 </div> 
                            )   }) : null }
                    {   showAssassin ? assassin && assassin.map((champ, index) => {                       
                        return ( <div key={index}>
                                      <input type='checkbox' id={champ.champName} />
                                      <label className='champ-label' htmlFor={champ.champName}><img src={champ.champImage} alt='' /></label> 
                                 </div> 
                            )   }) : null }
                </div>
                

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        warrior: state.firestore.ordered.warrior,
        hunter: state.firestore.ordered.hunter,
        mage: state.firestore.ordered.mage,
        tank: state.firestore.ordered.tank,
        healer: state.firestore.ordered.healer,
        assassin: state.firestore.ordered.assassin,
    }
  }

export default compose( 
    connect(mapStateToProps , null) ,
    firestoreConnect([
         { collection: 'warrior' },
         { collection: 'hunter' },
         { collection: 'mage' },
         { collection: 'tank' },
         { collection: 'healer' },
         { collection: 'assassin' },

    ]
)) (home)