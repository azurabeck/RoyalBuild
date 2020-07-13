import React, { Component } from 'react';
import { Samy } from 'react-samy-svg'
import Background from '../component-ui/images/carrossel02.jpg'

import WarIcon from '../component-ui/images/icons/war-icon.svg'
import HunIcon from '../component-ui/images/icons/hun-icon.svg'
import MagIcon from '../component-ui/images/icons/mag-icon.svg'
import TanIcon from '../component-ui/images/icons/tan-icon.svg'
import HeaIcon from '../component-ui/images/icons/hea-icon.svg'
import AssIcon from '../component-ui/images/icons/ass-icon.svg'

class home extends Component {

    state = [
        { champion: 1 , name: 'Leo' , class_en: 'warrior' , class_pt: 'guerreiro' },
        { champion: 2 , name: 'stepan' , class_en: 'warrior' , class_pt: 'guerreiro' }
    ]


    render() {

        const bgStyle = { background: `url(${Background})` };

        return (
            <div>
                <div className='bg-img' style={bgStyle} />
                <ul className='cat-btn'>
                    <li><input type="checkbox" id="warrior"  value="warrior"/> <label className='input-label' htmlFor='warrior' ><Samy src={WarIcon} /></label>  </li>
                    <li><input type="checkbox" id="hunter" value="hunter"/> <label className='input-label' htmlFor="hunter"><Samy src={HunIcon} /></label>  </li>
                    <li><input type="checkbox" id="mage"  value="mage"/> <label className='input-label' htmlFor="mage"><Samy src={MagIcon} /> </label> </li>
                    <li><input type="checkbox" id="tank" value="tank"/> <label className='input-label' htmlFor="tank"><Samy src={TanIcon} /></label>   </li>
                    <li><input type="checkbox" id="healer" value="healer"/> <label className='input-label' htmlFor="healer"><Samy src={HeaIcon} /></label>  </li>
                    <li><input type="checkbox" id="assassin" value="assassin"/> <label className='input-label' htmlFor="assassin"><Samy src={AssIcon} /></label>  </li>
                </ul>
            </div>
        );
    }
}

export default home;