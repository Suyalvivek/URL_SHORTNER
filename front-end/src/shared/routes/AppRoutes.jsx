import React from 'react'

import Login from '../../modules/user/pages/Login'
import Register from '../../modules/user/pages/Register'
import Home from '../../modules/user/pages/Home'
import { Route, Routes } from 'react-router-dom'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path = "/login" element={<Login/>}></Route>
        <Route path = "/register" element={<Register/>}></Route>


    </Routes>
  )
}

export default AppRoutes