import './App.css'

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

import AdminDashBoard from './components/AdminDashBoard.jsx'
import BoxModel from './components/BoxModel'
import Child from './components/Child'
import Counter from './components/Counter.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Message from './components/Message.jsx'
import Register from './pages/Register.jsx'
import SearchBar from './components/SearchBar.jsx'
import Show from './components/Show.jsx'
import SimpleForm from './components/SimpleForm.jsx'
import SpeedCalculator from './components/SpeedCalculator.jsx'
import StudentsList from './components/StudentsList.jsx'
import VegetablesList from './components/VegetablesList.jsx'
import WeatherInfo from './components/WeatherInfo'
import Navbar from './components/Navbar.jsx'
import Profile from './pages/Profile.jsx'
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
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<BoxModel/>}  />
  <Route path='/login' element={<LoginPage/>}  />
  <Route path='/register' element={<Register/>}  />
  <Route path='/profile' element={<Profile/>}  />
  <Route path='/counter' element={<Counter/>}  />
  <Route path='/admin' element={<AdminDashBoard/>}  />
</Routes>
</BrowserRouter>
  {/* <p>home</p> */}
</div>

  )
}

export default App
