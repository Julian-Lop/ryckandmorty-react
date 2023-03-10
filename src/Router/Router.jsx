import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'

import Login from '../Views/Login'
import Register from '../Views/Register'
import Characters from '../Views/Characters'
import Episodes from '../Views/Episodes'
import Locations from '../Views/Locations'
import Header from '../Components/Header'
import AuthRoute from './AuthRoute'
import Favorites from '../Views/Favorites'
import Character from '../Views/Character'
import Location from '../Views/Location'
import Episode from '../Views/Episode'
import Home from '../Views/Home'

export default function Router() {
  return (
    <HashRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/home' element={<AuthRoute><Home/></AuthRoute>} />
            <Route path='/characters' element={<AuthRoute><Characters/></AuthRoute>} />
            <Route path='/locations' element={<AuthRoute><Locations/></AuthRoute>} />
            <Route path='/episodes' element={<AuthRoute><Episodes/></AuthRoute>} />
            <Route path='/favorites' element={<AuthRoute><Favorites/></AuthRoute>} />
            <Route path='/characters/:id' element={<AuthRoute><Character/></AuthRoute>} />
            <Route path='/locations/:id' element={<AuthRoute><Location/></AuthRoute>} />
            <Route path='/episodes/:id' element={<AuthRoute><Episode/></AuthRoute>} />
        </Routes>
    </HashRouter>
  )
}
