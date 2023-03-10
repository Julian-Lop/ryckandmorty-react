import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword,signOut  } from 'firebase/auth'
import { useUser } from 'reactfire'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const user = useUser()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
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

  useEffect(() => {
    if(user.data){
      navigate('/home')
    }
  },[user])

  return (
    user && 
    <div className='Login' >
      {!user.data &&
      <div className='box'>
        <div className='square' style={{ "--i":0 }}></div>
        <div className='square' style={{ "--i":1 }}></div>
        <div className='square' style={{ "--i":2 }}></div>
        <div className='square' style={{ "--i":3 }}></div>
        <div className='square' style={{ "--i":4 }}></div>
        <div className='container'>
          <div className='form'>
            <h1>Login</h1>
            <form action="">
              <div className='inputBox'>
                <input type="email" id='email' onChange={(e) => setemail(e.target.value)} placeholder='Email' />
              </div>
              <div className='inputBox'>
                <input type="password" id='password' onChange={(e) => setpassword(e.target.value)} placeholder='Password' />
              </div>
              <button className='btn1' onClick={submit}>Login</button>
            </form>
          </div>
        </div>
      </div>}
    </div>
  )
}
