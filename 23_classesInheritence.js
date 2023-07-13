const Person = require('./21_classes')
class Pet extends Person{

    get location(){
        return "Hyderabad"
    }

    constructor(firstName, lastName){
        super(firstName, lastName)
    }
}

let pet = new Pet("Hub", "Dub")
console.log(pet.fullName())
console.log(pet.location)