    <!-- css syntax selectors -->
     <!-- selector{
        property : value
     } -->

        <!-- 1 tag -->
        p{

        }
     2.   <!-- class -->

     .red-text{
    color: brown;
}
3. id selector

# id-name{

}

<!-- COLORS -->
color : red;
      : rgb(162, 255, 0);

hex - hexadecimal
#00ff00

#251875
#ffff
#0000
#00ff00
#3030c4

<!-- background -->
background-color : ""
background : ""
background-image: 


<!-- css box model -->

1.html element is considered as box
  includes   content padding  border margin

margin --> margin create space outside the element
  margin : top right bottom left
            top/bottom right/left
            top,bottom, right,left

padding --> padding create space inside the element

    <!-- css units -->

    1. px (pixels)
        ---> fixed  unit 

     2. em (Relative to parent)
     1 em =    
     div{
      font-size : 10px
     }
     p{
font-size : 1em(10px), 2em (2X10px = 20px)
     }

     div
<p>  <p>
     div

     div =40px
     <p>  80px <p>
     div


    3. rem -- (Relative to root)

    html{
      font-size : 10px
    }
    h1{
      font-size : .5rem
    }

    
    Pseudo class in css

    selector:psedo-class{
      pro: value
    }

    hover- effect
button



style
button:hover{
  b-color: red
}

transition
1s 

8/6/2026
<!-- JAVASCRIPT -->

1. javascript- make  web page interactive and dynamic
2. script- write js in html
3. console.log() used display msg in browser's
4. comments used to explain code. ignored by browser
5.  document.write('hello all')
        alert('haii')
     dom manupulation methods


1. variables 
1. var

var  fruit1 = apple
declaration name assign data

var : 
var fruit1 = apple
console.log(fruit1)


var fruit1 = orange 
console.log(fruit1)

var --> redeclare and reassign 

9/6/2026

2. let 

let ??
let num= 10
let num1 ;

 num = 20
 can't redeclare  but can reassign 

3. const
const vagitable = 'onion'
const vagitable  = 'chilli' XXX

 can't redeclare  and  reassign 

Data type

number: 1,2,, 1.5, 
string : text- alb, num
"data", 'data'
boolean : true , false, 

let isAgeAbove = false;

types of datatype

premitive : number, string, boolean
non-prtemitive : object, array;

10/6/2026

ARRAY
collection of fruits
fruit1= 'apple'
fruit2= 'apple'
 array : data storage
 array: 
 
 let arr = [1,2,3]

 OBJECT

 let student = {
  key : value
 }

 let student = {
  name : 'Malu' ,
  age  : 23,
 }

 OPERATORS
 1.Arithamatic operators
  +,-,*,/,...
 2.Comparison operators
 3.Logical operators
comparison
and 
or
console.log(5>3 && 5<10>)   true
console.lg(15>10 || 8 <3>)  true
console.log(5 != "5")       false



 4.Assignment Operators
 let a = 10

a=5

a +=3  // a = a+3
a -= 3      a = a-3
 a *=3            a  =  a*3
 a /=3             a = a/3

 a=5
 a+=3 = 5+3 = 8
 a -=3  5-3 = 2
 a  *=3  5*3 = 15
 a  /=3   5/3 


// conditional  statements

if --> only if  the condition true
else --->

 
if(condition){
  console.log(a)
}

 let a = 10

if(a<=10){
  console.log(a)
}

o/p   10

if(a<10){
  console.log(a)
}

nill

your number is less than 10

if(a<10){
  console.log(a)
}else{
  console.log(' your number should less than 10')
}

<!-- 12/6/2026 -->

<!-- switch statement -->
let a = ''
switch (variable = 4 ){
  case  value1  1:
  console.log()
  case  value2 :
  case  value3 :
  case  value4 :
    console.log()
}



day 1 - monday

day - 1
print monday


3. ternary

 condition ? left : right
 5 >3 ?  the number is big : 'the number is small' 
  

template literal
 javascript variable embaded inside a string
 
  <!-- 15/6/2026 -->
loop : repeat a bock of code  
       condition /limit

1 to 10
1
2
3
4 ....
1.for loop
2.while loop
3.do while 

  loop
