//for-in loop
let person = {
    name: "Sreekar",
    age: 24,
    laptop : {
        cpu : "i3",
        ram : "8GB", 
        brand : "mac"
    }
}

for( let key in person){
    console.log(key, person[key])
}

for(key in person.laptop){
    console.log(key, person.laptop[key])
}

console.log('laptop' in person)
