// Да се напише функција merge која ќе спојува 2 полиња во JavaScript.
// Функцијата треба да го врати резултантното поле.

// Спојувањето треба да се изврши како на примерот:

// 1, 2, 3, 4, 5
// 100, 200, 300, 400, 500
// [ [ '1', '100' ],
//   [ '2', '200' ],
//   [ '3', '300' ],
//   [ '4', '400' ],
//   [ '5', '500' ] ]
// Поради едноставност, претпоставете дека работите со низи од стрингови кои се задаваат на стандарден влез.

const merge = function (array1, array2) {
  const resultArray = []
  const len = array1.length > array2.length ? array1.length : array2.length

  for (let i = 0; i < len; i++) {
    resultArray.push([array1[i], array2[i]])
  }
  return resultArray
}
