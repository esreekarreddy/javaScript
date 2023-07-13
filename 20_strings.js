let day = "Tuesday "

console.log(day.length)

console.log(day.includes('T'))

let dayArray = day.split('s')
console.log(dayArray[0], dayArray[1])

console.log(day.trim().length)

let slicedDay = day.slice(4,8)
console.log(slicedDay)

let date1 = "23"
let date2 = "30"
let difference = parseInt(date2) - parseInt(date1)
console.log(difference, typeof difference)
console.log(typeof(difference.toString()))

let addOn = day + " is a funday, everyday"
let value = addOn.indexOf("day")
let count = 0
while(value !== -1){
    count++;
    value = addOn.indexOf("day", value+1)
}
console.log(count)