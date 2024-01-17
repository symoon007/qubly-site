
import { Route, Routes } from 'react-router-dom'
import {About, Contact, Home, Login, Pricing} from '../routerlinks'

const AppRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/contact_us" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
  )
}

export default AppRoutes