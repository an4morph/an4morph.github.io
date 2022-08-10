export const createArr = (length: number, from = 1) => {
  const arr = []
  for (let i = from; i < (length + from); i += 1) {
    arr.push(i)
  }
  return arr
} 