import './App.css'
import BoxModel from './components/BoxModel'
import Child from './components/Child'
function App() {
  let age = 23
  let userName  = 'Raju'
let arr = ['manu', 'raju', 'sonu']
let person = {
  name : 'seetha',
  age : 34
}
  return (
  
<div className="">
{/* <BoxModel/> */}
{/* <BoxModel/> */}
<Child userAge = {age} userName = {userName} arr = {arr}  person = {person}/>
</div>

  )
}

export default App
