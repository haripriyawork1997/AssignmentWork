/*var mark=[35,45,55,65,90,88]
console.log(mark[2])
mark[3]=100
console.log(mark)
console.log(mark.length)
mark.push(10)
console.log(mark)
mark.pop()
console.log(mark)
mark.pop()
console.log(mark)
mark.unshift(5)
console.log(mark)
mark.shift()
console.log(mark)

console.log(mark.indexOf(100))
console.log(mark.indexOf(53))
console.log(mark.includes(118))
console.log(mark.includes(45))

let subMarks=mark.slice(1,3);
console.log(subMarks)
*/

/*let names=["John", "David", "Peter"]

names.forEach((name) => {
    console.log(name);
})*/
/* 
let fruits=["apple","mango","orange"]
    fruits.forEach((fruit) =>
    {
        console.log("i like " + fruit)
    }
)
*/

/*
let numbers= [10,20,30,40,50]
numbers.forEach((number) =>{ 
    console.log(number);
})
*/
let numbers = [1, 2, 3, 4];

let result = numbers.map((number) => {
    return number * 2;
});
console.log(result);
