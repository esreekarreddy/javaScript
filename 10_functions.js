function sum(a, b){
    return parseInt(a+b)
}

let result = sum(6,7)
console.log(sum(4,5))
console.log(result)

//function expression
let sub = function(a,b){
    return a-b;
}
console.log(sub(9,8))


//arrow function
let greet = (user) => {
    console.log("\tHello " + user);
    return true;
}
console.log("\t" + greet("Sreekar"))

let add = (a, b) => a + b;
console.log("\t" + add(2,-3))


//methods inside objects
let laptop = {
    cpu : "i3",
    ram : "8GB",
    getBrand : function(){
        console.log("Mac")
    },
    getPrice : () => "90k"
}
laptop.getBrand()
console.log(laptop.getPrice())