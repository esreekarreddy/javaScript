module.exports = class Person{

    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    age = 23

    //property
    get location(){
        return "Bangalore"
    }

    fullName(){
        return this.firstName + " " + this.lastName
    }
}

/*
let person = new Person("Sreekar", "Reddy");
console.log(person.age)
console.log(person.location)
console.log(person.fullName())

let person1 = new Person("Chitra", "Pinna");
console.log(person1.fullName())
*/