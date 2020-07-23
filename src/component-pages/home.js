import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import Categories from '../component-ui/global/categories'
import Background from '../component-ui/images/carrossel02.jpg'


class home extends Component {

    state = {
        Leo: false ,  Morgan: false , Stepan: false ,
        Alicia: false , Coric: false , Sonya: false , 
        Bella: false , Cheff: false , Selkie: false , 
        Faisca: false , Melia: false , Bastine: false , 
        Odri: false , Nina: false , Eden: false , 
        Violeta: false , Rukh: false 
    }
   
    handleChange(e) {
        let isChecked = e.target.checked;
        this.setState({[e.target.id]: isChecked})
    }

    render() {

        const bgStyle = { background: `url(${Background})` };
        const { Leo ,  Morgan , Stepan , Alicia , Coric , Sonya , Bella , Cheff , Selkie , Faisca , Melia , Bastine , Odri , Nina , Eden , Violeta , Rukh } = this.state
        const { champs } = this.props
   
        return (
            <div>
                <div className='bg-img' style={bgStyle} />
                <Categories/>

                <div className='champs-img'>
                    {
                     champs && champs.map(champ => {
                        
                        return (
                            <div>
                                <input type='checkbox' id={champ.champName} />
                                <label className='champ-label' htmlFor={champ.champName}><img src={champ.champImage} alt='' /></label> 
                            </div>        
                        )
                      })  
                    }
                </div>
                


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        champs: state.firestore.ordered.champs
    }
  }

export default compose( 
    connect(mapStateToProps , null) ,
    firestoreConnect([ { collection: 'champs' , ordered: 'champName'}]
)) (home)