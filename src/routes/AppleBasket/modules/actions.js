import { INIT_APPLES, PICK_APPLE, EAT_APPLE, RIPENING_APPLE } from './constants'

// 传入dispatch的值，action创建函数
export const initAppleTree = (data) => ({
  type: INIT_APPLES,
  data
})

export const pickApple = (data) => ({
  type: PICK_APPLE,
  data
})

export const eatApple = (data) => ({
  type: EAT_APPLE,
  data
})

export const ripeningApple = (data) => ({
  type: RIPENING_APPLE,
  data
})
