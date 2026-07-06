//1. callback function

// example:1
function parent (name, callback){

    callback(name)

}
 function callback(userName){
    console.log(`welcome ${userName}`)
    
 }

 parent('malu', callback)

//  exampfule:2
// food delivery app
// 1. food customer order  - ordered
// 2. delivery            - delivered

let delivery = ()=>{
    // .......
    // .....
    console.log('food delivered sucessfully')

  }

let orderFood = (callback)=>{
    let sucsess = false;
    // ......
    // ......
console.log('order placed')
sucsess = true
if(sucsess){
    callback()
}else{
    console.log('order failed')
}
}

document.getElementById('btn').addEventListener('click',()=>{
    orderFood(delivery)
})

// otp varification

// sendotp()
// login()

// 2.setTimeout

// setTimeout(callback,2000)

// setTimeout(()=>{
// console.log('hai')
// },5000)

// setInterval
// let id =setInterval(()=>{
//     console.log('offer')
// },1000)

// setTimeout(()=>{
//     clearInterval(id)

// },5000)

// count down

let count=10
let countDown=setInterval(()=>{
    console.log(count)
count--;
if(count ===0){
    clearInterval(countDown)
}
},1000)

// task:1
// image slider
// document.getelementbyid().src = 