export const where = <T>(arr: Array<T>, condition: (element: T) => boolean): Array<T> => {
  return arr.filter(condition)
}

export default where