// 初始化苹果树上的苹果

export function getAppleTree (num) {
  return new Promise((resolve, reject) => {
    let i = 1, tree = []
    for (; i <= num; i++) {
      tree.push({
        id: i,
        color: Math.random() < 0.6 ? 'red' : 'green',
        weight: 200 + parseInt(100 * Math.random(), 10)
      })
    }

    resolve(tree)
  })
}
