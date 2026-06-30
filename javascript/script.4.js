// // conditional  statements
// let a = 10
// if(a<=10){  // true
//   console.log(a) // it will print 
// }
// // if(a<=10) console.log()

// if(a<10){
//   console.log(a)
// }else{
//       console.log(' your number should less than 10')
// }

// // age checking

// let age = 15
// if(age>= 18){
//      console.log("Adult")

// }else{
//     console.log('Minor')
// }

// //  else if ladder

// let marks = 85

// if(marks >= 90){
//     console.log('Grade A');
    
// }else if(marks  >= 75 && marks <= 89){
//     console.log('Grade B');
// }else if(marks  >= 50){
//     console.log('Grade C');
// }else {
//     console.log('Fail');
    
// }

//  nested if 

// 1. even or odd    a%2 === 0   even else odd
//  2. the number is +ve or negative 
// 3.  pass or fail  --> marks 


// switch operator
let day = 2
switch(day){
    case 1 : 
    console.log('Monday')
    break;
    case 2 :
       console.log('Tuesday')  
        break;
    case 3 :
       console.log('wednesday')  
        break;
    case 4 :
       console.log('Thursday')  
        break;
    case 5 :
       console.log('Friday')  
        break;
    case 6 :
       console.log('Saturday')  
        break;
    case 7 :
       console.log('Sunday')  
        break;
       default :
       console.log('invalid')
     
}

 let color = 'red'
 switch(color){
    case 'red':
        console.log('stop')
        break;
     case  'green':
         console.log('go')
     default : 
     console.log('invalid')
 }

  let num = 5
  num > 3 ? console.log(`${num} is a big number`) :console.log( "this is a small number")
  
  num < 10 && console.log(" this is a small number") 
let isGood = true
isGood && console.log('this is good')

// ``
// `${num}`







