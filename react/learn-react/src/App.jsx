import './App.css'
import AdminDashBoard from './components/AdminDashBoard.jsx'
import BoxModel from './components/BoxModel'
import Child from './components/Child'
import LoginPage from './components/LoginPage.jsx'
import Message from './components/Message.jsx'
import Register from './components/Register'
import Show from './components/Show.jsx'
import StudentsList from './components/StudentsList.jsx'
import VegetablesList from './components/VegetablesList.jsx'
import WeatherInfo from './components/WeatherInfo'
function App() {
  let age = 23
  let userName  = 'Raju'
let arr = ['manu', 'raju', 'sonu']
let person = {
  name : 'seetha',
  age : 34
}
let isLoggin = false;
let statusOfUser = 'old'; 
let user = 'admin'
  return (
  
<div className="">
{/* <BoxModel/> */}
{/* <BoxModel/> */}
{/* <Child userAge = {age} userName = {userName} arr = {arr}  person = {person}/>
<WeatherInfo/> */}
{/* {
  statusOfUser === 'new' ? <Register/> : <LoginPage/>
}
{
  user === 'admin' && <AdminDashBoard/>
}
  */}

{/* <LoginPage isLoggin={isLoggin}/> */}
{/* <StudentsList/> */}
{/* <VegetablesList/> */}
{/* <Message/> */}
<Show/>
</div>

  )
}

export default App
