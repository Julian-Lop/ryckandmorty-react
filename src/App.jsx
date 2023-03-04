import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import React from 'react'
import { AuthProvider, DatabaseProvider, useFirebaseApp } from 'reactfire'
import './App.css'
import Router from './Router/Router'

function App() {

  const app = useFirebaseApp()

  const database = getDatabase(app)
  const auth = getAuth(app)

  return (
    <AuthProvider sdk={auth}>
      <DatabaseProvider sdk={database}>
        <Router/>
      </DatabaseProvider>
    </AuthProvider>
  )
}

export default App
