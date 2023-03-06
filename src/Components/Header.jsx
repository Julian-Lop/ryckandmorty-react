import React from 'react'
import { NavLink } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword,signOut  } from 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'

export default function Header() {

  const user = useUser()

  const logout = async () => {
    const auth = getAuth()
    const out = await signOut(auth)
  }

  return (
    <div style={{position:'absolute',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',background:'#ffffff',width:'100vw',left:'0px',top:'0px'}}>
      {user.data && <ul style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly', textDecoration:'none',width:'40%'}}>
        <li>
          <NavLink 
            to="/characters"          
          >
          Characters
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/locations"          
          >
          Locations
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/episodes"          
          >
          Episodes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
          >
          Favorites
          </NavLink>
        </li>
      </ul>}
      {user.data && <button onClick={logout} style={{height:'80%',textAlign:'center'}}>Logout</button>}
    </div>
  )
}
