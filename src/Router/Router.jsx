import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'

import Login from '../Views/Login'
import Register from '../Views/Register'
import Characters from '../Views/Characters'
import Episodes from '../Views/Episodes'
import Locations from '../Views/Locations'

export default function Router() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/characters' element={<Characters/>} />
            <Route path='/locations' element={<Locations/>} />
            <Route path='/episodes' element={<Episodes/>} />
        </Routes>
    </BrowserRouter>
  )
}
