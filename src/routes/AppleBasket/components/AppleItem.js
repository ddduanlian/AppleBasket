import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import redApplePic from '../assets/red_apple.png'
import greenApplePic from '../assets/green_apple.jpg' 

export default class AppleItem extends Component { 
  render () {
    const { apple,handleClick } = this.props
   
    return (      
      <AppleDiv>
        <AppleImg src={apple.color === 'red' ? redApplePic : greenApplePic}></AppleImg>
        <AppleInfo>
          <p>{apple.color === 'red' ? '红' : '青'}苹果 - {apple.id}号</p>
          <span>{apple.weight}克</span>
        </AppleInfo>
        <AppleBtn isRed={apple.color === 'red' ? '#3498db' : '#FF4040'}>
          <button onClick={() => {handleClick(apple)}}>{apple.color === 'red' ? '吃 掉' : '催 熟'}</button>
        </AppleBtn>
      </AppleDiv>
    )
  }
}

AppleItem.propTypes = {
  apple: PropTypes.object,
  handleClick: PropTypes.func
}

const AppleDiv = styled.div`
  width: 98%;
  margin: 10px auto;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const AppleImg = styled.img`
  flex-grow: 1;
  width: 50px;
  height: 50px;
`

const AppleInfo = styled.div`
  flex-grow: 15;
  text-align: left;
  padding-left: 10px;

  & p {
    padding: 6px 0px;
    font-size: 20px;
    color: #069;
    margin-bottom: 0px;
  }

  & span {
    font-size: 16px;
    color: #6c757d;
  }
`

const AppleBtn = styled.div`
  flex-grow: 2;

  & button {
    border: none;
    background-color: ${props => props.isRed};
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    padding: 5px 20px;
    border-radius: 6px;
    margin: 18px auto;
    outline: none;
  }
`