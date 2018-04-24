import { connect } from 'react-redux'
import AppleBasket from '../components/index'
import * as actions from '../modules/actions'
import { getAppleTree } from '../modules/apis'

const mapStateToProps = (state) => {
  state = state.appleBasket
  let redApples = { num: 0, weight: 0 },
      greenApples = { num: 0, weight: 0 },
      eatedApples = { num: 0, weight: 0 },
      ripenedApples = { num: 0, weight: 0 }

  state.currentApples.forEach((apple) => {
    if (apple.color === 'red') {
      ++redApples.num
      redApples.weight += apple.weight
    } else {
      ++greenApples.num
      greenApples.weight += apple.weight
    }
  })

  state.eatApples.forEach((apple) => {
    ++eatedApples.num
    eatedApples.weight += apple.weight
  })

  state.ripeningApples.forEach((apple) => {
    ++ripenedApples.num
    ripenedApples.weight += apple.weight
  })

  return {
    ...state,
    redApples,
    greenApples,
    eatedApples,
    ripenedApples
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initTree: () => {
      getAppleTree(20)
        .then(
          (tree) => { dispatch(actions.initAppleTree({ tree })) }
        )
    },
    pickApple: () => { dispatch(actions.pickApple()) },
    eatApple: (apple) => { dispatch(actions.eatApple({ apple })) },
    ripeningApple: (apple) => { dispatch(actions.ripeningApple({ apple })) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppleBasket)
