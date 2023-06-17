function select(obj, arr) {
  let result = {}

  arr.forEach((key) => {
    result[key] = obj[key]
  })
  return result
}
