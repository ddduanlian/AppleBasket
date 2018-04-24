import React, { Component } from 'react'
import styled from 'styled-components'
import AppleItem from './AppleItem'
import PropTypes from 'prop-types'

export default class AppleBasket extends Component {
  componentDidMount () {
    if (this.props.isInit.length === 0) {
      this.props.initTree()
      this.props.isInit.length = 1
    }
  }

  pickApple = () => {
    if (this.props.appleTree.length <= 0) {
      alert('🌲上没有苹果啦')
      return
    }
    this.props.pickApple()
  }

  handleClickAppleItem = (apple) => {
    return apple.color === 'red' ? this.props.eatApple(apple) : this.props.ripeningApple(apple)
  }

  renderAppleList = () => {
    if (this.props.currentApples.length > 0) {
      return this.props.currentApples.map((apple, index) => {
        return (
          <AppleItem
            key={index}
            apple={apple}
            handleClick={this.handleClickAppleItem}
          />
        )
      })
    } else {
      return <EmptyDiv>苹果篮子空空如也，快去摘点🍎吧</EmptyDiv>
    }
  }

  render () {
    console.log(this.props)
    const { redApples, greenApples, eatedApples, ripenedApples } = this.props
    return (
      <BasketContainer>
        <Title>苹果篮子</Title>
        <StatusDiv>
          <Section>
            <p>当前</p>
            <div>{redApples.num}个红苹果(共{redApples.weight}克),{greenApples.num}个青苹果(共{greenApples.weight}克)</div>
          </Section>
          <Section>
            <p>吃掉</p>
            <div>{eatedApples.num}个红苹果(共{eatedApples.weight}克)</div>
          </Section>
          <Section>
            <p>催熟</p>
            <div>{ripenedApples.num}个青苹果(共{ripenedApples.weight}克)</div>
          </Section>
        </StatusDiv>

        <AppleList>
          {this.renderAppleList()}
        </AppleList>

        <BtnDiv>
          <button onClick={this.pickApple}>摘苹果</button>
        </BtnDiv>
      </BasketContainer>
    )
  }
}

AppleBasket.propTypes = {
  appleTree: PropTypes.array.isRequired,
  isInit: PropTypes.array,
  initTree: PropTypes.func,
  pickApple: PropTypes.func,
  eatApple: PropTypes.func,
  ripeningApple: PropTypes.func,
  currentApples: PropTypes.array,
  redApples: PropTypes.object,
  greenApples: PropTypes.object,
  eatedApples: PropTypes.object,
  ripenedApples: PropTypes.object,
}

const BasketContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid #ddd;
`

const Title = styled.div`
  padding: 6px 0px;
  text-align: center;
  color: #069;
  font-size: 20px;
`

const StatusDiv = styled.div`
  width: 100%;
  border-top: 1px dashed #ddd;
  border-bottom: 1px dashed #ddd;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
`

const Section = styled.div`
  width: 195px;
  border-right: 1px solid #f0f0f0;

  & p {
    padding: 6px 0px;
    color: #069;
    font-size: 16px;

  }

  & div {
    font-weight: 400;
    font-size: 20px;
  }
`

const AppleList = styled.div`
  padding: 10px 0px;
`
const EmptyDiv = styled.div`
  text-align: center;
  font-size: 16px;
  color: #ccc;
  padding: 20px 0px;
`

const BtnDiv = styled.div`
  text-align: center;

  & button {
    color: #fff;
    background-color: #096;
    border: none;
    font-size: 14px;
    padding: 6px 40px;
    border-radius: 6px;
    margin: 20px auto;
    cursor: pointer;
  }
`
