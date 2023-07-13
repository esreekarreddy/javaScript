let values = [11,12,13,14,15, 16,17,18]

//for-each throwing a value into a function
values.forEach(value => console.log(value))

//filter example
console.log("Filter method giving even numbers")
values.filter(value => value %2 === 0)
    .forEach(value => console.log(value))

//map example
console.log("Map method giving numbers added 10 to each")
values.map(s => s + 10)
    .forEach(s => console.log(s))

//reduce example - add all values
console.log("Reduce method giving total sum")
let result = values.map(s => s + 10)
    .reduce((a, b) => a + b)
console.log(result)

let marks = [90, 95, 90]
let totalSum = marks.reduce((sum, mark) => sum+mark ,0)
console.log(totalSum)


//sort strings
let strings = ["Mango", "Banana", "Apple"]
strings.sort()
console.log(strings)

//sort integers
let sortValues = [16,17,18, 11,12,13,14,15]
console.log(sortValues.sort((a,b) => a-b)) //bubble sort