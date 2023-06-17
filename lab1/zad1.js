// Креирај функција која како аргумент ќе содржи низа од броеви,
// целта на оваа функција е да ги инкрементира сите елементи од листа.

// Пример како треба да изгледа функцијата:

// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

function incrementItems(array) {
  for (let i = 0; i < array.length; i++) {
    array[i]++
  }
  //return array
}

// let arr = [1, 2, 3, 4]
// incrementItems(arr)
// console.log(arr)
