import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import React from 'react'
import { AuthProvider, DatabaseProvider, useFirebaseApp } from 'reactfire'

//Router
import Router from './Router/Router'

function App() {

  const app = useFirebaseApp()

  const database = getDatabase(app)
  const auth = getAuth(app)

  return (
    <div className='App'>
    <AuthProvider sdk={auth}>
      <DatabaseProvider sdk={database}>
        <Router />
      </DatabaseProvider>
    </AuthProvider>
    </div>
  )
}

export default App
