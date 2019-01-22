function capitalizeWords (array) {
  if(array.length === 0) return []
  return [array[0][0].toUpperCase().concat(array[0].slice(1)), ...(capitalizeWords(array.slice(1)))]
}

const frts = ['taco', 'car', 'banana']
console.log(frts[0].slice(1))

console.log(capitalizeWords(frts))
