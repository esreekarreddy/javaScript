let map = new Map();

map.set("Sreekar", "Tester")
map.set("Chitra", "Developer")

console.log(map)
console.log(map.keys())
console.log(map.has("Chit"))
console.log(map.get("Sreekar"))

for(let [k, v] of map)
    console.log(k +":" +v)