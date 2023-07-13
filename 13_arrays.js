let valuesArray = new Array();
valuesArray.push(6)
valuesArray.push(61)
valuesArray.push(16)
valuesArray.push(19)
console.log(valuesArray)
console.log(valuesArray.pop())
valuesArray.shift() //removes first element 
console.log(valuesArray)
valuesArray.unshift(11) //adds element at the beginning
console.log(valuesArray)
valuesArray.splice(1,2)  //from given index will remove given no' of elements
console.log(valuesArray)

let values = [5, 7, 8];
console.log(values)
console.log(values.length)
console.log(values[1])
console.log(values[4]) //will not give indexOutOfBound Error
console.log(values.indexOf(7))
console.log(values.includes(89))

let names = ['Sreekar', "Chitra"]
names[2] = 'buddii'
console.log(names)

