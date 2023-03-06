import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import Login from '../Views/Login'
import Register from '../Views/Register'
import Characters from '../Views/Characters'
import Episodes from '../Views/Episodes'
import Locations from '../Views/Locations'
import Header from '../Components/Header'
import AuthRoute from './AuthRoute'
import Favorites from '../Views/Favorites'

export default function Router() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/characters' element={<AuthRoute><Characters/></AuthRoute>} />
            <Route path='/locations' element={<AuthRoute><Locations/></AuthRoute>} />
            <Route path='/episodes' element={<AuthRoute><Episodes/></AuthRoute>} />
            <Route path='/favorites' element={<AuthRoute><Favorites/></AuthRoute>} />
        </Routes>
    </BrowserRouter>
  )
}
