/*
class Alien {
    constructor(name, domain) {
        this.name = name;
        this.domain = domain;

        this.workPlace = (location) => this.location = location;
    }
}
*/

function Alien(name, domain){
    this.name = name;
    this.domain = domain;

    this.workPlace = (location) => this.location = location
}

let alien1 = new Alien("Sreekar", "Testing")
let alien2 = new Alien("Chitra", "Developer")
console.log(alien1.name, alien1.domain)
console.log(alien2.name, alien2.domain)

console.log(alien1.workPlace("hyd"))
console.log(alien1.location)