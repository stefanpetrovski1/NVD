function extender(obj1, obj2) {
  for (const key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key]
    }
  }
}
