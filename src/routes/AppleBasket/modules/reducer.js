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
  //直接返回从action中初始化的苹果树
  return {
    ...state,
    appleTree: action.data.tree
  }
}

function pick (state, action) {
  let appleTree = [...state.appleTree],
      currentApples = [...state.currentApples]

  //先从苹果树上shift出一个苹果，这里用shift是从数组的开头取，而pop是从末尾取
  let apple = appleTree.shift()
  //再把这个苹果push进去当前的苹果篮子中
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
      eatingApple = action.data.apple,//正在吃的苹果
      appleIndex = 0 //正在吃的苹果在当前苹果篮子中的index

  //用some遍历数组，找到正在吃的苹果的id，就立马返回
  currentApples.some((apple, index) => {
    if (eatingApple.id === apple.id) {
      appleIndex = index
      return true
    }
    return false
  })

  //删除正在吃的苹果
  currentApples.splice(appleIndex, 1)
  eatApples.push(eatingApple)

  return {
    ...state,
    currentApples,
    eatApples
  }
}

//与吃苹果类似
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
