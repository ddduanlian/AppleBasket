import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { connect } from 'react-redux'


export const HomeView = (props) => {
  console.log('props',props.duckSize)
  
  return(
  <div>
    <h4>Welcome!</h4>
    <img style={{width: props.duckSize.width, height: props.duckSize.height}} alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)}

const mapStateToProps = (state) => {
  let {appleBasket} = state
  let duckSize = {width: 100, height: 100}

  if(appleBasket){
    appleBasket.eatApples.forEach((apple) => {
      duckSize.width +=10
      duckSize.height +=10
    })
  }
  
  return {
    ...state,
    duckSize
  }
}

export default connect(mapStateToProps)(HomeView)
