//if Else
let num1 = 9, num2 = 8
if(num1 < num2){
    console.log(num1 + " is less than " + num2);
}else
    console.log(num1 + " is more than " + num2)


//ternary operator    
let num = 5
let result
if(num%2===0)
    console.log(num + " is even")
else
    console.log(num + " is odd")

result = num%2===0 ? "Even" : "Odd"
console.log(result)


//switch case
let day = "Wednesday"
switch(day){
    case "Monday":
        console.log("Wake at 7 am")
        break;
    case "Tuesday":
    case "Wednesday":
        console.log("Wake at 4 am")
        break;
    case "Thursday":
    case "Friday":
        console.log("Wake at 5 am")
        break;
    case "Saturday":
    case "Sunday":
        console.log("Wake at 10 am")
        break;
    default:
        console.log("Get lost")
}

//template literal
let a = 5, b = 6
let sum = a + b
console.log(`Sum of ${a} and ${b} is ${sum}`)
console.log(`print
    new line`)

