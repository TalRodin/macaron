import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import {getTopFiveThunk} from '../reducers/countriesReducer'

class TopFive extends Component{
    // constructor(){
    //     super()
    // }
    componentDidMount(){
        this.props.getTopFive();
    }
    render(){
        return (
            <div>
            <div class="top_five_title">Top Five</div>
            <div class="container">
                 
            {this.props.topfive.map(top => (
                <div class="card">
                <div key={top.id}>
                <div class="card__image-container">
                    <img class="card__image" src={top.flagUrl} alt="" />
                </div>
                <svg class="card__svg" viewBox="0 0 800 500">

    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#fff"/>
    <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="black" stroke-width="3" fill="transparent"/>
  </svg>
 <div class="card__content"> 
                    <NavLink key={top.id} to={`/countries/${top.id}`} class="card__title">{top.name}</NavLink>
        
                    <p>GFI:{' '}{top.GFI}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat justo vitae iaculis eleifend. Morbi posuere magna accumsan arcu accumsan rutrum. Nam ultricies turpis ut hendrerit pretium. Duis luctus, eros.</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
        </div>
            )
       }
   }
const mapStateToProps = (state) => ({
    topfive: state.countriesReducer
})
const mapDispatchToProps = (dispatch) => ({
    getTopFive: () => dispatch(getTopFiveThunk()),
})
export default connect(mapStateToProps, mapDispatchToProps)(TopFive)
