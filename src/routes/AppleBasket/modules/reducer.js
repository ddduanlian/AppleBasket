import { INIT_APPLES, PICK_APPLE, EAT_APPLE, RIPENING_APPLE } from './constants'
// 初始化store
const defaultState = {
  appleTree: [],
  currentApples: [],
  eatApples: [],
  ripeningApples: [],
  isInit: []
}

function reducer (state = defaultState, action) {
  switch (action.type) {
    case INIT_APPLES:
      return initTree(state, action)
    case PICK_APPLE:
      return pick(state, action)
    case EAT_APPLE:
      return eat(state, action)
    case RIPENING_APPLE:
      return ripening(state, action)
    default:
      return state
  }
}

function initTree (state, action) {
  return {
    ...state,
    appleTree: action.data.tree
  }
}

function pick (state, action) {
  let appleTree = [...state.appleTree],
      currentApples = [...state.currentApples]

  let apple = appleTree.shift()
  currentApples.push(apple)

  return {
    ...state,
    appleTree,
    currentApples
  }
}

function eat (state, action) {
  let currentApples = [...state.currentApples],
      eatApples = [...state.eatApples],
      eatingApple = action.data.apple,
      appleIndex = 0

  currentApples.some((apple, index) => {
    if (eatingApple.id === apple.id) {
      appleIndex = index
      return true
    }
    return false
  })

  currentApples.splice(appleIndex, 1)
  eatApples.push(eatingApple)

  return {
    ...state,
    currentApples,
    eatApples
  }
}

function ripening (state, action) {
  let currentApples = [...state.currentApples],
      ripeningApples = [...state.ripeningApples],
      greenApple = action.data.apple

  currentApples.some((apple, index) => {
    if (greenApple.id === apple.id) {
      apple.color = 'red'
      return true
    }
    return false
  })

  ripeningApples.push(greenApple)

  return {
    ...state,
    currentApples,
    ripeningApples
  }
}

export default reducer
