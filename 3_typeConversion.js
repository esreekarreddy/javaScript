//explicit conversion
let num = 6
console.log(num, typeof num)

num = String(num)
console.log(num, typeof num)

console.log(parseInt("123 SRE"))

//type coercion
let x
console.log(x, typeof x)

x = 8
console.log(x, typeof x)

x = x + ""
console.log(x, typeof x)

x = +x + 2
console.log(x, typeof x)

x = x - 2 
console.log(x, typeof x)

x = !x
console.log(x, typeof x)

console.log(Boolean(null))
console.log(Boolean(undefined))