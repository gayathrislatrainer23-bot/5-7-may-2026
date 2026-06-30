// // <!-- loop -->
// // 1-3
// for(let i= 0; i<4;i++){
//     console.log(i)
// }

// for(let i =0;i<=15;i++){
//     if(i%2 === 0){
//         console.log('1-15',i)
// }
// }
// let sum =0;
// for(let i =1;i<=5;i++){
//     // sum= sum+i
//     sum +=i;



// }
// console.log('sum',sum)

// // 1-15 print
// // print even numbers
// // print odd numbers
// // sum of nums from 1 to 5
// // Print all numbers from 1 to 50 that are divisible by 5.
// // Print the multiplication table of 5.    template literal
// // 

// //  multiplication table of 5.
// let num=5;
// for (let i =1; i<=10;i++){
//  console.log(`${i} x ${num} = ${i*num}`)

// }

// 10  to 1
// 10
// 9
// i--
// j=i--

// for(let i=10; i>=1; i--){
//     console.log(i)
// }

// print even numbers 1- 50 reverse   50, 48  ,46   
// print odd numbers  1- 50 reverse   49,47,45,43

// while loop
// 1-5
let i = 1;
while (i <= 5) {
  console.log('while', i)
  i++;
}
// 10-1
let j = 10;
while (j >= 1) {
  console.log(j)
  j--;
}
let a = 5
let b = a++;
console.log('b:', b)

//  do while loop  0 to 5
// let c=0
//  do{
// console.log(c)
// c++;
//  }while(c <=5)
// 0
// 1
// 2
// 3
// 4
// 5

// print 10 to 1
let d = 10
do {
  console.log(d)
  d--
} while (d >= 1)


//  odd number 1 to 10 do while


function greeting() {
  console.log('this is a functon')
}

// function call
greeting()

function findEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even')
  } else {
    console.log('odd')
  }

}
findEvenOrOdd(8)
findEvenOrOdd(91)

// sum function   -->10 
//  sum with limit --> 30 to 80

function findSum(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  //  console.log('sum:',sum)
  return sum;
}

let sum = findSum(10)

console.log(sum)

console.log('call before del:', findSum2(10, 100))

function findSum2(num1, num2) {
  let sum = 0
  for (let i = num1; i <= num2; i++) {
    sum += i
  }
  //  console.log('sum:',sum)
  return sum;
}

// let sum2 = findSum2(10,100)

// console.log(sum2)


// Largest of Three Numbers
//  Write a function that uses if-else to find the largest among 3 numbers.
// Count Even Numbers  10.
// Print the multiplication table of 5.

17 / 6 / 2026
// console.log( 'sum:',sum1(24,1))
let sum1 = function (num1, num2) {
  let sum = 0
  sum = num1 + num2
  return sum
}

console.log('sum:', sum1(24, 1))

//  arrow fun  

// const add = ()=> console.log('haii')
const add = (num1, num2 = 15) => {
  let sum = num1 + num2
  return sum
}

console.log(add(15, 10))
// default value

// calculate bill amount  i/p price and quantity
// Create a function to calculate the area of a rectangle.

let fruits = ['Apple', "Orange", "Papaya", 'mango']
console.log(fruits)
// index 
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits.length)
console.log(fruits.length - 1)
console.log(fruits[fruits.length - 1])
// last elemt  index--> array.length-1

// array methods
//  mutable 
//  add, delete , update

let nums = [1, 2, 3, 4]
nums.push(5) //add element to end
nums.pop()    // remove element end
nums.unshift(0) //add element to start 
nums.shift()  // remove element from start
console.log(nums)

// 1.Create an array of 5 student names. Add one more using push() and pop.
// 2.Remove the first element using shift() and print the new array.
//3. Add an element at the beginning using unshift().

// num1 to num2 limit sum

let sumWithLimit = (num1, num2) => {
  if (num1 > num2) {
    return 'this limit is invalid'
  }
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i
  }
  //  console.log(sum)
  return sum

}

console.log('sumWithLimit:', sumWithLimit(3, 10))
console.log('sumWithLimit:', sumWithLimit(30, 10))

let colors = []
colors.push('red', 'green', 'yellow')
colors.unshift('blue', 'pink')
console.log(colors)

// for of  --> elements
// --> each element
// for(let element  of colors){
//   console.log(element)
// }

// for in loop    ---> index
// --> memeory position

for (let index in colors) {
  console.log(index)
  console.log(colors[index])
}

// 1.  loop using for of 
let numbers = [1, 4, 6, 3, 7, 34, 71, 42]

//  second element
let items = ['book', 'pen', 'pencil', 'scale']
console.log(items[1])

// 2. loop using for in loop
//  print even number only
let numbers1 = [2, 5, 8, 11, 14]

// for(let index in numbers1){
//            if(numbers1[index]%2 === 0){
//             console.log(numbers1[index])
//            }
// }
// console only number >10 , [2,34,5,54,9]

// find the first and last number [45,34,67,23]
// create  a function that find nth element of an array
//  find  smallest element  swap

//  find the index of 1000

