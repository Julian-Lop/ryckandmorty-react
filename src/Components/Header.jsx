import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getAuth,signOut  } from 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'

export default function Header() {

  const user = useUser()
  
  let ruta = window.location.href

  const logout = async () => {
    const auth = getAuth()
    const out = await signOut(auth)
  }

  useEffect(() => {
    const marker = document.querySelector('#marker')

  const item = document.querySelectorAll('ul li ')

  function Indicator(e){
    marker.style.left = e.offsetLeft+'px'
    marker.style.width = e.offsetWidth+'px'
  }
    item.forEach(Link => {
      Link.addEventListener('mouseover', (e) => {
        Indicator(e.target)
      })
    })
  })

  return (
    <div className='Navbar'>
      {user.data && 
        <ul>
          <li className={ruta.includes('home') && 'active'}>
            <NavLink 
              to="/home"          
            >
            Home
            </NavLink>
          </li>
          <li className={ruta.includes('home') && 'active'} >
            <NavLink 
              to="/characters"          
            >
            Characters
            </NavLink>
          </li>
          <li className={ruta.includes('home') && 'active'} >
            <NavLink 
              to="/locations"          
            >
            Locations
            </NavLink>
          </li>
          <li className={ruta.includes('home') && 'active'} >
            <NavLink 
              to="/episodes"          
            >
            Episodes
            </NavLink>
          </li>
          <li className={ruta.includes('home') && 'active'} >
            <NavLink
              to="/favorites"
            >
            Favorites
            </NavLink>
          </li>
          <div id='marker'></div>
        </ul>
      }
      {user.data && <button className='btn2' onClick={logout}>Logout</button>}
    </div>
  )
}
