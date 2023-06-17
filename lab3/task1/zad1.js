function dropUntil(array, predicate) {
  const idx = array.indexOf(array.find((e) => predicate(e)))
  for (let i = 0; i < idx; i++) {
    array.shift()
  }
  return array
}
