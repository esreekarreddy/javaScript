let values = [];

values[0] = 0;
values[10] = 10;

console.log(values)
console.log(values.length)

let i = 1;
while(i<10){
    values[i] = i;
    i++;
}

//for-of loop
for(let value of values){
    console.log(value)
}