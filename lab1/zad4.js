// Креирај функција, која на влез ќе прима две низи составени од стрингови,
// кои претставуваат состав на два сендвича. Целта на оваа функција е да спореди
// дали сендвичите се направени од ист тип на леб, така што лебот е секогаш поставен на почетокот на низата.

// Пример како треба да изгледа функцијата:

// hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) ➞ true

function hasSameBread(firstSandwichIngredients, secondSandwichIngredients) {
  return firstSandwichIngredients[0] === secondSandwichIngredients[0]
}
