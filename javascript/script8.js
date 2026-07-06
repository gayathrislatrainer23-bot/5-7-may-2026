// // console.log('A')
// // setTimeout(()=>{
// // console.log('B')
// // },1000)

// // console.log('C')



// // let delivery = ()=>{
// //     // .......
// //     // .....
// //     console.log('food delivered sucessfully')


// //   }

// // let orderFood = (callback)=>{
// //     let sucsess = false;
// //     try{

// //         setTimeout(()=>{ 
// //             //  err.msg
// //         sucsess = true
// //         // task
// //         console.log('order placed')

// //         if(sucsess){
// //             callback()
// //         }
// //         },2000)
// //     }
// //     catch(err){
// //         conaole.log(err.msg)
// //     }

// // }

// // orderFood(delivery)

// // // promise 

// let foodOrder = new Promise(
//     (resolve,reject)=>{
//     let delivered = false;

// if(delivered ){
//     resolve('food delivered sucess')
// }else{
//    reject('order cancelled') 
// }
// }
// )


// foodOrder.then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
// console.log(err)
// })





// // let num1 = 10
// // let num2  = 2
// // let result = num1/num2 

// function division(num1, num2){
// let result 
// try{
//     if(num2 === 0){
//         throw new Error("this is invalid number");

//     }


//   result = num1/num2 
//   console.log(result)
// }
// catch(err){
// console.log(err.message)
// }
// }
// division(10,0)

// let a= 10, b = 10 
// 20
// // function add(a,b){
// // return a+b
// // }

// // function sub(a,b){
// // return a-b
// // }
// function mul(a,b){
// return a*b
// }


// //  add(10,10)     // 20
// //    mul(10,20)

// mul(10,add())
// // callback hell

// function multiply(a,b){
//       console.log('mul')
//        return    new Promise((res)=>  res(a*b) )


// }
// function add(a,b){
//     console.log('add')
//      return    new Promise((res)=>  res(a+b) )
// }

//              add(2,3)
//              .then((sum)=>  multiply(6,sum)
//              .then((product)=>console.log(product)
//             )
//  )

//     //  students  marks   >50 pass resolve
//                         //   reject  fail



// async await


// async function sayHello() {
//     try {


//         let res = await fetch('https://dummyjson.com/users')
//         let result = await res.json()
//         console.log(result)
//         // return result
//     } catch (err) {
//         console.log(err)
//     }

// }
// // sayHello()

// // let add = async (a,b)=>{

// //      let sum;
// //   await  setTimeout(()=>{
// //     // console.log(a)
// //         sum = a+b;
// //     },2000)
   
// //     return sum
// // }

// // add(10,20).then((sum)=> console.log(sum))
// //           .catch((err)=>console.log(err.message))

// // Simulate a user login process:
// // console.log("Checking user...") (sync)


// // After 2 sec print "User found"


// // Print "Loading dashboard..." immediately after setTimeout


// async function  login(){
//     console.log('Checking user...')
//        let res =  await  checkUser()
//        console.log(res)
// }

// let checkUser = ()=>{
//     // let msg
//    return new Promise ((resolve)=>{

//    setTimeout(()=>{
// resolve(' user found')
//        },2000)
        
// })  

//     // return msg
// }

// login()


// localStorage.setItem('name', 'Gayathri')
// let key =localStorage.getItem('i18nextLng')
//  console.log(key)
// //  localStorage.clear()
//   localStorage.removeItem('name')

// //   session

// sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')

// // cookies
// document.cookie = 'userName=Gayathri'

//  console.log(cookieStore.getAll)

// 3/7/2026

// class and object

// let student1 ={
//     name: 'Tharun',
//     age : 23

// }
// student2 ={
//     name: 'Arun',
//     age : 23

// }

class Student {
    constructor(name,age){
      this.name =name;
      this.age = age;
    //   console.log(this.age)
    }
    displayName(){
        console.log(`my name is ${this.name}`)

    }

}

// object

// let student1  = new Student('Tharun',23)
// let student2  = new Student('Arun',25)
// student1.displayName()
// console.log(student1.name)

// task: person class

// destructuring
//1. Array
let colors = ['green', 'red', 'blue']
let [c1,c2,c3]     = colors
console.log(c1)
console.log(c2)
console.log(c3)

// vegitables 


// nested destructure

let [a,b,[c,d]]=[1,2,[3,4]]

console.log(d)


function check ([a,b]){

    console.log(a)
}

check(['apple',''])

// object
 
let student ={name: 'Tharun',age : 23 }   

 let { name , age } = student 
// let name = student1.name
console.log(name)



let car = {
    brand : "Maruthi",
    cc    : "100",
    engine : 'petrol',
     more :{
        key1 : 'yes',
        key2 : 'no'
     }
} 

let {brand, cc, engine,more:{key1, key2}} =car
console.log(key2)

function carCollection({brand, cc, engine,more:{key1, key2}}){
    console.log(cc)
}
carCollection(car)

// spread operator

let arr = [1,2,3,4]
let arr2 = [-1,0,...arr]
console.log(arr2)

let color1 = ['red','green','blue','white']
let color2 = ['yellow', 'pink', 'orange']
// let c = [...color1,...color2]
console.log(c)

// rest operator
const [first,second, ...restMembers] = color1
console.log(restMembers)
let user ={
    name : 'hari',
    age  : 21,
    gender : 'male'
}
const {gender, ...userDetails} = user
console.log(userDetails)




