// Напишете функција dropUntil која прима 2 аргументи:
// array (Array): Низа од елементи
// predicate: Функција која ќе се извршува врз секој елемент.
// Функцијата треба да ги исфрли елементите од низа се додека не се исполни предикатот.

// пример:
// var users = [
//   { "user": "barney",  "active": false },
//   { "user": "fred",    "active": false },
//   { "user": "pebbles", "active": true }
// ]

// console.log(dropUntil(users, function(o) { return o.active; }) )
// // Output: [ { user: 'pebbles', active: true } ]

function dropUntil(array, predicate) {
  const idx = array.indexOf(array.find((e) => predicate(e)))
  for (let i = 0; i < idx; i++) {
    array.shift()
  }
  return array
}
