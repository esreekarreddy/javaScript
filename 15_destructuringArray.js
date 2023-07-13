let values = [11,12,13,14,15]
console.log(values)

//destructuring array
let [a, b, c, d] = values;
console.log(d)

let [u, v, , x] = values
console.log(u, v, x)

//swap two values
let p = 3;
let q = 4;
[p, q] = [q, p]
console.log(p, q)

//split a string
let text = "My name is Sreekar Reddy"
let [a1, b1, c1, ...d1] = text.split(" ")
console.log(a1, b1, c1)
console.log(d1)
