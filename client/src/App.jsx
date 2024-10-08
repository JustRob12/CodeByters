
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navar'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import './App.css'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/register' element= {<Register/>}/>
      <Route path='/login' element= {<Login/>}/>
     </Routes>

    </>
  )
}

export default App
