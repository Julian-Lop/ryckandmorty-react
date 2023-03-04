import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword,signOut  } from 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'

export default function Login() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const firebase = useFirebaseApp()
  const user = useUser()

  const submit = async (e) => {
    const auth = getAuth()

    try {
      const sign = await signInWithEmailAndPassword(auth,email,password)
      console.log('sign',sign)
    } catch (error) {
      console.log('error','invalid')
    } 
    
  }
  
  const logout = async () => {
    const auth = getAuth()

    const out = await signOut(auth)
    console.log('signout',out)
  }

  if(user.data) {
    console.log('user',user)
  }

  return (
    <div>
      {!user.data ? 
      <>
        <h1>Login</h1>
        <label htmlFor="email">Email: </label>
        <input type="email" id='email' onChange={(e) => setemail(e.target.value)} />
        <label htmlFor="password">Password: </label>
        <input type="password" id='password' onChange={(e) => setpassword(e.target.value)} />
        <button onClick={submit}>Login</button>
      </> :
      <>
        <h1>Logued</h1>
        <h2>{user.data.email}</h2>
        <button onClick={logout}>Logout</button>
      </>
      }
    </div>
  )
}
