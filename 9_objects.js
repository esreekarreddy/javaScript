//object literal
let alien = {
    name: "Sreekar",
    role: "Tester",
    'work exp': 1, 
}

//console.log(alien)
console.log(alien.name, alien.role)
console.log(alien['work exp'])

let person = {
    name: "Sreekar",
    age: 24,
    laptop : {
        cpu : "i3",
        ram : "8GB", 
        brand : "mac"
    }
}
delete person.laptop.ram
console.log(person.laptop.brand)
//use ? to bipass error in finding a undefined property
console.log(person.laptop.brand1?.length)
console.log(person.laptop)