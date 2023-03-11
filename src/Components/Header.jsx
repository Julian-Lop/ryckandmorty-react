import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getAuth,signOut  } from 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'

export default function Header() {

  const user = useUser()
  const [rutac, setrutac] = useState('home')
  
  const logout = async () => {
    const auth = getAuth()
    const out = await signOut(auth)
  }

  useEffect(() => {
    if(user.data){
      let ruta = window.location.href

      chageTab(ruta)

      const marker = document.querySelector('#marker')

      const item = document.querySelectorAll('.navtab')

      function Indicator(e){
        marker.style.left = e.offsetLeft+'px'
        marker.style.width = e.offsetWidth+'px'
      }

      function ReturnInd(){
        const itemSelect = document.querySelector('.active')
        marker.style.left = itemSelect.offsetLeft+'px'
        marker.style.width = itemSelect.offsetWidth+'px'
      }

      if(ruta.includes('home')){
        ReturnInd()
      }
      if(ruta.includes('characters')){
        ReturnInd()
      }
      if(ruta.includes('locations')){
        ReturnInd()
      }
      if(ruta.includes('episodes')){
        ReturnInd()
      }
      if(ruta.includes('favorites')){
        ReturnInd()
      }

      item.forEach(Link => {
        Link.addEventListener('mouseover', (e) => {
          Indicator(e.target)
        })
      })

      item.forEach(Link => {
        Link.addEventListener('mouseout', (e) => {
          ReturnInd()
        })
      })
    }
  })

  const chageTab = (e) => {
    setrutac(e)
  }

  return (
    <div className='Navbar'>
      {user.data && 
        <ul>
          <li className={rutac.includes('home') ? 'navtab act' : 'navtab'} onClick={() => chageTab('home')}>
            <NavLink 
              to="/home"          
            >
            Home
            </NavLink>
          </li>
          <li className={rutac.includes('characters') ? 'navtab act' : 'navtab'} onClick={() => chageTab('characters')}>
            <NavLink 
              to="/characters"          
            >
            Characters
            </NavLink>
          </li>
          <li className={rutac.includes('locations') ? 'navtab act' : 'navtab'} onClick={() => chageTab('locations')}>
            <NavLink 
              to="/locations"          
            >
            Locations
            </NavLink>
          </li>
          <li className={rutac.includes('episodes') ? 'navtab act' : 'navtab'} onClick={() => chageTab('episodes')}>
            <NavLink 
              to="/episodes"          
            >
            Episodes
            </NavLink>
          </li>
          <li className={rutac.includes('favorites') ? 'navtab act' : 'navtab'} onClick={() => chageTab('favorites')}>
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
