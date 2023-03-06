import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'

export default function Register() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const user = useUser()

  const submit = async (e) => {
    const auth = getAuth()

    await createUserWithEmailAndPassword(auth,email,password)   
  }

  return (
    <div>
      <h1>Register</h1>
      <label htmlFor="email">Email: </label>
      <input type="email" id='email' onChange={(e) => setemail(e.target.value)} />
      <label htmlFor="password">Password: </label>
      <input type="password" id='password' onChange={(e) => setpassword(e.target.value)} />
      <button onClick={submit}>Register</button>
    </div>
  )
}