// for loop
for(initialization; condition; increment){

}
for(let i = 0; i<4;i++){
    console.log(i)
}
<!-- first itration -->
i=0
check condition 0<4 ===> true
print 0
i++ --> i=0+1=1
<!-- 2nd itration -->


i=1
check condition 1<4 ===>true
print 1
i++ --> i=1+1=2
<!-- 3rd itration -->


i=2
check condition 2<4 ===>true
print 2
i++ --> i=2+1=3
<!-- 4rd itration -->


i=3
check condition 3<4 ===>true
print 3
i++ --> i=3+1=4
<!-- 5rd itration -->


i=4
check condition 4<4 ===>false
<!-- print 4  not print 4 -->

out
a++    a+1


a++ - post-increment
++a - pre-increment

a= 5

b= a++
a =6
b= 5

c= 8
d= ++c
c= 9
d=9

class- task: print even number 1 to 15


<!-- while loop -->
while(condition){
code
}

let i = 1
while(i<2){
console.log(i)
    i++;
}


 block scoped- {} let, const
 function scoped /Global
 global scope - var

 <!-- sum of first 5 number -->
 
16/6/2026

do.. while loop

do{
    <!-- code -->
}while(condition)


function
A function is a block of code designed to perform a specific task. 

function Greetings(){
    console.log("haii)
}
function --> keyword
Greatings --> Name of function
() --> invoking the fun

  function Greetings(num1){

    console.log("haii")
           do{
 console.log("num1",num1)
 num1++;

}while(num1<20)

}
let ten =15

// Greetings(0)
// Greetings(1)
Greetings(ten)

// function checking(num){

// }
function features(student){
    console.log(`${student} should be good look`)
    // template literal (back notation)
}
let student1= "Riyas"
let student2 = "sanjai"
features(student1)
features(student2)

task:
function checkEvenOrOdd(num){

}
Odd(argument1, argument2)

function features(student){
       console.log(`${student} should be good look`)

    return  (`${student} should be good look`)


}
17/6/2026
types of functions
1.function declaration

function nameofFunction(){

}

function -- function declaration
2. function Expretion 
function Expretion -- function assigned to a variable
    let sumofIntiger = function (){
                          
                        }

sumofIntiger()

3. Arrow function

const school=() => {}

Anounymous function

function (){

}

Default Parameter

function greet(name = "Renu"){
    console.log(name)
}

push, pop,shift unshift,

Array --> collection of  values stored i single variable

let fruits =["Apple", "Orange"]
1.fruits[index] 
2. push -- add element to last
3. pop -- remove element from last
4. shift -- remove element from first
4. unshift -- add element to first

loops in array

1. for  of loop
2. for  in loop
3. for 


Create an array of 3 Vegetables and add one more using push().


Remove the last element from an array using pop().


Add one element at the start using unshift().


Remove the first element using shift().


Print all elements of an array using a for loop.


Print all elements using for...of loop.
Print all elements using for...in loop.


itrating


<!--map  -->
let nums = [1,2,3]
doubleNums = []

map --> function/ action new array return

let doubleNums = nums.map(
  (elemet)=> element*2
)
 let newarr = arr.map(
  (e)=> e-2
 )

 Create an array [10, 20, 30].
 Use map() to make a new array where each number is divided by 10.
 Create an array [3, 6, 9, 12, 15]. Use filter() + map() to get double of numbers greater than 6.
 From [5, 8, 12, 19, 25], find the first number greater than 15.
 Write a program  to remove negative numbers from an array [-2, 5, -1, 8, 10] 
 Write a program  to find the first odd number in an array [2, 4, 6, 7, 9].

1. From the array [1, 2, 3, 4, 5, 6, 7, 8], return only even numbers and then multiply each by 2.

2. From the array [5, 12, 8, 20, 3, 15], remove all numbers less than 10 and then add 5 to the remaining numbers.

3. From the array [25, 45, 60, 30, 80, 50], keep only marks above 40 and then convert them to percentage by multiplying by 2.

4. From the array [-10, 20, -5, 55, 70, 30], take only positive numbers and then find the first value greater than 50.

5. From the array [2, 3, 4, 5, 6, 8], remove all odd numbers, square the remaining numbers, and finally get the first number greater than 100.



// callback function
a fun passing to an another function as an argument to execute later.

function parent(child){

  
  child()

}


function child(){

}

function main (callback){

}



