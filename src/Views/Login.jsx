import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword,signOut  } from 'firebase/auth'
import { useUser } from 'reactfire'

export default function Login() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const user = useUser()

  const submit = async (e) => {
    const auth = getAuth()
    if(!email || !password){
      return alert('Email or Password empty')
    }
    try {
      const sign = await signInWithEmailAndPassword(auth,email,password)    
    } catch (error) {
      return alert('Wrong email or password')
    } 
    
  }
  
  const logout = async () => {
    const auth = getAuth()

    const out = await signOut(auth)
  }

  return (
    user && <div>
      {!user.data? 
      <>
        <h1>Login</h1>
        <div style={{width:'250px', display:'flex', justifyContent:'space-between', margin:'10px'}}>
          <label htmlFor="email">Email: </label>
          <input type="email" id='email' onChange={(e) => setemail(e.target.value)} />
        </div>
        <div style={{width:'250px',display:'flex', justifyContent:'space-between', margin:'10px'}}>
          <label htmlFor="password">Password: </label>
          <input type="password" id='password' onChange={(e) => setpassword(e.target.value)} />
        </div>
        <button onClick={submit}>Login</button>
      </> :
      <>
        <h1>Logged</h1>
        <h2>{user.data.email}</h2>
        <button onClick={logout}>Logout</button>
      </>
      }
    </div>
  )
}