let arr = [100, 250, 300, 1000, 500]

function findIndex(arr, num) {
  for (let index in arr) {
    if (arr[index] === num) {
      return index
    }
  }

}
console.log(findIndex(arr, 1000))

// for LOOP IN ARRAY

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// -ve num
let negativeNum = [0, -17, 70, 20, 35, -45]

for (let i = 0; i < negativeNum.length; i++) {

  if (negativeNum[i] < 0) {
    console.log(negativeNum[i])
    break;
  }

}
// map

let nums1 = [1, 2, 3, 4, 5]
// [2,4,6,8,10]
let doublenums = nums1.map(
  (e, i) => e * 2
)
console.log(doublenums)
console.log(nums1)

// map add 100  in each element

console.log(nums1.map((e) => e + 100))

// filter

let small = nums1.filter(
  (e) => e < 4
)
console.log(small)

// even num
console.log(
  nums1.filter(
    (e) => e % 2 === 0
  )
)
// positive  num

// filter +map
let arr3 = [3, 6, 9, 12, 15]

let result3 = arr3.filter((e) => e > 6)
  .map((e) => e * 2)

console.log(result3)

// find --> only one value returns

number1 = arr3.find((e) => e > 10)
//  console.log(number1)

// From [5, 8, 12, 19, 25], find the first number greater than 15.
let arr4 = [5, 8, 12, 19, 25]
console.log(arr4.find((e) => e > 15))
// o/p 19

// reduce

let num4 = [10, 20, 30]

// arr.reduce(()=>, initialValue)
// let sum =0
let sum4 = num4.reduce((acc, cur) => acc + cur, 0)
console.log(sum4)
// first
// acc =0
// curr = 10
// accu = 0+10= 10
// 2nd
// acc= 10
// curr = 20
// acuu =10 +20
// 3rd
// accu = 30
// cur = 30
// accu = accu +cur = 30+30= 60

//  find product of elements in an array
//  find avg of elements in an array function

let product = num4.reduce((p, cur) => p * cur)
console.log(product)

let avg = sum4 / num4.length
console.log(avg)

// include
let fruit = ['apple', 'orange', 'banana']

console.log(fruit.includes('banana'))
console.log(fruit.includes('papaya'))

// let words = ['I', 'Love', 'Javascript']

let words = ['I', 'Love', 'Javascript']

let msg = words.reduce((acc, word) => { return acc + ' ' + word })
console.log(msg)

//  reduce(()=>{ retrun })

// object
// ['Arun', 23, 'Chennai']

let person = {
  name: 'Arun',
  age: 23,
  city: 'Chennai'
}

// dot operator
// object.key ===> value
console.log(person.name)
console.log(person.age)
console.log(person.city)

// bracket notation
console.log(person['age'])
console.log(person['name'])

// add
person.gender = 'male'
console.log(person.gender)


// update 
person.age = 24

// delete
delete person.city
console.log(person)

// for in -->  

for (let key in person) {
  console.log(key + ":" + person[key])

}

// 1. Create an object student with name, age, and grade. Print all values.

// methods
const students = {
  name: 'Raju T',
  subject: ['Maths', 'Physics', "Biology"],
  marks: {
    maths: 56,
    physics: 67,
    biology: 89
  },
  msg : function (){
    console.log('hello' + this.marks.biology )
    // console.log('hi')
  }
}

console.log(students.marks.maths)
console.log(students?.marks?.maths)
// optional chaining

// dot operator
// bracket notation
// crud - create update, delete
//  nexted object, object Array

let arr8 = students.subject
// for(e of arr8 ){
//   console.log(e)
// }
// for(e of students.subject ){
//   console.log(e)
// }
// for 
for (let i = 0; i < students.subject.length; i++) {
  console.log(students.subject[i])
}

let studentsList = [
  { id: 1, name: "Anu", age: 20 },
  { id: 2, name: "Rahul", age: 21 },
  { id: 3, name: "Meera", age: 22 }
]

for (let i = 0; i < studentsList.length; i++) {
  console.log(studentsList[i].id, studentsList[i].age)

}

// jsx
// map
studentsList.map((e) => console.log(e.id))

//1. array itration loop -- for for in for of 
// 2.apply  dot operator on elements of array, for take values in object

// task:1
// price of the phone is  15000  : template literal
let products = [
  { id: 1, name: "Phone", price: 15000 },
  { id: 2, name: "Laptop", price: 50000 },
  { id: 3, name: "Watch", price: 2000 }
]

//  console.log(`price of the phone is ${products[0].price}`)
for (let i = 0; i < products.length; i++) {
  console.log(`${products[i].name} price is ${products[i].price}`)

}
console.log("name" in person)

let calculator = {
  add: (a, b) => {
    return a + b
  }

}

console.log(calculator.add(3, 7))

// 24/6/2026

// object utility methods

console.log(Object.keys(students))
// ['name',"subject","marks" ]

console.log(Object.values(students))
// ['Raju T', ,]
console.log(Object.entries(students))

// [["name", 'raju'],[key , value], [key2,value2]]

// 16. Create an object game and print how many keys it has.
