import React, { Component } from 'react';
import { Samy } from 'react-samy-svg'
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

    constructor() {
        super()  
        this.state = { 
            warrior: true, hunter: true, mage: true, tank: true, healer: true, assassin: true
        }
    }
    

    handleChange(e) {
        let isChecked = e.target.checked;
        this.setState({[e.target.id]: isChecked})
    }

    render() {

        const bgStyle = { background: `url(${Background})` };
        const { warrior , hunter , mage , tank , healer , assassin } = this.state

        return (
            <div>
                <div className='bg-img' style={bgStyle} />
                <ul className='cat-btn'>
                    <li>
                        <input type="checkbox" defaultChecked={warrior} id="warrior" onChange={e => this.handleChange(e)} value="warrior" />                         
                        <label htmlFor="warrior"><img alt='' src={ warrior ? WarIconOran : WarIcon } /></label>  
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked={hunter} id="hunter"  onChange={e => this.handleChange(e)} value="hunter"/> 
                        <label htmlFor="hunter"><img alt='' src={ hunter ? HunIconOran : HunIcon } /></label>  
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked={mage} id="mage"   onChange={e => this.handleChange(e)} value="mage"/> 
                        <label htmlFor="mage"><img alt='' src={mage ? MagIconOran : MagIcon} /> </label> 
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked={tank} id="tank"  onChange={e => this.handleChange(e)} value="tank"/> 
                        <label htmlFor="tank"><img alt='' src={tank ? TanIconOran : TanIcon} /></label>   
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked={healer} id="healer"  onChange={e => this.handleChange(e)} value="healer"/> 
                        <label htmlFor="healer"><img alt='' src={healer ? HeaIconOran : HeaIcon} /></label>  
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked={assassin} id="assassin"  onChange={e => this.handleChange(e)} value="assassin"/> 
                        <label htmlFor="assassin"><img alt='' src={assassin ? AssIconOran : AssIcon} /></label>  
                    </li>
                </ul>
            </div>
        );
    }
}

export default home;