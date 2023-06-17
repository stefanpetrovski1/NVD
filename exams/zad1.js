// Напишете функција extender која прима 2 објекти како аргументи.

// Функцијата треба да го прошири првиот објект со својствата на вториот објект.

function extender(obj1, obj2) {
  for (const key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key]
    }
  }
}
