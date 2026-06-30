// function showAlert(){
//     alert('hello')
// }
//  document.querySelector('button').onclick =  function showAlert(){
//                                                 alert('hello')
//                                               }

// document.getElementById('btn').onclick = function showAlert(){
//     alert('hello')
// }

// onSubmit
function showMessage(event)  {
event.preventDefault()
console.log(event)
document.getElementById('msg').innerHTML = 'submited sucessfully'

// alert('submited sucessfully')
}

function msgShow(){

    let msg =document.getElementById('msg').value 
    console.log(msg)
    document.getElementById('heading').innerHTML = msg
}

let count = 0;
let increment = ()=>{
    count++
    document.getElementById('counter').innerHTML = count
}
let decrement = ()=>{
    count--
    document.getElementById('counter').innerHTML = count
}

// addeventlisener
function buttonClick(){
document.getElementById('btn-click').style.backgroundColor = 'green'
}

 document.getElementById('btn').addEventListener('click',buttonClick)
                               
// counter