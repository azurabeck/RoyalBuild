import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import Categories from '../component-ui/global/categories'
import Background from '../component-ui/images/carrossel02.jpg'
import categories from '../component-ui/global/categories';


class home extends Component {
     
    handleChange(e) {
        let isChecked = e.target.checked;
        this.setState({[e.target.id]: isChecked})
    }

    render() {

        const bgStyle = { background: `url(${Background})` };
        const { champs } = this.props
    
        return (
            <div>
                <div className='bg-img' style={bgStyle} />
                <Categories/>

                <div className='champs-img'>                    
                    {
                     champs && champs.map((champ, index) => {

                        const layout = ( <div key={index}>
                                            <input type='checkbox' id={champ.champName} />
                                            <label className='champ-label' htmlFor={champ.champName}><img src={champ.champImage} alt='' /></label> 
                                         </div> 
                                        )                                                                  
                        return layout
                        })  
                    }
                </div>

                

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        champs: state.firestore.ordered.champs,
        categories: state.filter
    }
  }

export default compose( 
    connect(mapStateToProps , null) ,
    firestoreConnect([ { collection: 'champs' , ordered: 'champName'}]
)) (home)